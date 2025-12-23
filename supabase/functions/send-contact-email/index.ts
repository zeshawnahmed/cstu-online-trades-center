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

    // Determine the subject line and email content based on program interest
    let userSubject = "Thank you for contacting American Institute of Trades";
    let userEmailContent = `
      <p>Thank you for your interest in American Institute of Trades (AIT) in Sacramento, CA.</p>
      <p>We have received your message and will get back to you soon.</p>
      <p>If you have any questions, feel free to call at 916-365-6907.</p>
      <p>Best regards,<br>
      <strong>Shawn</strong><br>
      Program Director<br>
      American Institute of Trades (AIT)<br>
      <a href="https://www.levelupait.com">www.levelupait.com</a></p>
    `;
    
    if (programInterest === 'pharmacy-technician') {
      userSubject = "California Pharmacy Technician Program AIT - Next Steps";
      userEmailContent = `
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
      `;
    } else if (programInterest === 'hvac-technician') {
      userSubject = "HVAC Technician Program – Next Steps";
      userEmailContent = `
        <p>Thank you for your interest in the HVAC Technician Program at American Institute of Trades (AIT) in Sacramento CA. I'm glad you reached out.</p>
        
        <h3>What You'll Learn</h3>
        
        <p>In this 12 week program you'll build a strong foundation in HVAC including:</p>
        <ul>
          <li>Basics of electricity</li>
          <li>Safety tools and core HVAC systems</li>
          <li>Diagnostics and troubleshooting</li>
          <li>Refrigeration fundamentals</li>
          <li>EPA 608 exam preparation</li>
        </ul>
        
        <p>You can view the full curriculum on our website: <a href="https://www.levelupait.com">www.levelupait.com</a>. Everything is designed to help you feel confident and job ready.</p>
        
        <h3>Why AIT</h3>
        
        <p>We're a community focused trade school working with experienced Sacramento area HVAC professionals who genuinely care about helping new technicians enter the trade.</p>
        
        <ul>
          <li>100 percent online and self paced built for working adults</li>
          <li>Job search support near graduation including résumé guidance and sharing your résumé with local employers</li>
          <li>Complimentary twice monthly hands on skills workshops near UC Davis Medical Center</li>
        </ul>
        
        <p><em>Currently, hands on workshops are offered as a bonus opportunity and are not a guaranteed or refundable portion of tuition as they depend on instructor collaborator availability. Many of our instructor collaborators work full time in the field or own their own HVAC businesses. That said, we strive and anticipate to hold these workshops regularly.</em></p>
        
        <h3>Tuition</h3>
        
        <p>Total cost: $2,500</p>
        
        <h3>Next Steps</h3>
        
        <p>To keep the enrollment process efficient, we only work with students who are ready to move forward with enrollment. If that's you, please reply confirming your tuition payment option below and I'll send the Enrollment Agreement and tuition payment instructions.</p>
        
        <ul>
          <li>Option 1: Full tuition payment of $2,500</li>
          <li>Option 2: Tuition payment plan with 3 payments of $833.33</li>
        </ul>
        
        <p>Access to the online materials is provided once enrollment and tuition payment are complete.</p>
        
        <p>If you have any questions feel free to call or text me at 916-365-6907. I'm happy to help.</p>
        
        <p>Additional financial aid options are available on our website.</p>
        
        <p>Best regards<br>
        <strong>Shawn</strong><br>
        Program Director<br>
        American Institute of Trades (AIT)</p>
      `;
    }

    // Send admin notification email
    const adminEmailResponse = await resend.emails.send({
      from: "Contact Form <admin@levelupait.com>",
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

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send the program-specific email to the user
    console.log("Sending user email to:", email, "with subject:", userSubject);
    const userEmailResponse = await resend.emails.send({
      from: "American Institute of Trades <admin@levelupait.com>",
      to: [email],
      subject: userSubject,
      html: userEmailContent,
    });
    
    console.log("User email response:", userEmailResponse);
    
    if (userEmailResponse?.error) {
      console.error("Error sending user email:", userEmailResponse.error);
    }

    return new Response(JSON.stringify({
      success: true, 
      submissionId: submission.id,
      adminEmailId: adminEmailResponse.data?.id,
      userEmailId: userEmailResponse.data?.id
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