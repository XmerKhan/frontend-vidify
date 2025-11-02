import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Languages, Video, Wand2 } from "lucide-react";

const AITools = () => {
  const tools = [
    {
      icon: FileText,
      title: "Video Title Generator",
      description: "Generate engaging, SEO-optimized titles for your videos using AI. Perfect for content creators who want to maximize their video's reach and engagement.",
      status: "Available",
      comingSoon: false,
    },
    {
      icon: Wand2,
      title: "Description Generator",
      description: "Create compelling video descriptions automatically. Our AI analyzes your video content and generates detailed, keyword-rich descriptions.",
      status: "Available",
      comingSoon: false,
    },
    {
      icon: Video,
      title: "Caption Extractor",
      description: "Extract and download captions from any video. Support for all major subtitle formats with automatic synchronization.",
      status: "Available",
      comingSoon: false,
    },
    {
      icon: Languages,
      title: "Subtitle Translator",
      description: "Translate subtitles to over 100 languages with AI-powered accuracy. Perfect for reaching global audiences with your content.",
      status: "Coming Soon",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Tools</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              AI Tools for Creators
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful AI tools to help you create, optimize, and manage your video content more efficiently.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <Card key={index} className="p-8 border-2 hover:shadow-large transition-all relative overflow-hidden">
                  {tool.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                    <tool.icon className="w-7 h-7 text-accent-foreground" />
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {tool.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  <Button 
                    className={tool.comingSoon ? "opacity-50 cursor-not-allowed" : "bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold"}
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? "Notify Me" : "Try It Now"}
                  </Button>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="p-12 bg-gradient-primary text-primary-foreground border-0">
                <h2 className="text-3xl font-bold mb-4">
                  Want More AI Tools?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
                  We're constantly developing new AI-powered features to help creators. Let us know what tools you'd like to see next!
                </p>
                <Button size="lg" variant="secondary" className="font-semibold">
                  Request a Feature
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AITools;
