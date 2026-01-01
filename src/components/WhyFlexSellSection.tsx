import { Shield, Wallet, Target, Eye, Award, Handshake } from "lucide-react";

const WhyFlexSellSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We operate with complete transparency. Clear agreements, honest reporting, and trustworthy partnership.",
    },
    {
      icon: Wallet,
      title: "Zero Investment Required",
      description:
        "You don't spend a rupee on marketing. We invest our own capital into promoting and selling your products.",
    },
    {
      icon: Target,
      title: "Expert Marketing Team",
      description:
        "Our experienced marketing professionals create targeted campaigns that drive real sales and conversions.",
    },
    {
      icon: Eye,
      title: "Maximum Brand Visibility",
      description:
        "Your brand gets premium exposure across digital and public channels without any cost to you.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "We have successfully partnered with multiple manufacturers and delivered measurable growth results.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We're not looking for quick wins. We build lasting partnerships focused on sustainable growth.",
    },
  ];

  return (
    <section id="why-flexsell" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Partner With FlexSell?
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just a sales channel — we're your growth partner committed
            to your brand's success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlexSellSection;
