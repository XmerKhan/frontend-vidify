import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Last updated: December 15, 2024
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12 border-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using Vidify, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify grants you a personal, non-exclusive, non-transferable license to use our video download service for personal, non-commercial purposes only. This license does not include any resale or commercial use of our service or its contents.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">Users agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Not use automated systems to access the service</li>
                  <li>Not attempt to interfere with or disrupt the service</li>
                  <li>Use downloaded content in accordance with platform-specific terms</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  All content downloaded through Vidify remains the property of its original creators and platforms. Vidify does not claim ownership of any downloaded content. Users are responsible for ensuring they have the right to download and use content.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify is provided "as is" without warranties of any kind. We do not guarantee that our service will be uninterrupted, timely, secure, or error-free. We are not responsible for any content downloaded using our service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Vidify shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of modified terms.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms & Conditions, please contact us at{" "}
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

export default Terms;
