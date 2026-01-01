"use client";

import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface CTASectionProps {
    className?: string;
}

export const CTASection = ({ className }: CTASectionProps) => {
    const { cta } = siteContent;

    return (
        <section id="download" className={cx("relative overflow-hidden bg-ink", className)}>
            <div className="relative mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Headline */}
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {cta.headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="mb-10 text-lg text-gray-400 md:text-xl">
                        {cta.subheadline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            color="secondary"
                            size="xl"
                            href="#download"
                            className="btn-pill bg-white text-ink shadow-lg hover:bg-gray-100"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            {cta.primaryCta}
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-gray-500">
                        {cta.trustIndicators.map((indicator) => (
                            <div key={indicator} className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-brand-500" />
                                <span className="uppercase tracking-wide">{indicator}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
