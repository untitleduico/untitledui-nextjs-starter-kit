"use client";

import { PlayCircle, Monitor01, Zap, CheckCircle } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const stepIcons = [PlayCircle, Monitor01, Zap, CheckCircle] as const;

interface HowItWorksSectionProps {
    className?: string;
}

export const HowItWorksSection = ({ className }: HowItWorksSectionProps) => {
    const { howItWorks } = siteContent;

    return (
        <section id="how-it-works" className={cx("", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-16 text-center md:mb-20">
                    <p className="mb-3 text-sm font-semibold text-brand-secondary">
                        {howItWorks.sectionLabel}
                    </p>
                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        {howItWorks.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-secondary">
                        {howItWorks.subheadline}
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Connector line (desktop) */}
                    <div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 dark:from-brand-800 dark:via-brand-700 dark:to-brand-800 md:block" />

                    <div className="grid gap-12 md:gap-16">
                        {howItWorks.steps.map((step, index) => {
                            const Icon = stepIcons[index] || PlayCircle;
                            const isReversed = index % 2 === 1;

                            return (
                                <div
                                    key={step.title}
                                    className={cx(
                                        "relative flex flex-col gap-6 md:flex-row md:items-center md:gap-12",
                                        isReversed && "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Content side */}
                                    <div
                                        className={cx(
                                            "flex-1",
                                            isReversed ? "md:text-right" : "md:text-left"
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                "mb-2 inline-flex items-center gap-3",
                                                isReversed && "md:flex-row-reverse"
                                            )}
                                        >
                                            <span className="text-sm font-bold text-brand-secondary">
                                                Step {step.step}
                                            </span>
                                        </div>
                                        <h3 className="mb-3 text-xl font-semibold text-primary md:text-2xl">
                                            {step.title}
                                        </h3>
                                        <p className="text-md text-secondary md:text-lg">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon (center on desktop) */}
                                    <div className="relative z-10 flex shrink-0 items-center justify-center md:order-none">
                                        <div className="rounded-full bg-primary p-1.5 shadow-lg ring-4 ring-primary">
                                            <FeaturedIcon
                                                icon={Icon}
                                                size="lg"
                                                theme="gradient"
                                                color="brand"
                                            />
                                        </div>
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className="hidden flex-1 md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
