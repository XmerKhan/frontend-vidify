import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Video Downloads</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
          Download Anything.
          <br />
          Anywhere. In{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            4K
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          All-in-one AI-powered downloader for YouTube, Instagram, Facebook, TikTok, and more. Fast, free, and crystal clear.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent text-lg px-8">
            Start Downloading
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-2">
            See How It Works
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
            <span>100% Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
            <span>No Registration</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
            <span>Unlimited Downloads</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
            <span>All Platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
