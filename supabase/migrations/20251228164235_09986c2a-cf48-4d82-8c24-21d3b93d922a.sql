-- Update the trigger function to set initial followup to 1 day instead of 3 days
CREATE OR REPLACE FUNCTION public.set_initial_followup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  NEW.next_followup_at = NEW.created_at + interval '1 day';
  RETURN NEW;
END;
$function$;