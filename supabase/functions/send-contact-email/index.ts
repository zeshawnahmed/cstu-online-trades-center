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
    'pharmacy-technician': 'California Pharmacy Technician Program',
    'medical-assistant': 'Certified Medical Assistant Program',
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

// Send SMS via Twilio
async function sendSMS(to: string, body: string): Promise<{ success: boolean; error?: string; sid?: string }> {
  const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
  const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
  const fromPhone = Deno.env.get("TWILIO_PHONE_NUMBER");

  if (!accountSid || !authToken || !fromPhone) {
    console.log("Twilio credentials not configured, skipping SMS");
    return { success: false, error: "Twilio not configured" };
  }

  // Format phone number - ensure it has country code
  let formattedPhone = to.replace(/\D/g, '');
  if (formattedPhone.length === 10) {
    formattedPhone = '1' + formattedPhone; // Add US country code
  }
  if (!formattedPhone.startsWith('+')) {
    formattedPhone = '+' + formattedPhone;
  }

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Authorization": "Basic " + btoa(`${accountSid}:${authToken}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: formattedPhone,
          From: fromPhone,
          Body: body,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Twilio API error:", data);
      return { success: false, error: data.message || "Failed to send SMS" };
    }

    console.log("SMS sent successfully:", data.sid);
    return { success: true, sid: data.sid };
  } catch (error: any) {
    console.error("Error sending SMS:", error);
    return { success: false, error: error.message };
  }
}

// Generate SMS content based on program
function getSMSContent(programInterest: string, name: string): string {
  const programName = programInterest === 'hvac-technician' 
    ? 'HVAC Technician' 
    : programInterest === 'pharmacy-technician'
    ? 'Pharmacy Technician'
    : programInterest === 'medical-assistant'
    ? 'Certified Medical Assistant'
    : 'our programs';

  return `Hi ${name}! Thank you for your interest in the ${programName} Program at American Institute of Trades. Check your email for next steps, or call us at 916-343-8014. Visit levelupait.com for more info.`;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, programInterest, howDidYouHear, referrerName, referralCode, otherSource }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, programInterest, howDidYouHear, referrerName, referralCode, otherSource });

    // Initialize Supabase client with service role key to bypass RLS
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // Store the contact submission in the database with program interest
    const { data: submission, error: dbError } = await supabaseClient
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone,
        message,
        interested_in_financial_aid: false,
        program_interest: programInterest || null,
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
      <p>If you have any questions, feel free to call at 916-343-8014.</p>
      <p>Best regards,<br>
      <strong>Shawn</strong><br>
      Program Director<br>
      American Institute of Trades (AIT)<br>
      <a href="https://www.levelupait.com">levelupait.com</a></p>
    `;
    
    if (programInterest === 'pharmacy-technician') {
      userSubject = "Next Steps - Pharmacy Technician Program";
      userEmailContent = `
        <p>Thank you for your interest in the Pharmacy Technician Program at American Institute of Trades (AIT). We're glad you reached out.</p>
        
        <h3>What You'll Learn</h3>
        
        <p>This program is approved and recognized by the Pharmacy Technician Certification Board (PTCB). We are listed on PTCB's official list of approved training providers found <a href="https://ptcb.org/ptcb-recognized-education-training-program-directory/">here</a> (search for "American Institute of Trades").</p>
        
        <p>This program prepares students to sit for the Pharmacy Technician Certification Exam (PTCE). The curriculum includes:</p>
        
        <ul>
          <li>Federal pharmacy law and regulations</li>
          <li>Medication safety and error prevention</li>
          <li>Pharmacology and drug classifications</li>
          <li>Pharmacy calculations</li>
          <li>Prescription processing and pharmacy workflow</li>
        </ul>
        
        <p>The full curriculum is available on <a href="https://www.levelupait.com">our website</a>.<br>
        All coursework is designed to help students feel confident and exam-ready.</p>
        
<h3>Program Format</h3>
        
        <ul>
          <li>100% online, self-paced, asynchronous</li>
          <li>Designed for working adults</li>
          <li>Program start dates are the 1st and 15th of every month</li>
          <li>Job search support provided near program completion</li>
        </ul>
        
        <h3>Tuition</h3>
        
        <ul>
          <li>Total program cost: $2,500</li>
        </ul>
        
        <h3>Next Steps</h3>
        
        <p>To keep the enrollment process efficient, we only work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>
        
        <p>Option 1: Full tuition payment of $2,500<br>
        Option 2: Tuition payment plan — 3 payments of $833.33</p>
        
        <p>We will then email you a Student Enrollment Agreement to review and sign along with a link to make your first tuition payment.</p>
        
        <p>Once the Enrollment Agreement and initial tuition payment are complete, access to the program materials will be provided. Remaining tuition payments are due according to the selected option. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>
        
        <h3>Questions or Assistance</h3>
        
        <p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>
        
        <p>Additional financial aid and tuition payment assistance options are available on our website.</p>
        
        <p>Best regards,<br>
        <strong>Admissions Team</strong><br>
        American Institute of Trades (AIT)<br>
        Pharmacy Technician Program<br>
        <a href="https://www.levelupait.com">levelupait.com</a><br>
        916-343-8014</p>
      `;
    } else if (programInterest === 'hvac-technician') {
      userSubject = "Next Steps - HVAC Program";
      userEmailContent = `
        <p>Thank you for your interest in the HVAC Technician Program at American Institute of Trades (AIT) in Sacramento, CA. We're glad you reached out.</p>
        
        <h3>What You'll Learn</h3>
        
        <p>In this 12-week program, students build a strong foundation in HVAC, including:</p>
        
        <ul>
          <li>Basics of electricity</li>
          <li>Safety, tools, and core HVAC systems</li>
          <li>Diagnostics and troubleshooting</li>
          <li>Refrigeration fundamentals</li>
          <li>Preparation for the EPA 608 certification exam</li>
        </ul>
        
        <p>The full curriculum is available on <a href="https://www.levelupait.com">our website</a>.<br>
        All coursework is designed to help students feel confident and job-ready.</p>
        
        <h3>Why AIT</h3>
        
        <p>American Institute of Trades is a community-focused trade school working with experienced Sacramento-area HVAC professionals who are committed to helping new technicians enter the trade.</p>
        
        <ul>
          <li>100% online, self-paced, designed for working adults</li>
          <li>Job search support near graduation, including résumé guidance and sharing student profiles with local employers</li>
          <li>Complimentary twice-monthly hands-on skills workshops near UC Davis Medical Center</li>
        </ul>
        
        <p><em>Hands-on workshops are offered as a bonus opportunity and are not a guaranteed or refundable portion of tuition. Workshop availability heavily depends on instructor collaborator schedules, as many collaborators work full-time in the field or operate their own HVAC businesses. AIT anticipates and strives to hold these workshops regularly.</em></p>
        
        <h3>Tuition</h3>
        
        <ul>
          <li>Total program cost: $2,500</li>
        </ul>
        
        <h3>Next Steps</h3>
        
        <p>To keep the enrollment process efficient, we only work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>
        
        <p>Option 1: Full tuition payment of $2,500<br>
        Option 2: Tuition payment plan — 3 payments of $833.33</p>
        
        <p>We will then email you a Student Enrollment Agreement to review and sign along with a link to make your first tuition payment.</p>
        
        <p>Once the Enrollment Agreement and initial tuition payment are complete, access to the program materials will be provided. Remaining tuition payments are due according to the selected option. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>
        
        <h3>Questions or Assistance</h3>
        
        <p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>
        
        <p>Additional financial aid and tuition assistance options are available on our website.</p>
        
        <p>Best regards,<br>
        <strong>Admissions Team</strong><br>
        American Institute of Trades (AIT)<br>
        HVAC Technician Program<br>
        <a href="https://www.levelupait.com">levelupait.com</a><br>
        916-343-8014</p>
      `;
    } else if (programInterest === 'medical-assistant') {
      userSubject = "Next Steps - Certified Medical Assistant Program";
      userEmailContent = `
        <p>Thank you for your interest in the Certified Medical Assistant Program at American Institute of Trades (AIT). We're glad you reached out.</p>
        
        <h3>What You'll Learn</h3>
        
        <p>This program is approved and recognized by the National Healthcareer Association (NHA). Upon completion, you'll be prepared to sit for the Certified Clinical Medical Assistant (CCMA) exam.</p>
        
        <p>The curriculum includes:</p>
        
        <ul>
          <li>Medical terminology and anatomy</li>
          <li>Clinical procedures and patient care</li>
          <li>Vital signs and medical measurements</li>
          <li>Infection control and safety</li>
          <li>Medical office administration</li>
          <li>EKG and phlebotomy basics</li>
        </ul>
        
        <p>The full curriculum is available on <a href="https://www.levelupait.com">our website</a>.<br>
        All coursework is designed to help students feel confident and exam-ready.</p>
        
        <h3>Program Format</h3>
        
        <ul>
          <li>100% online, self-paced, asynchronous</li>
          <li>Designed for working adults</li>
          <li>Program start dates are the 1st and 15th of every month</li>
          <li>Job search support provided near program completion</li>
        </ul>
        
        <h3>Tuition</h3>
        
        <ul>
          <li>Total program cost: $2,500</li>
        </ul>
        
        <h3>Next Steps</h3>
        
        <p>To keep the enrollment process efficient, we only work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>
        
        <p>Option 1: Full tuition payment of $2,500<br>
        Option 2: Tuition payment plan — 3 payments of $833.33</p>
        
        <p>We will then email you a Student Enrollment Agreement to review and sign along with a link to make your first tuition payment.</p>
        
        <p>Once the Enrollment Agreement and initial tuition payment are complete, access to the program materials will be provided. Remaining tuition payments are due according to the selected option. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>
        
        <h3>Questions or Assistance</h3>
        
        <p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>
        
        <p>Additional financial aid and tuition payment assistance options are available on our website.</p>
        
        <p>Best regards,<br>
        <strong>Admissions Team</strong><br>
        American Institute of Trades (AIT)<br>
        Certified Medical Assistant Program<br>
        <a href="https://www.levelupait.com">levelupait.com</a><br>
        916-343-8014</p>
      `;
    }

    // Build plain-text referral info
    let referralInfoText = '';
    if (howDidYouHear === 'referred') {
      referralInfoText = `
REFERRAL INFORMATION
Referrer Name: ${referrerName || 'Not provided'}
Referral Code: ${referralCode || 'Not provided'}
`;
    }

    // Send admin notification email
    const adminEmailResponse = await resend.emails.send({
      from: "Contact Form <admin@levelupait.com>",
      to: ["zeshawn.a@gmail.com"],
      reply_to: "admin@levelupait.com",
      subject: `New Contact Form Submission from ${name}${howDidYouHear === 'referred' ? ' (REFERRAL)' : ''}`,
      text: `New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Program of Interest: ${programName}
How They Found Us: ${howDidYouHearDisplay}
${referralInfoText}
Message:
${message}

Submitted at: ${new Date().toLocaleString()}`,
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

    // Generate plain-text version by stripping HTML
    const userEmailText = userEmailContent
      .replace(/<h3>/g, '\n\n')
      .replace(/<\/h3>/g, '\n')
      .replace(/<li>/g, '• ')
      .replace(/<\/li>/g, '\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '\n')
      .replace(/<ul>/g, '')
      .replace(/<\/ul>/g, '')
      .replace(/<em>/g, '')
      .replace(/<\/em>/g, '')
      .replace(/<strong>/g, '')
      .replace(/<\/strong>/g, '')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g, '$2 ($1)')
      .replace(/<[^>]+>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    // Send the program-specific email to the user
    console.log("Sending user email to:", email, "with subject:", userSubject);
    const userEmailResponse = await resend.emails.send({
      from: "American Institute of Trades <admin@levelupait.com>",
      to: [email],
      reply_to: "admin@levelupait.com",
      subject: userSubject,
      text: userEmailText,
      html: userEmailContent,
    });
    
    console.log("User email response:", userEmailResponse);
    
    // Store the Message-ID for threading follow-up emails
    const messageId = userEmailResponse.data?.id;
    if (messageId) {
      const { error: updateError } = await supabaseClient
        .from("contact_submissions")
        .update({ email_message_id: messageId })
        .eq("id", submission.id);
      
      if (updateError) {
        console.error("Error storing message ID:", updateError);
      } else {
        console.log("Stored Message-ID for threading:", messageId);
      }
    }
    
    if (userEmailResponse?.error) {
      console.error("Error sending user email:", userEmailResponse.error);
    }

    // Send SMS if phone number is provided
    let smsResult = null;
    if (phone) {
      console.log("Sending SMS to:", phone);
      const smsContent = getSMSContent(programInterest || '', name);
      smsResult = await sendSMS(phone, smsContent);
      console.log("SMS result:", smsResult);
    }

    return new Response(JSON.stringify({
      success: true, 
      submissionId: submission.id,
      adminEmailId: adminEmailResponse.data?.id,
      userEmailId: userEmailResponse.data?.id,
      smsResult
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