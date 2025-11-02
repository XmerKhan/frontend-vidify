import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  Vidify is committed to protecting your privacy. We collect minimal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>URLs you submit for download (not stored permanently)</li>
                  <li>Basic analytics data (page views, device type)</li>
                  <li>Cookies for website functionality</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Process your video download requests</li>
                  <li>Improve our service and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Prevent abuse and ensure service security</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Storage and Security</h2>
                <p className="text-muted-foreground mb-6">
                  We do not permanently store video URLs or downloaded content. All processing happens in real-time, and temporary files are automatically deleted after download completion. We implement industry-standard security measures to protect your data.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
                <p className="text-muted-foreground mb-6">
                  We may use third-party services for analytics and advertising (such as Google AdSense). These services may collect information about your device and browsing behavior according to their own privacy policies.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies to enhance user experience and analyze site traffic. You can disable cookies in your browser settings, but this may affect site functionality.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                  <li>Access any personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">7. GDPR Compliance</h2>
                <p className="text-muted-foreground mb-6">
                  For users in the European Union, we comply with GDPR requirements. We process data lawfully, transparently, and for specific purposes only.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  Our service is not directed to children under 13. We do not knowingly collect personal information from children.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this privacy policy from time to time. We will notify users of significant changes by posting a notice on our website.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
