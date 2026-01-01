import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyFlexSellSection from "@/components/WhyFlexSellSection";
import WhoCanPartnerSection from "@/components/WhoCanPartnerSection";
import BenefitsSection from "@/components/BenefitsSection";
import TermsSection from "@/components/TermsSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import TrustedGrowthStrategies from "@/components/TrustedGrowthStrategies";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedGrowthStrategies />
        <HowItWorksSection />
        <WhyFlexSellSection />
        <WhoCanPartnerSection />
        <BenefitsSection />
        <TermsSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
