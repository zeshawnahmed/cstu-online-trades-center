-- Add program_interest column to store the user's program selection
ALTER TABLE public.contact_submissions 
ADD COLUMN program_interest text;