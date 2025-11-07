import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
