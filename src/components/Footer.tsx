import { Link } from "react-router-dom";
import { Download, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Vidify</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Download anything, anywhere, in 4K – powered by AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/ai-tools" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@vidify.app" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  hello@vidify.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-primary-foreground/70 text-center md:text-left">
              © {currentYear} Vidify – All Rights Reserved
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-md px-4 md:px-0">
              Vidify doesn't host videos; all rights belong to respective platforms. This tool is for personal use only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
