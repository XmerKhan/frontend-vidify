import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto text-center max-w-7xl">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-medium">AI-Powered Video Downloads</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in leading-tight px-2">
          Download Anything.
          <br />
          Anywhere. In{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            4K
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in px-4">
          All-in-one AI-powered downloader for YouTube, Instagram, Facebook, TikTok, and more. Fast, free, and crystal clear.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4">
          <Button 
            size="lg" 
            onClick={() => smoothScrollTo("download-section")}
            className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent text-base sm:text-lg px-6 sm:px-8"
          >
            Start Downloading
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => smoothScrollTo("how-it-works")}
            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-2"
          >
            See How It Works
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
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
