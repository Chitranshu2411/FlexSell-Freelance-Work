import { Linkedin, Mail } from "lucide-react";
import founderImage from "@/assets/founder-image.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Founder
          </h2>
          <p className="text-muted-foreground text-lg">
            The vision and expertise driving FlexSell's mission.
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative">
                <img
                  src={founderImage}
                  alt="Founder of FlexSell"
                  className="w-full h-full object-cover object-center min-h-[300px] md:min-h-full"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Mr. Abdul Quadir
                </h3>
                <p className="text-accent font-semibold mb-6">
                  Founder & CEO, FlexSell
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over a decade of experience in sales, marketing, and
                  business development, our founder brings deep industry
                  knowledge and a passion for helping manufacturers grow. The
                  vision behind FlexSell is simple: empower product owners to
                  focus on what they do best — creating quality products — while
                  we handle the rest.
                </p>

                <blockquote className="border-l-4 border-accent pl-4 italic text-foreground mb-6">
                  "Every great product deserves a great market presence. At
                  FlexSell, we make that happen without asking our partners to
                  invest a single rupee in marketing."
                </blockquote>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/abdul-quadir-98b4b3110"
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:quadirali5253@gmail.com"
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
