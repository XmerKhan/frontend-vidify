import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { loadAllBlogs } from "@/utils/blogLoader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  // Load first 4 blogs for preview
  const blogPosts = loadAllBlogs().slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Blog & Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Tips, tricks, and guides to help you download and manage videos from any platform
            </p>
            <Link to="/blogs">
              <Button className="bg-gradient-accent hover:opacity-90 text-accent-foreground">
                See All Blogs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden border-2 hover:shadow-large transition-shadow group cursor-pointer h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                        {post.category}
                      </Badge>
                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-16 text-center">
              <Card className="p-12 bg-secondary/30 border-2">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  More Articles Coming Soon
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're constantly creating new content to help you make the most of Vidify. Subscribe to our newsletter to get notified when new articles are published.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
