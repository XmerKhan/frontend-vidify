import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { loadAllBlogs } from "@/utils/blogLoader";

const AllBlogs = () => {
  const blogPosts = loadAllBlogs();
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Header */}
      <section className="relative bg-gradient-blog-hero overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 text-center">
            <Badge className="bg-accent/20 text-accent hover:bg-accent/30 mb-4">
              Latest Articles
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Discover tips, guides, and insights about video downloading and digital content
            </p>
          </div>
        </div>
      </section>

      <main className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16 sm:mb-20">
              <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
                Featured Article
              </h2>
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <Card className="overflow-hidden border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-large">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                        {featuredPost.category}
                      </Badge>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-base sm:text-lg">
                        {featuredPost.description}
                      </p>
                      
                      {/* Author & Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <span className="inline-flex items-center text-accent font-medium group-hover:gap-3 gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </section>
          )}

          {/* All Posts Grid */}
          <section>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
              All Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {remainingPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                  <Card className="h-full overflow-hidden border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-large">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/20 text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      
                      {/* Author & Date */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-primary-foreground text-xs font-semibold">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllBlogs;