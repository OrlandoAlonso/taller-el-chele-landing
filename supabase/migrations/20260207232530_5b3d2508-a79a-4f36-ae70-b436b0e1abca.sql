-- Add image_type column to job_images to distinguish before/after/regular images
ALTER TABLE public.job_images 
ADD COLUMN image_type text NOT NULL DEFAULT 'regular' 
CHECK (image_type IN ('regular', 'before', 'after'));

-- Add comment explaining the column
COMMENT ON COLUMN public.job_images.image_type IS 'Type of image: regular (normal gallery), before (before transformation), after (after transformation)';