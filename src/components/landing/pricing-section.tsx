"use client";

import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";

const pricingTiers = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for trying out Mitable",
        features: [
            "3 sessions per day",
            "Local storage only",
            "Basic AI summaries",
            "To-do detection",
            "Community support",
        ],
        cta: "Get Started",
        ctaColor: "secondary" as const,
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        description: "For power users and professionals",
        features: [
            "Unlimited sessions",
            "Cloud sync & backup",
            "Slack & Notion export",
            "Advanced AI summaries",
            "Process doc generation",
            "Priority support",
        ],
        cta: "Start Free Trial",
        ctaColor: "primary" as const,
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For teams and organizations",
        features: [
            "Everything in Pro",
            "Team workspaces",
            "Admin controls & analytics",
            "SSO integration",
            "On-premise deployment",
            "Dedicated support",
        ],
        cta: "Contact Sales",
        ctaColor: "secondary" as const,
        highlighted: false,
    },
];

interface PricingSectionProps {
    className?: string;
}

export const PricingSection = ({ className }: PricingSectionProps) => {
    return (
        <section id="pricing" className={cx("", className)}>
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 text-sm font-semibold text-brand-secondary">Pricing</p>
                    <h2 className="mb-4 text-display-xs font-semibold tracking-tight text-primary md:text-display-sm">
                        Simple, transparent pricing
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-secondary">
                        Start free, upgrade when you need more. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={cx(
                                "relative flex flex-col rounded-2xl p-6 md:p-8",
                                tier.highlighted
                                    ? "bg-brand-solid ring-2 ring-brand-solid shadow-xl"
                                    : "bg-primary ring-1 ring-secondary_alt shadow-lg"
                            )}
                        >
                            {/* Popular badge */}
                            {tier.highlighted && (
                                <Badge
                                    type="pill-color"
                                    color="brand"
                                    size="sm"
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-700"
                                >
                                    Most Popular
                                </Badge>
                            )}

                            {/* Tier name */}
                            <h3
                                className={cx(
                                    "mb-2 text-lg font-semibold",
                                    tier.highlighted ? "text-white" : "text-primary"
                                )}
                            >
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-4 flex items-baseline gap-1">
                                <span
                                    className={cx(
                                        "text-display-sm font-semibold tracking-tight",
                                        tier.highlighted ? "text-white" : "text-primary"
                                    )}
                                >
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span
                                        className={cx(
                                            "text-md",
                                            tier.highlighted ? "text-brand-200" : "text-tertiary"
                                        )}
                                    >
                                        {tier.period}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p
                                className={cx(
                                    "mb-6 text-md",
                                    tier.highlighted ? "text-brand-200" : "text-secondary"
                                )}
                            >
                                {tier.description}
                            </p>

                            {/* CTA button */}
                            <Button
                                color={tier.highlighted ? "secondary" : tier.ctaColor}
                                size="lg"
                                className="mb-6 w-full"
                            >
                                {tier.cta}
                            </Button>

                            {/* Features list */}
                            <ul className="flex flex-1 flex-col gap-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check
                                            className={cx(
                                                "mt-0.5 size-5 shrink-0",
                                                tier.highlighted ? "text-brand-200" : "text-success-500"
                                            )}
                                        />
                                        <span
                                            className={cx(
                                                "text-md",
                                                tier.highlighted ? "text-white" : "text-secondary"
                                            )}
                                        >
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
