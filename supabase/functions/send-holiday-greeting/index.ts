import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const getHolidayEmailContent = (): { subject: string; body: string } => {
  return {
    subject: "Happy Holidays from AIT",
    body: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              Happy Holidays
            </h1>
          </div>
          
          <!-- Main content -->
          <div style="padding: 40px 30px;">
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              Happy Holidays,
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              As the year comes to a close, we wanted to reach out and say thank you for taking a moment to explore new possibilities for yourself.
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              Believing in yourself takes courage. Choosing growth, learning something new, and stepping toward a better future is never easy but it is always worth it. At American Institute of Trades, we truly admire anyone willing to bet on themselves and take that step forward.
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              We are cheering you on and wishing you confidence in your decisions, strength in your journey, and success in whatever path you choose next.
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0 0 30px 0;">
              Wishing you and your loved ones a joyful holiday season and a powerful start to the new year.
            </p>
            
            <p style="color: #333333; font-size: 16px; line-height: 1.8; margin: 0;">
              Warm regards,<br>
              <strong>American Institute of Trades</strong><br>
              <a href="https://www.levelupait.com" style="color: #2d5a87; text-decoration: none;">www.levelupait.com</a>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #1e3a5f; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              American Institute of Trades
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
        const { subject, body } = getHolidayEmailContent();

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
