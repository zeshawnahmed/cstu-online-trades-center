-- Add column to store the original email's Message-ID for threading
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS email_message_id TEXT;