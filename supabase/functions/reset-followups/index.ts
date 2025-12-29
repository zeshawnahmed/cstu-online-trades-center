import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Resetting all follow-ups...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Reset all contacts to be eligible for follow-up
    const { data, error } = await supabase
      .from("contact_submissions")
      .update({
        followup_count: 0,
        next_followup_at: new Date().toISOString(),
        last_followup_at: null,
      })
      .neq("id", "00000000-0000-0000-0000-000000000000") // Update all rows
      .select("id, email, program_interest");

    if (error) {
      console.error("Error resetting follow-ups:", error);
      throw error;
    }

    console.log(`Reset ${data?.length || 0} contacts for follow-up`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Reset ${data?.length || 0} contacts for follow-up`,
        contacts: data,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in reset-followups function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
