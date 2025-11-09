import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { loadAllBlogs } from "@/utils/blogLoader";

const AllBlogs = () => {
  const blogPosts = loadAllBlogs();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        {/* Header */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              All Blog Posts
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse all our articles, guides, and tips about video downloading
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    <div className="p-4 sm:p-6">
                      <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent hover:bg-accent/20 text-xs sm:text-sm">
                        {post.category}
                      </Badge>
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllBlogs;
