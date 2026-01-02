import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Get Resend API key from environment
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";
const resend = new Resend(RESEND_API_KEY);

interface ResendEmail {
  id: string;
  to: string[];
  from: string;
  created_at: string;
  subject: string;
  last_event: string;
}

interface EmailStats {
  total: number;
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
  complained: number;
  delivery_delayed: number;
  other: number;
}

async function fetchResendEmails(): Promise<ResendEmail[]> {
  console.log("Fetching emails from Resend API...");
  
  const response = await fetch("https://api.resend.com/emails", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", response.status, errorText);
    throw new Error(`Failed to fetch emails: ${response.status} ${errorText}`);
  }

  const result = await response.json();
  console.log(`Fetched ${result.data?.length || 0} emails from Resend`);
  return result.data || [];
}

function filterEmailsByDate(emails: ResendEmail[], date: Date): ResendEmail[] {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  return emails.filter(email => {
    const emailDate = new Date(email.created_at);
    return emailDate >= startOfDay && emailDate <= endOfDay;
  });
}

function calculateStats(emails: ResendEmail[]): EmailStats {
  const stats: EmailStats = {
    total: emails.length,
    delivered: 0,
    opened: 0,
    clicked: 0,
    bounced: 0,
    complained: 0,
    delivery_delayed: 0,
    other: 0,
  };

  for (const email of emails) {
    switch (email.last_event) {
      case "delivered":
        stats.delivered++;
        break;
      case "opened":
        stats.opened++;
        break;
      case "clicked":
        stats.clicked++;
        break;
      case "bounced":
        stats.bounced++;
        break;
      case "complained":
        stats.complained++;
        break;
      case "delivery_delayed":
        stats.delivery_delayed++;
        break;
      default:
        stats.other++;
    }
  }

  return stats;
}

function generateReportHtml(stats: EmailStats, date: string, emails: ResendEmail[]): string {
  const deliveryRate = stats.total > 0 
    ? ((stats.delivered + stats.opened + stats.clicked) / stats.total * 100).toFixed(1) 
    : "0";
  
  const bounceRate = stats.total > 0 
    ? (stats.bounced / stats.total * 100).toFixed(1) 
    : "0";

  // Group emails by subject for breakdown
  const subjectCounts: Record<string, number> = {};
  for (const email of emails) {
    const subject = email.subject || "No Subject";
    subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
  }

  const subjectBreakdown = Object.entries(subjectCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([subject, count]) => `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${subject}</td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: center;">${count}</td></tr>`)
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6; padding: 20px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📧 Daily Email Report</h1>
      <p style="color: #d1d5db; margin: 10px 0 0 0; font-size: 14px;">${date}</p>
    </div>

    <!-- Summary Stats -->
    <div style="padding: 30px;">
      <h2 style="color: #1e3a5f; margin: 0 0 20px 0; font-size: 18px;">Summary</h2>
      
      <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 30px;">
        <div style="flex: 1; min-width: 120px; background-color: #f0f9ff; border-radius: 8px; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #1e3a5f;">${stats.total}</div>
          <div style="font-size: 12px; color: #6b7280; text-transform: uppercase;">Total Sent</div>
        </div>
        <div style="flex: 1; min-width: 120px; background-color: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #16a34a;">${stats.delivered}</div>
          <div style="font-size: 12px; color: #6b7280; text-transform: uppercase;">Delivered</div>
        </div>
        <div style="flex: 1; min-width: 120px; background-color: #fef2f2; border-radius: 8px; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #dc2626;">${stats.bounced}</div>
          <div style="font-size: 12px; color: #6b7280; text-transform: uppercase;">Bounced</div>
        </div>
      </div>

      <!-- Engagement Stats -->
      <h2 style="color: #1e3a5f; margin: 0 0 20px 0; font-size: 18px;">Engagement</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">📬 Opened</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">${stats.opened}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">🔗 Clicked</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">${stats.clicked}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">⚠️ Complained</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">${stats.complained}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">⏳ Delayed</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">${stats.delivery_delayed}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">❓ Other</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: bold;">${stats.other}</td>
        </tr>
      </table>

      <!-- Rates -->
      <h2 style="color: #1e3a5f; margin: 0 0 20px 0; font-size: 18px;">Performance</h2>
      
      <div style="display: flex; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 1; text-align: center;">
          <div style="font-size: 28px; font-weight: bold; color: #16a34a;">${deliveryRate}%</div>
          <div style="font-size: 12px; color: #6b7280;">Delivery Rate</div>
        </div>
        <div style="flex: 1; text-align: center;">
          <div style="font-size: 28px; font-weight: bold; color: #dc2626;">${bounceRate}%</div>
          <div style="font-size: 12px; color: #6b7280;">Bounce Rate</div>
        </div>
      </div>

      ${emails.length > 0 ? `
      <!-- Email Breakdown by Subject -->
      <h2 style="color: #1e3a5f; margin: 0 0 20px 0; font-size: 18px;">Top Email Subjects</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #1e3a5f; color: white;">
            <th style="padding: 12px; text-align: left; font-size: 12px;">Subject</th>
            <th style="padding: 12px; text-align: center; font-size: 12px;">Count</th>
          </tr>
        </thead>
        <tbody>
          ${subjectBreakdown}
        </tbody>
      </table>
      ` : ''}
    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #6b7280; font-size: 12px;">
        This is an automated report from Level Up AIT.<br>
        View detailed analytics at <a href="https://resend.com/emails" style="color: #1e3a5f;">resend.com/emails</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

function generatePlainText(stats: EmailStats, date: string): string {
  const deliveryRate = stats.total > 0 
    ? ((stats.delivered + stats.opened + stats.clicked) / stats.total * 100).toFixed(1) 
    : "0";
  
  const bounceRate = stats.total > 0 
    ? (stats.bounced / stats.total * 100).toFixed(1) 
    : "0";

  return `
DAILY EMAIL REPORT - ${date}

SUMMARY
-------
Total Sent: ${stats.total}
Delivered: ${stats.delivered}
Bounced: ${stats.bounced}

ENGAGEMENT
----------
Opened: ${stats.opened}
Clicked: ${stats.clicked}
Complained: ${stats.complained}
Delayed: ${stats.delivery_delayed}
Other: ${stats.other}

PERFORMANCE
-----------
Delivery Rate: ${deliveryRate}%
Bounce Rate: ${bounceRate}%

---
This is an automated report from Level Up AIT.
View detailed analytics at https://resend.com/emails
  `;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Email report function triggered");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get today's date (or yesterday if running early morning)
    const reportDate = new Date();
    // If we want yesterday's report, uncomment the next line:
    // reportDate.setDate(reportDate.getDate() - 1);
    
    const dateString = reportDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Los_Angeles",
    });

    console.log(`Generating report for: ${dateString}`);

    // Fetch emails from Resend
    const allEmails = await fetchResendEmails();
    
    // Filter to today's emails
    const todayEmails = filterEmailsByDate(allEmails, reportDate);
    console.log(`Found ${todayEmails.length} emails for ${dateString}`);

    // Calculate statistics
    const stats = calculateStats(todayEmails);
    console.log("Stats calculated:", stats);

    // Generate report content
    const htmlContent = generateReportHtml(stats, dateString, todayEmails);
    const plainTextContent = generatePlainText(stats, dateString);

    // Send report email
    const emailResponse = await resend.emails.send({
      from: "Level Up AIT <admin@levelupait.com>",
      to: ["admin@levelupait.com"],
      reply_to: "admin@levelupait.com",
      subject: `📧 Daily Email Report - ${dateString}`,
      html: htmlContent,
      text: plainTextContent,
    });

    console.log("Report email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email report sent successfully",
        stats,
        emailsSent: todayEmails.length,
        reportDate: dateString,
        emailId: emailResponse.data?.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error generating email report:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
