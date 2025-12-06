-- Drop the old constraint and add a new one that allows ratings 1-5
ALTER TABLE public.blog_comments DROP CONSTRAINT blog_comments_rating_check;
ALTER TABLE public.blog_comments ADD CONSTRAINT blog_comments_rating_check CHECK (rating >= 1 AND rating <= 5);