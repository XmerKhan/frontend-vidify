import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import { loadBlogBySlug } from "@/utils/blogLoader";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { BlogComment, BlogCommentInsert } from "@/types/comments";

interface Comment {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = loadBlogBySlug(slug || "");
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from database
  useEffect(() => {
    const fetchComments = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      const { data, error } = await (supabase as any)
        .from('blog_comments')
        .select('*')
        .eq('blog_slug', slug)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching comments:', error);
      } else if (data) {
        const formattedComments = data.map((c: BlogComment) => ({
          name: c.user_name,
          comment: c.comment,
          rating: c.rating,
          date: new Date(c.created_at).toLocaleDateString(),
        }));
        setComments(formattedComments);
      }
      setIsLoading(false);
    };
    
    fetchComments();
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim() || rating === 0) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields and select a rating",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const insertData: BlogCommentInsert = {
      blog_slug: slug || '',
      user_name: name.trim(),
      comment: comment.trim(),
      rating,
    };
    
    const { data, error } = await (supabase as any)
      .from('blog_comments')
      .insert(insertData)
      .select()
      .single();

    setIsSubmitting(false);

    if (error || !data) {
      toast({
        title: "Error posting comment",
        description: "Please try again later",
        variant: "destructive",
      });
      return;
    }

    const commentData = data as BlogComment;
    const newComment: Comment = {
      name: commentData.user_name,
      comment: commentData.comment,
      rating: commentData.rating,
      date: new Date(commentData.created_at).toLocaleDateString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setComment("");
    setRating(0);
    
    toast({
      title: "Comment posted!",
      description: "Thank you for your feedback",
    });
  };

  const renderStars = (count: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              interactive ? "cursor-pointer" : ""
            } ${
              star <= (interactive ? (hoverRating || rating) : count)
                ? "fill-accent text-accent"
                : "text-muted-foreground"
            }`}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-6 sm:mb-8">
            <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent hover:bg-accent/20 text-xs sm:text-sm">
              {post.category}
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Cover Image */}
          <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-6 sm:mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg mx-auto w-full max-w-6xl mb-8 sm:mb-12">
         <div 
        className="text-foreground space-y-3 sm:space-y-4 whitespace-pre-line text-sm sm:text-base leading-relaxed"
      // 🔥 FIX: Using dangerouslySetInnerHTML to render HTML content
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
     </div>

          {/* Comments Section */}
          <div className="border-t pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">Comments</h2>
            
            {/* Comment Form */}
            <Card className="p-4 sm:p-6 mb-6 sm:mb-8">
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rating
                  </label>
                  {renderStars(rating, true)}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Comment
                  </label>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="min-h-[100px]"
                    maxLength={500}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting..." : "Post Comment"}
                </Button>
              </form>
            </Card>

            {/* Comments List */}
            <div className="space-y-3 sm:space-y-4">
              {isLoading ? (
                <p className="text-sm sm:text-base text-muted-foreground text-center py-6 sm:py-8">
                  Loading comments...
                </p>
              ) : comments.length === 0 ? (
                <p className="text-sm sm:text-base text-muted-foreground text-center py-6 sm:py-8">
                  No comments yet. Be the first to share your thoughts!
                </p>
              ) : (
                comments.map((c, index) => (
                  <Card key={index} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-foreground">{c.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{c.date}</p>
                      </div>
                      {renderStars(c.rating)}
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed break-words">{c.comment}</p>
                  </Card>
                ))
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
