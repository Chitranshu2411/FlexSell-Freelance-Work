import { DollarSign, Tag, Globe, BarChart3, Clock, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No Marketing Cost",
      description: "We handle all advertising and promotional expenses. You invest nothing.",
    },
    {
      icon: Tag,
      title: "Your Brand Stays Yours",
      description: "Products are sold under your existing brand name. No rebranding required.",
    },
    {
      icon: Globe,
      title: "Increased Market Reach",
      description: "Access new markets and customers through our established sales channels.",
    },
    {
      icon: BarChart3,
      title: "Sales-Driven Growth",
      description: "Performance-based approach focused on generating real sales and revenue.",
    },
    {
      icon: Clock,
      title: "Quick Market Entry",
      description: "Fast onboarding process to get your products selling in the market quickly.",
    },
    {
      icon: Users,
      title: "Expert Team Support",
      description: "Dedicated professionals managing your product's marketing and sales journey.",
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Advantages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Seller Benefits
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            When you partner with FlexSell, you unlock these powerful advantages
            for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
