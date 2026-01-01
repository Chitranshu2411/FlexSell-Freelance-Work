import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/flexsell-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why FlexSell", href: "#why-flexsell" },
    { name: "Benefits", href: "#benefits" },
    { name: "Terms & Conditions", href: "#terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src={logo} alt="FlexSell" className="h-12 w-auto" />
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6 leading-relaxed">
              FlexSell is your trusted sales and marketing partner. We help
              manufacturers and wholesalers sell their products without any
              marketing investment. Your brand. Our expertise.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              FlexSell is an independent brand and is not affiliated with any
              manufacturer or product brand we represent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:partner@flexsell.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@flexsell.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918982675004"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 89826 75004</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Bhopal, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} FlexSell. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm text-center md:text-right">
              FlexSell is an independent sales & marketing company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
