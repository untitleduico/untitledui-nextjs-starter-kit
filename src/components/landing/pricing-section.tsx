"use client";

import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface PricingSectionProps {
    className?: string;
}

export const PricingSection = ({ className }: PricingSectionProps) => {
    const { pricing } = siteContent;

    return (
        <section id="pricing" className={cx("bg-surface", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-400">
                        {pricing.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {pricing.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {pricing.subheadline}
                    </p>
                </div>

                {/* Pricing cards - Swiss Utility style */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
                    {pricing.tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={cx(
                                "card-swiss relative flex flex-col p-6 md:p-8",
                                tier.highlighted
                                    ? "border-2 border-brand-400 shadow-xl shadow-brand-500/10"
                                    : ""
                            )}
                        >
                            {/* Popular badge */}
                            {tier.highlighted && (
                                <Badge
                                    type="pill-color"
                                    color="brand"
                                    size="sm"
                                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                                >
                                    Popular
                                </Badge>
                            )}

                            {/* Tier name - mono uppercase */}
                            <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wide text-brand-400">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-2 flex items-baseline gap-1">
                                <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span className="font-mono text-sm text-gray-400">
                                        {tier.period}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="mb-6 text-md text-gray-400">
                                {tier.description}
                            </p>

                            {/* CTA button */}
                            <Button
                                color={tier.highlighted ? "primary" : "secondary"}
                                size="lg"
                                className="btn-pill mb-6 w-full"
                            >
                                {tier.cta}
                            </Button>

                            {/* Features list */}
                            <ul className="flex flex-1 flex-col gap-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className={cx(
                                            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                                            tier.highlighted ? "bg-brand-900" : "bg-gray-800"
                                        )}>
                                            <Check
                                                className={cx(
                                                    "size-3",
                                                    tier.highlighted ? "text-brand-400" : "text-gray-400"
                                                )}
                                            />
                                        </div>
                                        <span className="text-md text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
