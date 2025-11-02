import { Card } from "@/components/ui/card";
import { Brain, Zap, Shield, Sparkles, FileVideo, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Platform Detection",
      description: "Smart AI automatically identifies the platform and optimizes download settings for best quality.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Download videos in seconds with our optimized infrastructure. No waiting, no delays.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "All Platforms Supported",
      description: "YouTube, Instagram, Facebook, TikTok, X (Twitter), and more. One tool for everything.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileVideo,
      title: "4K Quality & MP3",
      description: "Download in stunning 4K resolution or extract audio as MP3. Your choice, your quality.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "AI Subtitle Extractor",
      description: "Automatically extract and download subtitles from videos with AI-powered accuracy.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "No data collection, no registration required. Your privacy is our priority.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to download videos from any platform, powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-large transition-shadow duration-300 border-2 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
