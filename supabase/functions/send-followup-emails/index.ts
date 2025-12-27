import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Get program-specific follow-up content
function getFollowupContent(programInterest: string, followupNumber: number): { subject: string; body: string } {
  const isHVAC = programInterest === 'hvac';
  const programName = isHVAC ? 'HVAC Technician Program' : 'Pharmacy Technician Program';
  
  if (followupNumber === 1) {
    return {
      subject: `Following Up – ${programName} at AIT`,
      body: `
<p>Hi there,</p>

<p>We wanted to follow up on your interest in the ${programName} at American Institute of Trades.</p>

<p>If you have any questions about the program, tuition options, or next steps, we're here to help.</p>

<p><strong>Quick Recap:</strong></p>
<ul>
  <li>100% online, self-paced program</li>
  <li>Total cost: $2,500 (payment plan available: 3 monthly payments of $833.33)</li>
  ${isHVAC ? '<li>Complimentary hands-on workshops near UC Davis Medical Center</li>' : '<li>PTCB-recognized program</li>'}
  <li>Job search support near graduation</li>
</ul>

<p>Ready to enroll? Simply reply to this email with your preferred tuition option.</p>

<p>Best regards,<br>
Admissions Team<br>
American Institute of Trades<br>
www.levelupait.com<br>
916-365-6907</p>
      `
    };
  } else if (followupNumber === 2) {
    return {
      subject: `Still Interested? – ${programName}`,
      body: `
<p>Hi there,</p>

<p>We noticed you recently expressed interest in our ${programName}. We'd love to help you take the next step.</p>

<p>Many of our students are working adults looking to start a new career. Our flexible, self-paced online format makes it possible to learn on your schedule.</p>

<p><strong>Enrollment Options:</strong></p>
<ul>
  <li>Option 1: Full tuition payment of $2,500</li>
  <li>Option 2: Payment plan – 3 monthly payments of $833.33</li>
</ul>

<p>Additional financial aid options are available on our website.</p>

<p>Have questions? Call us at 916-365-6907 or reply to this email.</p>

<p>Best regards,<br>
Admissions Team<br>
American Institute of Trades<br>
www.levelupait.com</p>
      `
    };
  } else {
    return {
      subject: `Last Reminder – ${programName} Enrollment`,
      body: `
<p>Hi there,</p>

<p>This is our final follow-up regarding your interest in the ${programName} at American Institute of Trades.</p>

<p>If now isn't the right time, we completely understand. But if you're ready to start your journey toward a rewarding career, we're here to help you get started.</p>

<p><strong>To enroll:</strong> Reply to this email with your preferred payment option, or call us at 916-365-6907.</p>

<p>We hope to hear from you soon!</p>

<p>Best regards,<br>
Admissions Team<br>
American Institute of Trades<br>
www.levelupait.com<br>
916-365-6907</p>
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
    console.log("Starting follow-up email processing...");

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
      .lt("followup_count", 3)
      .order("next_followup_at", { ascending: true });

    if (fetchError) {
      console.error("Error fetching submissions:", fetchError);
      throw fetchError;
    }

    console.log(`Found ${submissions?.length || 0} submissions needing follow-up`);

    const results = [];

    for (const submission of submissions || []) {
      const followupNumber = (submission.followup_count || 0) + 1;
      const programInterest = submission.message?.toLowerCase().includes('hvac') ? 'hvac' : 'pharmacy-tech';
      
      console.log(`Sending follow-up #${followupNumber} to ${submission.email}`);

      const { subject, body } = getFollowupContent(programInterest, followupNumber);

      try {
        // Send follow-up email
        const emailResponse = await resend.emails.send({
          from: "American Institute of Trades <admissions@levelupait.com>",
          to: [submission.email],
          subject: subject,
          html: body,
        });

        console.log(`Email sent to ${submission.email}:`, emailResponse);

        // Calculate next follow-up date (3 days from now) or null if this was the last one
        const nextFollowupAt = followupNumber < 3 
          ? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
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
          results.push({ id: submission.id, email: submission.email, followupNumber, success: true });
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
