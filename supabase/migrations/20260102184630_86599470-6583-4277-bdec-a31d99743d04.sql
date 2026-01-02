-- Schedule daily email report at 6 PM Pacific (2 AM UTC next day)
-- Cron: minute hour day month weekday
-- 0 2 * * * = 2:00 AM UTC daily = 6:00 PM Pacific
SELECT cron.schedule(
  'daily-email-report',
  '0 2 * * *',
  $$
  SELECT
    net.http_post(
      url:='https://nlaxxynsulaytdstazmz.supabase.co/functions/v1/send-email-report',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sYXh4eW5zdWxheXRkc3Rhem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MzMwMDAsImV4cCI6MjA2ODAwOTAwMH0.y4sWYnzMnuNZxbVFsAyD1fLzsrJKu3SAa3rxlwuRrfU"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);