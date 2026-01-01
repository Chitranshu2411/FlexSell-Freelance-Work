import { Factory, Package, Lightbulb, CheckCircle } from "lucide-react";

const WhoCanPartnerSection = () => {
  const partners = [
    {
      icon: Factory,
      title: "Manufacturers",
      description:
        "If you produce quality products and want to expand your market reach without marketing overhead.",
      benefits: [
        "Direct factory-to-consumer sales",
        "No middleman dependency",
        "Scale production with demand",
      ],
    },
    {
      icon: Package,
      title: "Wholesalers",
      description:
        "Large inventory owners looking to move products faster with professional sales support.",
      benefits: [
        "Clear excess inventory",
        "Access new market segments",
        "Consistent sales flow",
      ],
    },
    {
      icon: Lightbulb,
      title: "Product Owners",
      description:
        "Entrepreneurs and brand owners with great products but limited marketing resources.",
      benefits: [
        "Focus on product quality",
        "Let experts handle sales",
        "Build brand recognition",
      ],
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Partnership
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who Can Partner With Us?
          </h2>
          <p className="text-muted-foreground text-lg">
            FlexSell works with businesses ready to grow without the burden of
            marketing investments.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="h-1 bg-accent-gradient" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <partner.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {partner.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {partner.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanPartnerSection;
