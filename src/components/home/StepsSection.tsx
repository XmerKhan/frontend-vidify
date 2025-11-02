import { Card } from "@/components/ui/card";
import { Link2, Settings, Download } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Paste Your Link",
      description: "Copy any video URL from YouTube, Instagram, TikTok, Facebook, or X and paste it in the input box.",
    },
    {
      number: "02",
      icon: Settings,
      title: "Select Format & Quality",
      description: "Choose your preferred format (MP4/MP3) and quality (144p to 4K). AI will optimize the download.",
    },
    {
      number: "03",
      icon: Download,
      title: "Download Instantly",
      description: "Click download and get your video in seconds. No registration, no fees, no limits.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download any video in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full border-2 hover:shadow-large transition-shadow">
                {/* Step Number */}
                <div className="text-6xl font-bold text-accent/10 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
