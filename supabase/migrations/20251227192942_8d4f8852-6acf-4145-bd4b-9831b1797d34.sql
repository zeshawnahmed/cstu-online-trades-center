-- Add follow-up tracking columns to contact_submissions
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS followup_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_followup_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS next_followup_at timestamp with time zone;

-- Set initial next_followup_at for new submissions (3 days after creation)
CREATE OR REPLACE FUNCTION public.set_initial_followup()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.next_followup_at = NEW.created_at + interval '3 days';
  RETURN NEW;
END;
$function$;

-- Create trigger for new submissions
DROP TRIGGER IF EXISTS set_followup_on_insert ON public.contact_submissions;
CREATE TRIGGER set_followup_on_insert
  BEFORE INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.set_initial_followup();

-- Update existing submissions to have next_followup_at set
UPDATE public.contact_submissions 
SET next_followup_at = created_at + interval '3 days'
WHERE next_followup_at IS NULL AND followup_count = 0;