DROP POLICY "Anyone can submit a contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a valid contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 1 AND 120
    AND length(btrim(email)) BETWEEN 3 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(btrim(message)) BETWEEN 1 AND 4000
    AND (phone IS NULL OR length(phone) <= 40)
    AND (course_interest IS NULL OR length(course_interest) <= 120)
  );