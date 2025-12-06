import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  showBackLink?: boolean;
}

const BlogHero = ({
  title,
  category,
  date,
  readTime,
  author,
  image,
  showBackLink = true,
}: BlogHeroProps) => {
  return (
    <section className="relative bg-gradient-blog-hero overflow-hidden">
      {/* Subtle pattern overlay */}
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
        <div className="pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-20">
          {/* Back Link */}
          {showBackLink && (
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 sm:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          )}
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Read Time */}
              <p className="text-accent font-medium text-sm sm:text-base mb-4">
                {readTime}
              </p>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              
              {/* Author & Date */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    By <span className="text-accent">{author}</span>
                  </p>
                  <p className="text-white/60 text-sm flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {date}
                  </p>
                </div>
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1.5 text-xs sm:text-sm font-medium">
                  {category}
                </Badge>
              </div>
            </div>
            
            {/* Right - Featured Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-hero-image">
                <div className="aspect-[4/3] sm:aspect-video">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;