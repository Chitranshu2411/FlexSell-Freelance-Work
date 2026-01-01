import { UserPlus, Megaphone, TrendingUp, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Onboarding",
      description:
        "Share your product details with us. We evaluate your products and onboard your brand into the FlexSell ecosystem.",
    },
    {
      icon: Megaphone,
      step: "02",
      title: "Marketing",
      description:
        "We invest our resources into complete marketing — promotions, advertising, and visibility campaigns for your products.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Sales",
      description:
        "Products are sold under your existing brand name. No rebranding. Your brand gets recognized while we drive sales.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Growth",
      description:
        "Watch your product reach new markets and customers. We scale, you benefit from increased visibility and sales.",
    },
  ];

  return (
    <section id="how-it-works" className="pt-10 pb-20 md:pt-16 md:pb-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            The Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How FlexSell Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process designed to maximize your product
            sales without any investment from your side.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent z-0" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-medium transition-all duration-300 h-full">
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center font-heading font-bold text-lg shadow-accent">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
