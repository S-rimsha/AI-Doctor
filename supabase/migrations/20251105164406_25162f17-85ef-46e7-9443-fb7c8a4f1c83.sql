-- Create medicine_records table
CREATE TABLE public.medicine_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  medicine_name TEXT NOT NULL,
  dosage TEXT NOT NULL,
  date_taken DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.medicine_records ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own medicine records" 
ON public.medicine_records 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own medicine records" 
ON public.medicine_records 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own medicine records" 
ON public.medicine_records 
FOR DELETE 
USING (auth.uid() = user_id);