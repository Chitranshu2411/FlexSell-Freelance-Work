import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import ApplyButton from "./ApplyButton";

const CTASection = () => {
  return (
    <section id="apply" className="py-20 md:py-32 bg-accent-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Grow Your Sales?
          </h2>
          <p className="text-accent-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join FlexSell today and let us handle your marketing while you focus
            on creating great products. Zero investment. Maximum growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <ApplyButton variant="dark" />
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-accent-foreground/30 text-accent-foreground bg-transparent hover:bg-accent-foreground/10"
              asChild
            >
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-accent-foreground/80">
            <a
              href="tel:+918982675004"
              className="flex items-center gap-2 hover:text-accent-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 89826 75004</span>
            </a>
            <a
              href="mailto:info@flexsell.org"
              className="flex items-center gap-2 hover:text-accent-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@flexsell.org</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
