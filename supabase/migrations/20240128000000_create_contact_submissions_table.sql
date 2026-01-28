-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL;

-- Create policy to allow service role to insert
CREATE POLICY "Allow service role to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to select
CREATE POLICY "Allow service role to select contact submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create policy to allow service role to update
CREATE POLICY "Allow service role to update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO service_role
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_submissions_updated_at_trigger
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_contact_submissions_updated_at();

-- Add comment to table
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
