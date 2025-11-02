import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Important information about using Vidify
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12 border-2 mb-8 bg-accent/5 border-accent">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Important Notice
                  </h2>
                  <p className="text-muted-foreground">
                    This tool is for personal use only. We do not host or store any media files. All rights belong to their respective owners and platforms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-12 border-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. General Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify is a video download tool that provides users with the ability to download content from various platforms. We do not host, store, or own any of the content downloaded through our service. All content belongs to their respective copyright owners.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">2. Copyright and Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  Users are solely responsible for ensuring they have the legal right to download and use content. Downloading copyrighted material without permission may violate copyright laws in your jurisdiction. Vidify does not encourage or condone copyright infringement.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">3. Personal Use Only</h2>
                <p className="text-muted-foreground mb-6">
                  Our service is intended for personal, non-commercial use only. Users should not use downloaded content for commercial purposes, redistribution, or public display without appropriate permissions from content owners.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Platform Terms of Service</h2>
                <p className="text-muted-foreground mb-6">
                  Using Vidify may violate the terms of service of source platforms (YouTube, Instagram, Facebook, TikTok, etc.). Users should review and comply with the terms of service of these platforms. Vidify is not responsible for any violations of third-party terms of service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">5. No Warranties</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify is provided "as is" without any warranties, express or implied. We do not guarantee:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Continuous, uninterrupted access to our service</li>
                  <li>Error-free operation or bug-free experience</li>
                  <li>Compatibility with all platforms or devices</li>
                  <li>Availability of specific video qualities or formats</li>
                  <li>Security of downloaded content</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify and its operators shall not be held liable for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Any legal issues arising from downloaded content</li>
                  <li>Copyright infringement by users</li>
                  <li>Loss of data or corrupted downloads</li>
                  <li>Actions taken by third-party platforms against users</li>
                  <li>Any damages resulting from service use</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">7. User Responsibility</h2>
                <p className="text-muted-foreground mb-6">
                  Users acknowledge and agree that they are solely responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Respecting intellectual property rights</li>
                  <li>Obtaining necessary permissions for content use</li>
                  <li>Their actions and any consequences thereof</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Content Accuracy</h2>
                <p className="text-muted-foreground mb-6">
                  While we strive to provide accurate information and reliable service, we cannot guarantee the accuracy, completeness, or reliability of any content or functionality provided through Vidify.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify this disclaimer at any time without prior notice. Continued use of our service constitutes acceptance of any changes.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have questions about this disclaimer, please contact us at{" "}
                  <a href="mailto:hello@vidify.app" className="text-accent hover:underline">
                    hello@vidify.app
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
