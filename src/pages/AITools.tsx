import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Languages, Video, Wand2, Copy, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const AITools = () => {
  const [titleModalOpen, setTitleModalOpen] = useState(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const [featureModalOpen, setFeatureModalOpen] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [featureRequest, setFeatureRequest] = useState("");
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [generatedDescriptions, setGeneratedDescriptions] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const tools = [
    {
      icon: FileText,
      title: "Video Title Generator",
      description: "Generate engaging, SEO-optimized titles for your videos using AI. Perfect for content creators who want to maximize their video's reach and engagement.",
      status: "Available",
      comingSoon: false,
      onClick: () => setTitleModalOpen(true),
    },
    {
      icon: Wand2,
      title: "Description Generator",
      description: "Create compelling video descriptions automatically. Our AI analyzes your video content and generates detailed, keyword-rich descriptions.",
      status: "Available",
      comingSoon: false,
      onClick: () => setDescriptionModalOpen(true),
    },
    {
      icon: Video,
      title: "Caption Extractor",
      description: "Extract and download captions from any video. Support for all major subtitle formats with automatic synchronization.",
      status: "Coming Soon",
      comingSoon: true,
    },
    {
      icon: Languages,
      title: "Subtitle Translator",
      description: "Translate subtitles to over 100 languages with AI-powered accuracy. Perfect for reaching global audiences with your content.",
      status: "Coming Soon",
      comingSoon: true,
    },
  ];

  const generateTitles = () => {
    const mockTitles = [
      `${titleInput} | Ultimate Guide 2025`,
      `How to ${titleInput} - Step by Step Tutorial`,
      `${titleInput}: Everything You Need to Know`,
      `Top 10 Tips for ${titleInput} (Proven Results!)`,
      `${titleInput} Secrets Revealed - Must Watch!`,
    ];
    setGeneratedTitles(mockTitles);
  };

  const generateDescriptions = () => {
    const mockDescriptions = [
      `In this video, we dive deep into ${descriptionInput}. Whether you're a beginner or an expert, you'll find valuable insights and practical tips that you can apply right away. Don't forget to like, subscribe, and hit the notification bell!\n\n🔔 Subscribe for more: [Your Channel]\n📱 Follow us on social media: [Links]\n\n#${descriptionInput.replace(/\s+/g, '')} #Tutorial #HowTo`,
      `Discover everything about ${descriptionInput} in this comprehensive guide. We cover the latest techniques, best practices, and insider secrets that will help you achieve amazing results. Watch till the end for a special bonus tip!\n\nTimestamps:\n0:00 - Introduction\n1:30 - Getting Started\n5:00 - Advanced Tips\n8:30 - Conclusion\n\nLike this video? Share it with your friends!`,
    ];
    setGeneratedDescriptions(mockDescriptions);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const handleFeatureRequest = () => {
    toast({
      title: "✅ Success!",
      description: "Your message has been sent to the admin.",
    });
    setFeatureRequest("");
    setFeatureModalOpen(false);
  };

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
                    onClick={tool.onClick}
                  >
                    {tool.comingSoon ? "Coming Soon" : "Try It Now"}
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
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="font-semibold"
                  onClick={() => setFeatureModalOpen(true)}
                >
                  Request a Feature
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Title Generator Modal */}
      <Dialog open={titleModalOpen} onOpenChange={setTitleModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Video Title Generator</DialogTitle>
            <DialogDescription>
              Enter your video topic or keywords to generate SEO-optimized titles
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="e.g., Digital Marketing Tips"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <Button 
              onClick={generateTitles} 
              className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground"
              disabled={!titleInput.trim()}
            >
              Generate Titles
            </Button>
            
            {generatedTitles.length > 0 && (
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium text-muted-foreground">Generated Titles:</p>
                {generatedTitles.map((title, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                    <p className="flex-1 text-sm">{title}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(title, index)}
                    >
                      {copiedIndex === index ? (
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Description Generator Modal */}
      <Dialog open={descriptionModalOpen} onOpenChange={setDescriptionModalOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Video Description Generator</DialogTitle>
            <DialogDescription>
              Enter your video topic to generate keyword-rich descriptions
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="e.g., How to Start a YouTube Channel"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
            <Button 
              onClick={generateDescriptions} 
              className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground"
              disabled={!descriptionInput.trim()}
            >
              Generate Descriptions
            </Button>
            
            {generatedDescriptions.length > 0 && (
              <div className="space-y-3 mt-4">
                <p className="text-sm font-medium text-muted-foreground">Generated Descriptions:</p>
                {generatedDescriptions.map((desc, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Textarea
                        value={desc}
                        readOnly
                        className="flex-1 min-h-[150px] font-mono text-sm"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(desc, generatedTitles.length + index)}
                      >
                        {copiedIndex === generatedTitles.length + index ? (
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Feature Request Modal */}
      <Dialog open={featureModalOpen} onOpenChange={setFeatureModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request a Feature</DialogTitle>
            <DialogDescription>
              Share your ideas and help us improve our tools
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Describe the feature you'd like to see..."
              value={featureRequest}
              onChange={(e) => setFeatureRequest(e.target.value)}
              className="min-h-[120px]"
            />
            <Button 
              onClick={handleFeatureRequest}
              className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground"
              disabled={!featureRequest.trim()}
            >
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AITools;
