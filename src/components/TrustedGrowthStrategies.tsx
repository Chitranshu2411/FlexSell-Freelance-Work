
import React from 'react';

const strategies = [
    "Strategic Planning",
    "Market Expansion",
    "Digital Transformation",
    "Brand Authority",
    "Customer Retention",
    "Performance Marketing",
    "Data Analytics",
    "Revenue Optimization",
    "Product Innovation",
    "User Experience Design",
    "Agile Methodology",
    "Community Building"
];

const TrustedGrowthStrategies = () => {
    return (
        <section className="py-12 bg-background border-y border-white/5 relative overflow-hidden">
            <div className="container px-4 md:px-6 mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Trusted Growth Strategies
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto mt-4 rounded-full" />
            </div>

            {/* Marquee Structure */}
            <div className="relative flex overflow-hidden select-none">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex animate-scroll min-w-full shrink-0 items-center justify-around gap-16 py-4">
                    {strategies.map((strategy, i) => (
                        <span key={i} className="text-lg md:text-xl font-medium text-muted-foreground/60 whitespace-nowrap hover:text-primary transition-colors cursor-pointer">
                            {strategy}
                        </span>
                    ))}
                </div>
                <div className="flex animate-scroll min-w-full shrink-0 items-center justify-around gap-16 py-4" aria-hidden="true">
                    {strategies.map((strategy, i) => (
                        <span key={i} className="text-lg md:text-xl font-medium text-muted-foreground/60 whitespace-nowrap hover:text-primary transition-colors cursor-pointer">
                            {strategy}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedGrowthStrategies;
