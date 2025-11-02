import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Youtube, Instagram, Facebook, Music2, Download } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface VideoInfo {
  platform: string;
  platformName: string;
  title: string;
  thumbnail: string;
  duration: string;
  qualities: string[];
  formats: string[];
  url: string;
}

const DownloadSection = () => {
  const [url, setUrl] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [selectedQuality, setSelectedQuality] = useState("1080p");
  const [selectedFormat, setSelectedFormat] = useState("MP4");

  const handleDetect = async () => {
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    setIsDetecting(true);
    setVideoInfo(null);

    try {
      const { data, error } = await supabase.functions.invoke('detect-video', {
        body: { url }
      });

      if (error) throw error;

      if (data.success && data.video) {
        setVideoInfo(data.video);
        setSelectedQuality(data.video.qualities[data.video.qualities.length - 2] || "1080p");
        toast.success(`${data.video.platformName} video detected!`);
      } else {
        toast.error(data.error || "Failed to detect video");
      }
    } catch (error: any) {
      console.error('Detection error:', error);
      toast.error(error.message || "Failed to detect video. Please try again.");
    } finally {
      setIsDetecting(false);
    }
  };

  const handleDownload = () => {
    if (!videoInfo) return;
    
    toast.success(`Downloading ${videoInfo.title} in ${selectedFormat} (${selectedQuality})...`);
    // In production, this would trigger actual download
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
                onKeyDown={(e) => e.key === 'Enter' && handleDetect()}
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

          {/* Video Info & Download Options */}
          {videoInfo && (
            <div className="mb-8 p-6 bg-muted/50 rounded-lg border-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={videoInfo.thumbnail} 
                  alt={videoInfo.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {videoInfo.platformName}
                    </span>
                    <span className="text-sm text-muted-foreground">{videoInfo.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{videoInfo.title}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Format</label>
                      <div className="flex gap-2">
                        {videoInfo.formats.map((format) => (
                          <Button
                            key={format}
                            variant={selectedFormat === format ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedFormat(format)}
                          >
                            {format}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Quality</label>
                      <select
                        value={selectedQuality}
                        onChange={(e) => setSelectedQuality(e.target.value)}
                        className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        {videoInfo.qualities.map((quality) => (
                          <option key={quality} value={quality}>{quality}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button
                    onClick={handleDownload}
                    className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {selectedFormat}
                  </Button>
                </div>
              </div>
            </div>
          )}

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
