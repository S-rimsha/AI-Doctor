-- Add image_url column to medicine_records table
ALTER TABLE public.medicine_records 
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Create storage bucket for medicine images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('medicine_images', 'medicine_images', true)
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for medicine_images bucket
CREATE POLICY "Users can view their own medicine images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'medicine_images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own medicine images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'medicine_images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own medicine images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'medicine_images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own medicine images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'medicine_images' AND auth.uid()::text = (storage.foldername(name))[1]);