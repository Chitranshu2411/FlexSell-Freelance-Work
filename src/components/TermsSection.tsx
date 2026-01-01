import { FileText, CheckCircle } from "lucide-react";

const TermsSection = () => {
  const terms = [
    "FlexSell invests in marketing and advertising at its own cost.",
    "Products are sold under the seller's existing brand name without any modifications.",
    "Sellers provide product inventory and ensure consistent quality standards.",
    "Revenue sharing and payment terms are agreed upon during partnership onboarding.",
    "All partnerships are subject to product evaluation and approval by FlexSell.",
    "Both parties maintain confidentiality regarding business details and strategies.",
    "Partnership terms can be reviewed and renewed based on mutual agreement.",
    "FlexSell reserves the right to discontinue products that don't meet quality or sales criteria.",
  ];

  return (
    <section id="terms" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h2>
            <p className="text-muted-foreground text-lg">
              Clear, fair, and transparent terms for our partnership.
            </p>
          </div>

          {/* Terms List */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <ul className="space-y-5">
              {terms.map((term, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>

            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm text-center">
                These terms provide a general overview. Detailed partnership
                agreements will be discussed and finalized during the onboarding
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
