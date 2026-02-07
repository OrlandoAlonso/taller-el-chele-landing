-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create jobs table for completed works
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create job_images table for job photos
CREATE TABLE public.job_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  sort_order SMALLINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin_users table for simple admin management
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Helper function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Enable RLS on all tables
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Jobs policies: Everyone can read, only admins can modify
CREATE POLICY "Anyone can view jobs" 
ON public.jobs FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert jobs" 
ON public.jobs FOR INSERT 
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update jobs" 
ON public.jobs FOR UPDATE 
USING (public.is_admin());

CREATE POLICY "Admins can delete jobs" 
ON public.jobs FOR DELETE 
USING (public.is_admin());

-- Job images policies: Everyone can read, only admins can modify
CREATE POLICY "Anyone can view job images" 
ON public.job_images FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert job images" 
ON public.job_images FOR INSERT 
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update job images" 
ON public.job_images FOR UPDATE 
USING (public.is_admin());

CREATE POLICY "Admins can delete job images" 
ON public.job_images FOR DELETE 
USING (public.is_admin());

-- Admin users policies: Only admins can view/modify admin list
CREATE POLICY "Admins can view admin list" 
ON public.admin_users FOR SELECT 
USING (public.is_admin());

-- Trigger for updated_at on jobs
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for job images
INSERT INTO storage.buckets (id, name, public)
VALUES ('job-images', 'job-images', true);

-- Storage policies for job images
CREATE POLICY "Anyone can view job images in storage"
ON storage.objects FOR SELECT
USING (bucket_id = 'job-images');

CREATE POLICY "Admins can upload job images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'job-images' AND public.is_admin());

CREATE POLICY "Admins can update job images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'job-images' AND public.is_admin());

CREATE POLICY "Admins can delete job images"
ON storage.objects FOR DELETE
USING (bucket_id = 'job-images' AND public.is_admin());