import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Brain, Layers, FileAudio, Subtitles, FileText, Download } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Platform Detection",
      description: "Our advanced AI automatically identifies the platform from any video link you paste. No need to select manually - just paste and go. Supports YouTube, Instagram, Facebook, TikTok, X (Twitter), and more.",
      benefits: ["Instant platform recognition", "No manual selection needed", "99.9% accuracy rate"],
    },
    {
      icon: Layers,
      title: "Batch Download Mode",
      description: "Download multiple videos at once with our batch download feature. Perfect for content creators, researchers, or anyone who needs to download several videos efficiently.",
      benefits: ["Download up to 10 videos simultaneously", "Queue management", "Progress tracking"],
    },
    {
      icon: FileAudio,
      title: "MP3 Extractor",
      description: "Extract audio from any video and save it as high-quality MP3. Perfect for music, podcasts, lectures, or any audio content you want to keep.",
      benefits: ["High-quality audio extraction", "Multiple bitrate options", "ID3 tag preservation"],
    },
    {
      icon: Subtitles,
      title: "Subtitle Generator",
      description: "AI-powered subtitle extraction and generation. Download existing subtitles or generate new ones automatically using speech recognition technology.",
      benefits: ["Multi-language support", "Auto-generated captions", "Multiple subtitle formats"],
    },
    {
      icon: FileText,
      title: "AI Video Summary",
      description: "Get instant AI-generated summaries of video content. Perfect for quickly understanding long videos, lectures, or presentations without watching the entire content.",
      benefits: ["Instant content overview", "Key points extraction", "Time-stamped highlights"],
    },
    {
      icon: Download,
      title: "Universal Downloader",
      description: "One tool for all platforms. Download from YouTube, Instagram, Facebook, TikTok, X (Twitter), and more. Support for all video formats and qualities up to 4K resolution.",
      benefits: ["All major platforms supported", "Up to 4K quality", "No watermarks"],
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
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to download, extract, and manage videos from any platform. Built with cutting-edge AI technology.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 border-2 hover:shadow-large transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
