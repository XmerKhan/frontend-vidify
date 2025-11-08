import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Youtube, Instagram, Facebook, Music2, Download } from "lucide-react";
import { toast } from "sonner";

interface VideoFormat {
  quality: string;
  url: string;
  size?: number;
  sizeText?: string;
}

interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: number;
  formats: {
    items: VideoFormat[];
  };
}

const DownloadSection = () => {
  const [url, setUrl] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("");

  const handleDetect = async () => {
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    setIsDetecting(true);
    setVideoInfo(null);
    setSelectedFormat("");

    try {
      const response = await fetch(`https://vidify-backend.onrender.com/api/fetch?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        toast.error("Sorry, unable to fetch this video. Try another link.");
        setIsDetecting(false);
        return;
      }

      const data = await response.json();

      if (data.title && data.formats?.items) {
        setVideoInfo(data);
        toast.success("Video detected successfully!");
      } else {
        toast.error("Sorry, unable to fetch this video. Try another link.");
      }
    } catch (error) {
      console.error('Detection error:', error);
      toast.error("Sorry, unable to fetch this video. Try another link.");
    } finally {
      setIsDetecting(false);
    }
  };

  const handleDownload = () => {
    if (!selectedFormat || !videoInfo) return;
    
    const format = videoInfo.formats.items.find(f => f.quality === selectedFormat);
    if (!format?.url) return;
    
    window.open(format.url, '_blank');
    toast.success("Opening download link...");
  };

  const platforms = [
    { name: "YouTube", icon: Youtube, color: "text-red-500" },
    { name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { name: "Facebook", icon: Facebook, color: "text-blue-500" },
    { name: "TikTok", icon: Music2, color: "text-foreground" },
  ];

  return (
    <section id="download-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-4 sm:p-6 lg:p-8 shadow-large border-2">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 px-2">
              Paste Your Link Here
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              AI will automatically detect the platform and prepare your download
            </p>
          </div>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDetect()}
                className="h-12 sm:h-14 text-base sm:text-lg border-2"
              />
            </div>
            <Button
              size="lg"
              onClick={handleDetect}
              disabled={isDetecting}
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
            >
              {isDetecting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2"></div>
                  <span className="text-sm sm:text-base">Detecting...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">Detect Link</span>
                </>
              )}
            </Button>
          </div>

          {/* Video Info & Download Options */}
          {videoInfo && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-muted/50 rounded-lg border-2 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <img 
                    src={videoInfo.thumbnail || "https://placehold.co/320x180/1a1a1a/666666?text=No+Thumbnail"} 
                    alt={videoInfo.title}
                    className="w-full md:w-56 lg:w-64 h-32 sm:h-36 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Video Info & Controls */}
                <div className="flex-1 flex flex-col gap-3 sm:gap-4 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight break-words">
                    {videoInfo.title}
                  </h3>
                  
                  {videoInfo.formats.items.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 block">
                          Select Format
                        </label>
                        <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                          <SelectTrigger className="w-full md:w-80 h-11 sm:h-12 border-2">
                            <SelectValue placeholder="Choose video quality..." />
                          </SelectTrigger>
                          <SelectContent>
                            {videoInfo.formats.items.map((format, index) => (
                              <SelectItem key={index} value={format.quality}>
                                {format.quality} {format.sizeText && `(${format.sizeText})`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {selectedFormat && (
                        <Button
                          onClick={handleDownload}
                          size="lg"
                          className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold shadow-accent w-full md:w-auto animate-in fade-in duration-300 text-sm sm:text-base h-11 sm:h-12"
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Download Video
                        </Button>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-destructive">No download formats available for this video.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Platform Icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 border-t">
            <span className="text-xs sm:text-sm text-muted-foreground w-full sm:w-auto text-center sm:text-left">Supported:</span>
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center space-y-1 opacity-70 hover:opacity-100 transition-opacity"
              >
                <platform.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${platform.color}`} />
                <span className="text-xs text-muted-foreground">{platform.name}</span>
              </div>
            ))}
            <span className="text-xs sm:text-sm text-muted-foreground">+ More</span>
          </div>
        </Card>

        {/* Quick Info */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Card className="p-4 sm:p-6 text-center bg-card/50">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">4K</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Max Quality</p>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-card/50">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">MP4</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Video Format</p>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-card/50">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">MP3</div>
            <p className="text-xs sm:text-sm text-muted-foreground">Audio Extract</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
