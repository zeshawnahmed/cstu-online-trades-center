-- Fix search_path for set_initial_followup function
CREATE OR REPLACE FUNCTION public.set_initial_followup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.next_followup_at = NEW.created_at + interval '3 days';
  RETURN NEW;
END;
$function$;