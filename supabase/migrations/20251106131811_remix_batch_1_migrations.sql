
-- Migration: 20251105122547
-- Create comments table for blog posts
CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_slug TEXT NOT NULL,
  user_name TEXT NOT NULL,
  comment TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 3),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read comments
CREATE POLICY "Anyone can view comments" 
ON public.blog_comments 
FOR SELECT 
USING (true);

-- Allow anyone to insert comments (public commenting)
CREATE POLICY "Anyone can create comments" 
ON public.blog_comments 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster queries by blog_slug
CREATE INDEX idx_blog_comments_slug ON public.blog_comments(blog_slug);
CREATE INDEX idx_blog_comments_created_at ON public.blog_comments(created_at DESC);
