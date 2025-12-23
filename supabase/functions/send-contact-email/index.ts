import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend("re_9J25fCVN_i6kZzjiAP9KhkQjVbWXKkC1x");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  programInterest?: string;
  howDidYouHear?: string;
  referrerName?: string;
  referralCode?: string;
  otherSource?: string;
}

const getProgramName = (slug: string): string => {
  const programs: Record<string, string> = {
    'hvac-technician': 'HVAC Technician Program',
    'pharmacy-technician': 'California Pharmacy Technician Program (Coming Soon)',
  };
  return programs[slug] || slug || 'Not specified';
};

const getHowDidYouHearLabel = (value: string): string => {
  const options: Record<string, string> = {
    'craigslist': 'Craigslist',
    'indeed': 'Indeed',
    'school-counselor': 'School Counselor',
    'facebook': 'Facebook',
    'instagram': 'Instagram',
    'referred': 'I was Referred',
    'other': 'Other',
  };
  return options[value] || value || 'Not specified';
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, programInterest, howDidYouHear, referrerName, referralCode, otherSource }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, programInterest, howDidYouHear, referrerName, referralCode, otherSource });

    // Initialize Supabase client with service role key to bypass RLS
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // Store the contact submission in the database
    const { data: submission, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone,
        message,
        interested_in_financial_aid: false,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact submission");
    }

    const programName = getProgramName(programInterest || '');

    // Build the "How they found us" display text
    let howDidYouHearDisplay = getHowDidYouHearLabel(howDidYouHear || '');
    if (howDidYouHear === 'other' && otherSource) {
      howDidYouHearDisplay = `Other: ${otherSource}`;
    }
    
    // Build referral info section if applicable
    let referralInfoHtml = '';
    if (howDidYouHear === 'referred') {
      referralInfoHtml = `
        <div style="background-color: #FEF3C7; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="margin: 0 0 10px 0; color: #92400E;">📋 Referral Information</h3>
          <p style="margin: 5px 0;"><strong>Referrer Name:</strong> ${referrerName || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Referral Code:</strong> ${referralCode || 'Not provided'}</p>
        </div>
      `;
    }

    // Send email to zeshawn.a@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["zeshawn.a@gmail.com"],
      subject: `New Contact Form Submission from ${name}${howDidYouHear === 'referred' ? ' (REFERRAL)' : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Program of Interest:</strong> ${programName}</p>
        <p><strong>How They Found Us:</strong> ${howDidYouHearDisplay}</p>
        ${referralInfoHtml}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    console.log("Admin email sent successfully:", emailResponse);

    // Send program-specific email to the user based on their program interest
    let userEmailResponse = null;
    
    if (programInterest === 'pharmacy-technician') {
      console.log("Sending Pharmacy Technician email to:", email);
      userEmailResponse = await resend.emails.send({
        from: "American Institute of Trades <onboarding@resend.dev>",
        to: [email],
        subject: "California Pharmacy Technician Program AIT - Next Steps",
        html: `
          <p>Thank you for your interest in the Pharmacy Technician Program at American Institute of Trades (AIT) in Sacramento, CA</p>
          
          <p>Our next start date is 1/1/26.</p>
          
          <p><a href="https://www.levelupait.com">https://www.levelupait.com</a></p>
          
          <h3>What You'll Learn</h3>
          
          <p>This program is recognized by the Pharmacy Technician Certification Board (PTCB) and prepares you to sit for the Pharmacy Technician Certification Board Exam (PTCE) and covers:</p>
          
          <ul>
            <li>Federal pharmacy law & regulations</li>
            <li>Medication safety and error prevention</li>
            <li>Pharmacology and drug classifications</li>
            <li>Pharmacy calculations</li>
            <li>Prescription processing and pharmacy workflow</li>
          </ul>
          
          <p>Full curriculum available at <a href="https://www.levelupait.com">https://www.levelupait.com</a>.</p>
          
          <h3>Program Format</h3>
          
          <ul>
            <li>100% online, self-paced, asynchronous</li>
            <li>Designed for working adults</li>
            <li>Job-search support near program completion</li>
          </ul>
          
          <h3>Tuition</h3>
          
          <p>Total program cost: $2,500</p>
          
          <h3>Next Steps</h3>
          
          <p><strong>1.</strong> Reply to this email confirming your interest and which payment option you would like to move forward with:</p>
          <ul>
            <li>Option 1: Pay $2,500 upfront</li>
            <li>Option 2: Payment plan — 3 payments of $833.33</li>
          </ul>
          
          <p><strong>2.</strong> Once confirmed, I'll send your Enrollment Agreement and deposit instructions to secure your seat and we will also find time to chat.</p>
          
          <p>Access to online program materials is granted only after the Enrollment Agreement and deposit are received. Remaining tuition is due per the selected payment option and outlined in the Enrollment Agreement.</p>
          
          <p>If you have any questions, feel free to email me back or call at 916-365-6907.</p>
          
          <p>Additional financial aid and payment assistance options are available on our website:</p>
          
          <p><a href="https://www.levelupait.com">https://www.levelupait.com</a></p>
          
          <p>Best regards,</p>
          
          <p><strong>Shawn</strong><br>
          Pharmacy Technician Program Director<br>
          American Institute of Trades (AIT)</p>
        `,
      });
      console.log("Pharmacy Technician email response:", userEmailResponse);
    } else if (programInterest === 'hvac-technician') {
      console.log("Sending HVAC email to:", email);
      userEmailResponse = await resend.emails.send({
        from: "American Institute of Trades <onboarding@resend.dev>",
        to: [email],
        subject: "HVAC Technician Program – Next Steps",
        html: `
          <p>Thank you for your interest in the HVAC Technician Program at American Institute of Trades (AIT) in Sacramento, CA. I'm glad you reached out.</p>
          
          <p>Website: <a href="https://www.levelupait.com">www.levelupait.com</a></p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <h3>What You'll Learn</h3>
          
          <p>In this 12-week program, you'll build a strong HVAC foundation, including:</p>
          <ul>
            <li>Basics of electricity</li>
            <li>Safety, tools, and core HVAC systems</li>
            <li>Diagnostics and troubleshooting</li>
            <li>Refrigeration fundamentals</li>
            <li>EPA 608 exam preparation</li>
          </ul>
          
          <p>Full curriculum available on our website.</p>
          
          <p>This program is designed to help you feel confident and job-ready.</p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <h3>Why AIT</h3>
          
          <p>We're a community-focused school working with experienced Sacramento-area HVAC professionals who care about helping new technicians enter the trade.</p>
          <ul>
            <li>100% online, self-paced, built for working adults</li>
            <li>Job-search support near graduation, including resume guidance and sharing your résumé with local employers</li>
            <li>Complimentary, twice-monthly hands-on skills workshops near UC Davis Medical Center</li>
          </ul>
          
          <p><em>Because these depend on instructor availability (many who work full time or own their own HVAC businesses) these are offered as a bonus opportunity and not a guaranteed or refundable portion of tuition. However, we strive to hold these regularly.</em></p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <h3>Tuition</h3>
          
          <p>Total cost: $2,500</p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <h3>Next Steps</h3>
          
          <p><strong>1.</strong> Reply to confirm your interest and choose a payment option:</p>
          <ul>
            <li>Option 1: $2,500 paid in full</li>
            <li>Option 2: Payment plan — 3 payments of $833.33</li>
          </ul>
          
          <p><strong>2.</strong> I'll send your Enrollment Agreement and payment instructions.</p>
          
          <p><strong>3.</strong> Access to online materials is provided once enrollment and payment are complete.</p>
          
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          
          <p>If you have any questions, feel free to call me at 916-365-6907. I'm happy to help.</p>
          
          <p>Financial aid options are available on our website.</p>
          
          <p>Best regards,<br>
          <strong>Shawn</strong><br>
          Program Director<br>
          American Institute of Trades (AIT)<br>
          <a href="https://www.levelupait.com">www.levelupait.com</a></p>
        `,
      });
      console.log("HVAC email response:", userEmailResponse);
    } else {
      console.log("No program-specific email sent - programInterest:", programInterest);
    }
    
    if (userEmailResponse?.error) {
      console.error("Error sending user email:", userEmailResponse.error);
    }

    return new Response(JSON.stringify({
      success: true, 
      submissionId: submission.id,
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);