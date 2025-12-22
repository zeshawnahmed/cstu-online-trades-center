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
    const { name, email, phone, message, programInterest, howDidYouHear, referrerName, referralCode }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, programInterest, howDidYouHear, referrerName, referralCode });

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
        interested_in_financial_aid: interestedInFinancialAid,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact submission");
    }

    const programName = getProgramName(programInterest || '');

    const howDidYouHearLabel = getHowDidYouHearLabel(howDidYouHear || '');
    
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
        <p><strong>How They Found Us:</strong> ${howDidYouHearLabel}</p>
        ${referralInfoHtml}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    await resend.emails.send({
      from: "American Institute of Trades <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting AIT!",
      html: `
        <h2>Thank you for your message, ${name}!</h2>
        <p>We have received your contact form submission and an admissions representative will be in touch with you soon.</p>
        <p><strong>Program of Interest:</strong> ${programName}</p>
        <p>Here's a copy of what you sent:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin: 16px 0;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>Best regards,<br>The American Institute of Trades Team</p>
      `,
    });

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