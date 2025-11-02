import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Youtube, Instagram, Facebook, Music2 } from "lucide-react";
import { toast } from "sonner";

const DownloadSection = () => {
  const [url, setUrl] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);

  const handleDetect = () => {
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    setIsDetecting(true);
    // Simulate AI detection
    setTimeout(() => {
      setIsDetecting(false);
      toast.success("Platform detected! Ready to download.");
    }, 1500);
  };

  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500" },
    { name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { name: "Facebook", icon: Facebook, color: "text-blue-500" },
    { name: "TikTok", icon: Music2, color: "text-foreground" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 shadow-large border-2">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Paste Your Link Here
            </h2>
            <p className="text-muted-foreground">
              AI will automatically detect the platform and prepare your download
            </p>
          </div>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 text-lg border-2"
              />
            </div>
            <Button
              size="lg"
              onClick={handleDetect}
              disabled={isDetecting}
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent h-14 px-8"
            >
              {isDetecting ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2"></div>
                  Detecting...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Detect Link
                </>
              )}
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center items-center space-x-6 pt-6 border-t">
            <span className="text-sm text-muted-foreground">Supported:</span>
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center space-y-1 opacity-70 hover:opacity-100 transition-opacity"
              >
                <platform.icon className={`w-6 h-6 ${platform.color}`} />
                <span className="text-xs text-muted-foreground">{platform.name}</span>
              </div>
            ))}
            <span className="text-sm text-muted-foreground">+ More</span>
          </div>
        </Card>

        {/* Quick Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 text-center bg-card/50">
            <div className="text-3xl font-bold text-accent mb-2">4K</div>
            <p className="text-sm text-muted-foreground">Max Quality</p>
          </Card>
          <Card className="p-6 text-center bg-card/50">
            <div className="text-3xl font-bold text-accent mb-2">MP4</div>
            <p className="text-sm text-muted-foreground">Video Format</p>
          </Card>
          <Card className="p-6 text-center bg-card/50">
            <div className="text-3xl font-bold text-accent mb-2">MP3</div>
            <p className="text-sm text-muted-foreground">Audio Extract</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
