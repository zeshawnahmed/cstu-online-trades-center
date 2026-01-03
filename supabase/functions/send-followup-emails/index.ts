import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const resend = new Resend("re_9J25fCVN_i6kZzjiAP9KhkQjVbWXKkC1x");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Get program-specific follow-up content - uses the same content as initial email
function getFollowupContent(programInterest: string, followupNumber: number, name: string): { subject: string; body: string } {
  const isHVAC = programInterest === 'hvac-technician';
  
  if (isHVAC) {
    return {
      subject: "Next Steps - HVAC Program",
      body: `
<p>Hi ${name},</p>

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

<p>The full curriculum is available on our website: <a href="https://www.levelupait.com">www.levelupait.com</a>.<br>
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

<p>To keep the enrollment process efficient, we work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>

<p>Option 1: Full tuition payment of $2,500<br>
Option 2: Tuition payment plan — 3 payments of $833.33</p>

<p>Access to online program materials is provided once enrollment and tuition payment are complete.</p>

<h3>Questions or Assistance</h3>

<p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>

<p>Additional financial aid and tuition assistance options are available on our website.</p>

<p>Best regards,<br>
<strong>Admissions Team</strong><br>
American Institute of Trades (AIT)<br>
HVAC Technician Program<br>
<a href="https://www.levelupait.com">www.levelupait.com</a><br>
916-343-8014</p>
      `
    };
  } else {
    // Pharmacy Technician
    return {
      subject: "Next Steps - Pharmacy Technician Program",
      body: `
<p>Hi ${name},</p>

<p>Thank you for your interest in the Pharmacy Technician Program at American Institute of Trades (AIT). We're glad you reached out.</p>

<h3>What You'll Learn</h3>

<p>This program is approved and recognized by the Pharmacy Technician Certification Board (PTCB). We are listed on PTCB's official list of approved training providers found here (search for "American Institute of Trades"): <a href="https://ptcb.org/ptcb-recognized-education-training-program-directory/">https://ptcb.org/ptcb-recognized-education-training-program-directory/</a></p>

<p>This program prepares students to sit for the Pharmacy Technician Certification Exam (PTCE). The curriculum includes:</p>

<ul>
  <li>Federal pharmacy law and regulations</li>
  <li>Medication safety and error prevention</li>
  <li>Pharmacology and drug classifications</li>
  <li>Pharmacy calculations</li>
  <li>Prescription processing and pharmacy workflow</li>
</ul>

<p>The full curriculum is available on our website: <a href="https://www.levelupait.com">www.levelupait.com</a>.<br>
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

<p>To keep the enrollment process efficient, we work with students who are ready to move forward. <u>If you are prepared to enroll, please reply to this email confirming your preferred tuition option:</u></p>

<p>Option 1: Full tuition payment of $2,500<br>
Option 2: Tuition payment plan — 3 payments of $833.33</p>

<p>Once the Enrollment Agreement and initial tuition payment are complete, access to the online program materials will be provided. Remaining tuition payments are due according to the selected option and outlined in the Enrollment Agreement. An admissions representative will also schedule time to connect after enrollment is confirmed.</p>

<h3>Questions or Assistance</h3>

<p>If you have any questions or would like to speak with an admissions representative, please call 916-343-8014.</p>

<p>Additional financial aid and tuition payment assistance options are available on our website.</p>

<p>Best regards,<br>
<strong>Admissions Team</strong><br>
American Institute of Trades (AIT)<br>
Pharmacy Technician Program<br>
<a href="https://www.levelupait.com">www.levelupait.com</a><br>
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
    const now = new Date().toISOString();
    const { data: submissions, error: fetchError } = await supabase
      .from("contact_submissions")
      .select("*")
      .lt("next_followup_at", now)
      .lt("followup_count", 4)
      .order("next_followup_at", { ascending: true });

    if (fetchError) {
      console.error("Error fetching submissions:", fetchError);
      throw fetchError;
    }

    console.log(`Found ${submissions?.length || 0} submissions needing follow-up`);

    const results = [];

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

        // Send follow-up email
        const emailResponse = await resend.emails.send({
          from: "American Institute of Trades <admin@levelupait.com>",
          to: [submission.email],
          reply_to: "admin@levelupait.com",
          subject: subject,
          text: bodyText,
          html: body,
        });

        console.log(`Email sent to ${submission.email}:`, emailResponse);


        // Calculate next follow-up date (1 day from now) or null if this was the last one
        const nextFollowupAt = followupNumber < 4 
          ? new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString()
          : null;

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
      } catch (emailError) {
        console.error(`Error sending email to ${submission.email}:`, emailError);
        results.push({ id: submission.id, email: submission.email, followupNumber, success: false, error: emailError.message });
      }
    }

    console.log("Follow-up processing complete:", results);

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: results.length,
        results 
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