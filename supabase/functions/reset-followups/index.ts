import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get all contacts created before 12/23/25
    const cutoffDate = "2025-12-23T00:00:00.000Z";
    
    const { data: contacts, error: fetchError } = await supabaseClient
      .from("contact_submissions")
      .select("id, name, email, created_at, followup_count")
      .lt("created_at", cutoffDate);

    if (fetchError) {
      throw fetchError;
    }

    console.log(`Found ${contacts?.length || 0} contacts before ${cutoffDate}`);

    // Update each contact to reset their follow-up status
    const results = [];
    for (const contact of contacts || []) {
      const { error: updateError } = await supabaseClient
        .from("contact_submissions")
        .update({
          followup_count: 0,
          next_followup_at: new Date().toISOString(),
          last_followup_at: null
        })
        .eq("id", contact.id);

      if (updateError) {
        console.error(`Failed to update ${contact.email}:`, updateError);
        results.push({ email: contact.email, success: false, error: updateError.message });
      } else {
        console.log(`Reset follow-ups for ${contact.email}`);
        results.push({ email: contact.email, success: true });
      }
    }

    return new Response(
      JSON.stringify({
        message: `Reset ${results.filter(r => r.success).length} contacts for daily reminders`,
        totalFound: contacts?.length || 0,
        results
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
