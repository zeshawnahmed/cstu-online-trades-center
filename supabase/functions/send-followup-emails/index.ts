import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Get program display name for emails
function getProgramDisplayName(programInterest: string): string {
  switch (programInterest) {
    case 'hvac-technician':
      return 'HVAC Technician Program';
    case 'medical-assistant':
      return 'Certified Clinical Medical Assistant Program';
    default:
      return 'Pharmacy Technician Program';
  }
}

// Get program short name for signatures
function getProgramShortName(programInterest: string): string {
  switch (programInterest) {
    case 'hvac-technician':
      return 'HVAC Technician Program';
    case 'medical-assistant':
      return 'Certified Clinical Medical Assistant Program';
    default:
      return 'Pharmacy Technician Program';
  }
}

// Get location text (only for HVAC)
function getLocationText(programInterest: string): string {
  return programInterest === 'hvac-technician' ? ' in Sacramento, CA' : '';
}

// Get rotating subject line based on follow-up number
function getSubjectLine(programInterest: string, followupNumber: number): string {
  const programName = getProgramDisplayName(programInterest);
  const variation = followupNumber % 3;
  
  switch (variation) {
    case 1: // Follow-ups 1, 4, 7...
      return `Next Steps: ${programName}`;
    case 2: // Follow-ups 2, 5, 8...
      return "Yes, Change Is Possible";
    case 0: // Follow-ups 3, 6, 9...
      return "Reality Only Rewards Action";
    default:
      return `Next Steps: ${programName}`;
  }
}

// Get rotating opening paragraph based on follow-up number
function getOpeningParagraph(programInterest: string, followupNumber: number, name: string): string {
  const programName = getProgramDisplayName(programInterest);
  const locationText = getLocationText(programInterest);
  const variation = followupNumber % 3;
  
  switch (variation) {
    case 1: // Follow-ups 1, 4, 7...
      return `<p>Hi ${name},</p>

<p>Thank you for your interest in the ${programName} at American Institute of Trades (AIT)${locationText}. We're glad you reached out.</p>`;
    case 2: // Follow-ups 2, 5, 8...
      return `<p>Hi ${name},</p>

<p>Change is possible, and it starts with a single step. You've already taken that step by reaching out about the ${programName} at American Institute of Trades. Let's keep the momentum going.</p>`;
    case 0: // Follow-ups 3, 6, 9...
      return `<p>Hi ${name},</p>

<p>Reality only rewards action. You've already taken the first step by reaching out about the ${programName} at American Institute of Trades. Now it's time to take the next one and turn that interest into real progress.</p>`;
    default:
      return `<p>Hi ${name},</p>

<p>Thank you for your interest in the ${programName} at American Institute of Trades (AIT)${locationText}. We're glad you reached out.</p>`;
  }
}

// Get program-specific follow-up content with rotating subject lines and openings
function getFollowupContent(programInterest: string, followupNumber: number, name: string): { subject: string; body: string } {
  const subject = getSubjectLine(programInterest, followupNumber);
  const openingParagraph = getOpeningParagraph(programInterest, followupNumber, name);
  const programShortName = getProgramShortName(programInterest);
  
  if (programInterest === 'hvac-technician') {
    return {
      subject,
      body: `
${openingParagraph}

<h3>What You'll Learn</h3>

<p>In this 12 week program, students build a strong foundation in HVAC, including:</p>

<ul>
  <li>Basics of electricity</li>
  <li>Safety, tools, and core HVAC systems</li>
  <li>Diagnostics and troubleshooting</li>
  <li>Refrigeration fundamentals</li>
  <li>Preparation for the EPA 608 certification exam</li>
</ul>

<p>The full curriculum is available on <a href="https://www.levelupait.com">our website</a>.<br>
All coursework is designed to help students feel confident and job ready.</p>

<h3>Why AIT</h3>

<p>American Institute of Trades is a community focused trade school working with experienced Sacramento area HVAC professionals who are committed to helping new technicians enter the trade.</p>

<ul>
  <li>100% online, self paced, designed for working adults</li>
  <li>Job search support near graduation, including résumé guidance and sharing student profiles with local employers</li>
</ul>

<h3>Tuition</h3>

<ul>
  <li>Total program cost: $2,500</li>
</ul>

<h3>Next Steps</h3>

<p>To keep the enrollment process efficient, we work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>

<p>Option 1: Full tuition payment of $2,500<br>
Option 2: Tuition payment plan: 3 payments of $833.33</p>

<p>Access to online program materials is provided once enrollment and tuition payment are complete.</p>

<h3>Questions or Assistance</h3>

<p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>

<p>Additional financial aid and tuition assistance options are available on our website.</p>

<p>Best regards,<br>
<strong>Admissions Team</strong><br>
American Institute of Trades (AIT)<br>
${programShortName}<br>
<a href="https://www.levelupait.com">levelupait.com</a><br>
916-343-8014</p>
      `
    };
  } else if (programInterest === 'medical-assistant') {
    return {
      subject,
      body: `
${openingParagraph}

<h3>What You'll Learn</h3>

<p>This program is approved and recognized by the National Healthcareer Association (NHA). Upon completion, you'll be prepared to sit for the Certified Clinical Medical Assistant (CCMA) exam.</p>

<p>The curriculum includes:</p>

<ul>
  <li>Foundational clinical knowledge and medical terminology</li>
  <li>Anatomy, physiology, and body systems</li>
  <li>Infection control and patient safety (OSHA standards)</li>
  <li>Patient care and clinical procedures</li>
  <li>Phlebotomy and specimen collection</li>
  <li>EKG and diagnostic testing</li>
  <li>Administrative and professional responsibilities</li>
</ul>

<p>The full curriculum is available on <a href="https://www.levelupait.com">our website</a>.<br>
All coursework is designed to help students feel confident and exam ready.</p>

<h3>Program Format</h3>

<ul>
  <li>100% online, self paced, asynchronous</li>
  <li>Designed for working adults</li>
  <li>Program start dates are the 1st and 15th of every month</li>
  <li>Job search support provided near program completion</li>
</ul>

<h3>Tuition</h3>

<ul>
  <li>Total program cost: $2,500</li>
</ul>

<h3>Next Steps</h3>

<p>To keep the enrollment process efficient, we work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>

<p>Option 1: Full tuition payment of $2,500<br>
Option 2: Tuition payment plan: 3 payments of $833.33</p>

<p>Once the Enrollment Agreement and initial tuition payment are complete, access to the online program materials will be provided. Remaining tuition payments are due according to the selected option and outlined in the Enrollment Agreement. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>

<h3>Questions or Assistance</h3>

<p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>

<p>Additional financial aid and tuition payment assistance options are available on our website.</p>

<p>Best regards,<br>
<strong>Admissions Team</strong><br>
American Institute of Trades (AIT)<br>
${programShortName}<br>
<a href="https://www.levelupait.com">levelupait.com</a><br>
916-343-8014</p>
      `
    };
  } else {
    // Pharmacy Technician (default)
    return {
      subject,
      body: `
${openingParagraph}

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
All coursework is designed to help students feel confident and exam ready.</p>

<h3>Program Format</h3>

<ul>
  <li>100% online, self paced, asynchronous</li>
  <li>Designed for working adults</li>
  <li>Program start dates are the 1st and 15th of every month</li>
  <li>Job search support provided near program completion</li>
</ul>

<h3>Tuition</h3>

<ul>
  <li>Total program cost: $2,500</li>
</ul>

<h3>Next Steps</h3>

<p>To keep the enrollment process efficient, we work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>

<p>Option 1: Full tuition payment of $2,500<br>
Option 2: Tuition payment plan: 3 payments of $833.33</p>

<p>Once the Enrollment Agreement and initial tuition payment are complete, access to the online program materials will be provided. Remaining tuition payments are due according to the selected option and outlined in the Enrollment Agreement. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>

<h3>Questions or Assistance</h3>

<p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>

<p>Additional financial aid and tuition payment assistance options are available on our website.</p>

<p>Best regards,<br>
<strong>Admissions Team</strong><br>
American Institute of Trades (AIT)<br>
${programShortName}<br>
<a href="https://www.levelupait.com">levelupait.com</a><br>
916-343-8014</p>
      `
    };
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting follow-up email and SMS processing...");

    // Create Supabase client with service role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get submissions that need follow-up
    // No upper limit on followup_count - continues weekly indefinitely after day 7
    const now = new Date().toISOString();
    const { data: submissions, error: fetchError } = await supabase
      .from("contact_submissions")
      .select("*")
      .lt("next_followup_at", now)
      .not("next_followup_at", "is", null)
      .order("next_followup_at", { ascending: true });

    if (fetchError) {
      console.error("Error fetching submissions:", fetchError);
      throw fetchError;
    }

    console.log(`Found ${submissions?.length || 0} submissions needing follow-up`);

    const results = [];
    const errors = [];

    // Helper function to add delay between emails (500ms = 2 emails/second max)
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    for (const submission of submissions || []) {
      const followupNumber = (submission.followup_count || 0) + 1;
      // Use stored program_interest from the database
      const programInterest = submission.program_interest || 'hvac-technician';
      
      console.log(`Sending follow-up #${followupNumber} to ${submission.email} for program: ${programInterest}`);

      const { subject, body } = getFollowupContent(programInterest, followupNumber, submission.name);

      try {
        // Generate plain-text version by stripping HTML
        const bodyText = body
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

        // Build email options with threading headers if we have the original Message-ID
        const emailOptions: any = {
          from: "American Institute of Trades <admin@levelupait.com>",
          to: [submission.email],
          reply_to: "admin@levelupait.com",
          subject: subject,
          text: bodyText,
          html: body,
        };

        // Add threading headers to make follow-ups appear in same conversation
        if (submission.email_message_id) {
          const originalMessageId = `<${submission.email_message_id}@resend.dev>`;
          emailOptions.headers = {
            "In-Reply-To": originalMessageId,
            "References": originalMessageId,
          };
          console.log(`Adding threading headers for message: ${originalMessageId}`);
        }

        // Send follow-up email
        const emailResponse = await resend.emails.send(emailOptions);

        console.log(`Email sent to ${submission.email}:`, emailResponse);

        // Calculate next follow-up date at 9 AM PST (17:00 UTC):
        // - Days 1-7: daily emails
        // - Day 8+: weekly emails
        const getNext9amPST = (daysFromNow: number): string => {
          const now = new Date();
          const target = new Date(now);
          target.setUTCDate(target.getUTCDate() + daysFromNow);
          target.setUTCHours(17, 0, 0, 0); // 17:00 UTC = 9 AM PST
          return target.toISOString();
        };
        
        let nextFollowupAt: string;
        if (followupNumber < 7) {
          // Daily for first 7 days - schedule for tomorrow at 9 AM PST
          nextFollowupAt = getNext9amPST(1);
        } else {
          // Weekly after day 7 - schedule for 7 days from now at 9 AM PST
          nextFollowupAt = getNext9amPST(7);
        }

        // Update the submission record
        const { error: updateError } = await supabase
          .from("contact_submissions")
          .update({
            followup_count: followupNumber,
            last_followup_at: now,
            next_followup_at: nextFollowupAt,
          })
          .eq("id", submission.id);

        if (updateError) {
          console.error(`Error updating submission ${submission.id}:`, updateError);
        } else {
          results.push({ 
            id: submission.id, 
            email: submission.email, 
            followupNumber, 
            emailSuccess: true
          });
        }

        // Add 500ms delay between emails to respect Resend's 2 emails/second rate limit
        await delay(500);

      } catch (emailError) {
        console.error(`Error sending email to ${submission.email}:`, emailError);
        errors.push({ id: submission.id, email: submission.email, followupNumber, success: false, error: emailError.message });
        
        // Still add delay even after errors to avoid rate limiting
        await delay(500);
      }
    }

    console.log("Follow-up processing complete:", results);

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: results.length,
        failed: errors.length,
        results,
        errors
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-followup-emails function:", error);
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
