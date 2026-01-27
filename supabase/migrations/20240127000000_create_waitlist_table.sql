-- Create waitlist table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  source text default 'website',
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index on email for faster lookups
create index if not exists waitlist_email_idx on public.waitlist (email);

-- Create index on created_at for sorting
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Create policy to allow edge functions to insert (using service role key)
create policy "Enable insert for service role"
  on public.waitlist
  for insert
  to service_role
  with check (true);

-- Create policy to allow edge functions to select (using service role key)
create policy "Enable select for service role"
  on public.waitlist
  for select
  to service_role
  using (true);

-- Create function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger to automatically update updated_at on row updates
create trigger set_updated_at
  before update on public.waitlist
  for each row
  execute function public.handle_updated_at();

-- Add comment to table
comment on table public.waitlist is 'Stores email addresses of users who joined the waitlist';
