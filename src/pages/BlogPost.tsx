import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Star } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface Comment {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim() || rating === 0) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields and select a rating",
        variant: "destructive",
      });
      return;
    }

    const newComment: Comment = {
      name: name.trim(),
      comment: comment.trim(),
      rating,
      date: new Date().toLocaleDateString(),
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
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Cover Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-foreground space-y-4 whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t pt-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Comments</h2>
            
            {/* Comment Form */}
            <Card className="p-6 mb-8">
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
                  className="bg-gradient-accent hover:opacity-90 text-accent-foreground"
                >
                  Post Comment
                </Button>
              </form>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No comments yet. Be the first to share your thoughts!
                </p>
              ) : (
                comments.map((c, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{c.name}</h3>
                        <p className="text-sm text-muted-foreground">{c.date}</p>
                      </div>
                      {renderStars(c.rating)}
                    </div>
                    <p className="text-foreground leading-relaxed">{c.comment}</p>
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
