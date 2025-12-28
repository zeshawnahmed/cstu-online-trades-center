import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const getHolidayEmailContent = (name: string): { subject: string; body: string } => {
  return {
    subject: "🎄 Happy Holidays from American Institute of Technology!",
    body: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with festive design -->
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              ✨ Happy Holidays! ✨
            </h1>
          </div>
          
          <!-- Main content -->
          <div style="padding: 40px 30px;">
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Dear ${name},
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              As the year comes to a close, we at <strong>American Institute of Technology</strong> want to take a moment to thank you for your interest in our programs and for being part of our community.
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              We hope this holiday season brings you joy, warmth, and time spent with loved ones. May the new year be filled with exciting opportunities and success in all your endeavors.
            </p>
            
            <div style="background-color: #f0f7ff; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
              <p style="color: #1e3a5f; font-size: 16px; line-height: 1.6; margin: 0; font-style: italic;">
                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
              </p>
            </div>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              If you have any questions about our programs or are ready to take the next step in your career, we're here to help. Don't hesitate to reach out!
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0;">
              Warm wishes,<br>
              <strong>The AIT Family</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1e3a5f; padding: 30px; text-align: center;">
            <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0;">
              🎄 Wishing you a wonderful holiday season! 🎄
            </p>
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              American Institute of Technology<br>
              Sacramento, CA
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting holiday greeting email batch send...");

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch all unique emails from contact_submissions
    const { data: contacts, error: fetchError } = await supabase
      .from("contact_submissions")
      .select("email, name")
      .order("created_at", { ascending: false });

    if (fetchError) {
      console.error("Error fetching contacts:", fetchError);
      throw fetchError;
    }

    if (!contacts || contacts.length === 0) {
      console.log("No contacts found to send holiday greetings");
      return new Response(
        JSON.stringify({ success: true, message: "No contacts found", sent: 0 }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get unique emails (in case of duplicates)
    const uniqueEmails = new Map<string, string>();
    contacts.forEach((contact) => {
      if (!uniqueEmails.has(contact.email)) {
        uniqueEmails.set(contact.email, contact.name);
      }
    });

    console.log(`Found ${uniqueEmails.size} unique contacts to send greetings to`);

    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    // Send holiday greeting to each unique contact
    for (const [email, name] of uniqueEmails) {
      try {
        const { subject, body } = getHolidayEmailContent(name);

        const emailResponse = await resend.emails.send({
          from: "American Institute of Technology <onboarding@resend.dev>",
          to: [email],
          subject: subject,
          html: body,
        });

        if (emailResponse.error) {
          console.error(`Error sending to ${email}:`, emailResponse.error);
          errors.push(`${email}: ${emailResponse.error.message}`);
          errorCount++;
        } else {
          console.log(`Holiday greeting sent to ${email}`);
          successCount++;
        }

        // Small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (emailError: any) {
        console.error(`Failed to send to ${email}:`, emailError);
        errors.push(`${email}: ${emailError.message}`);
        errorCount++;
      }
    }

    console.log(`Holiday greeting batch complete. Success: ${successCount}, Errors: ${errorCount}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Holiday greeting batch complete",
        sent: successCount,
        failed: errorCount,
        errors: errors.length > 0 ? errors : undefined,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in holiday greeting function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
