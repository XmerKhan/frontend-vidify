import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import DownloadSection from "@/components/home/DownloadSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StepsSection from "@/components/home/StepsSection";
import AdsterraBanner from "@/components/ads/AdsterraBanner";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DownloadSection />
        <AdsterraBanner />
        <FeaturesSection />
        <StepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
