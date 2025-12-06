import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { BlogComment, BlogCommentInsert } from "@/types/comments";

interface Comment {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

interface CommentSectionProps {
  blogSlug: string;
}

const CommentSection = ({ blogSlug }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (!blogSlug) return;
      
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('blog_slug', blogSlug)
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
  }, [blogSlug]);

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
      blog_slug: blogSlug,
      user_name: name.trim(),
      comment: comment.trim(),
      rating,
    };
    
    const { data, error } = await supabase
      .from('blog_comments')
      .insert(insertData)
      .select();

    setIsSubmitting(false);

    if (error) {
      console.error('Error posting comment:', error);
      toast({
        title: "Error posting comment",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
      return;
    }

    if (!data || data.length === 0) {
      toast({
        title: "Error posting comment",
        description: "Comment was not saved. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const commentData = data[0] as BlogComment;
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
              interactive ? "cursor-pointer transition-transform hover:scale-110" : ""
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
    <div className="border-t border-border pt-10 sm:pt-14">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Comments & Reviews
      </h2>
      
      {/* Comment Form */}
      <Card className="p-5 sm:p-8 mb-8 bg-card/50 backdrop-blur-sm border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-5">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={100}
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Rating
              </label>
              <div className="h-10 flex items-center">
                {renderStars(rating, true)}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Comment
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this article..."
              className="min-h-[120px] bg-background"
              maxLength={500}
            />
          </div>

          <Button 
            type="submit" 
            className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </form>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-10">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-muted-foreground">Loading comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <Card className="p-8 text-center bg-card/30">
            <p className="text-muted-foreground">
              No comments yet. Be the first to share your thoughts!
            </p>
          </Card>
        ) : (
          comments.map((c, index) => (
            <Card key={index} className="p-5 sm:p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {c.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{c.name}</h4>
                    <p className="text-xs text-muted-foreground">{c.date}</p>
                  </div>
                </div>
                {renderStars(c.rating)}
              </div>
              <p className="text-foreground leading-relaxed">{c.comment}</p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;