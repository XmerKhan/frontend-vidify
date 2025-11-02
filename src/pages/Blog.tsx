import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      category: "YouTube Tips",
      title: "How to Download YouTube Videos in 4K Quality",
      excerpt: "Learn the best methods to download YouTube videos in stunning 4K resolution while maintaining quality.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    },
    {
      category: "Instagram Tricks",
      title: "Download Instagram Reels Without Watermark",
      excerpt: "Step-by-step guide to downloading Instagram Reels in original quality without any watermarks.",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    },
    {
      category: "AI Tools",
      title: "AI-Powered Video Download: The Future is Here",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we download and process videos.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      category: "TikTok Guide",
      title: "Best TikTok Downloader Tools in 2024",
      excerpt: "Compare the top TikTok video downloaders and find out which one works best for your needs.",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    },
  ];

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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tips, tricks, and guides to help you download and manage videos from any platform
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:shadow-large transition-shadow group cursor-pointer">
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
                      {post.excerpt}
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
