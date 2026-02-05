"use client";

import { useState, useEffect } from "react";
import { Check } from "@untitledui/icons";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

type Region = "US/AUS" | "Nigeria";

const regionPricing: Record<Region, { free: string; pro: string; proPeriod: string; enterprise: string }> = {
    "US/AUS": { free: "$0", pro: "$20", proPeriod: "/month", enterprise: "Custom" },
    Nigeria: { free: "\u20A60", pro: "\u20A610,000", proPeriod: "/month", enterprise: "Custom" },
};

function detectRegion(): Region {
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        if (tz.includes("Lagos") || tz.includes("Africa")) return "Nigeria";
    } catch {
        // ignore
    }
    return "US/AUS";
}

function getRegionCookie(): Region | null {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|;\s*)mitable-region=(\w+)/);
    if (match) {
        const val = match[1];
        if (val === "US/AUS" || val === "Nigeria") return val;
    }
    return null;
}

function setRegionCookie(region: Region) {
    if (typeof document === "undefined") return;
    document.cookie = `mitable-region=${region};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

interface PricingSectionProps {
    className?: string;
}

export const PricingSection = ({ className }: PricingSectionProps) => {
    const { pricing } = siteContent;
    const [region, setRegion] = useState<Region>("US/AUS");

    useEffect(() => {
        const saved = getRegionCookie();
        if (saved) {
            setRegion(saved);
        } else {
            const detected = detectRegion();
            setRegion(detected);
            setRegionCookie(detected);
        }
    }, []);

    const handleRegionToggle = (r: Region) => {
        setRegion(r);
        setRegionCookie(r);
    };

    const prices = regionPricing[region];

    const getPriceForTier = (tierName: string) => {
        switch (tierName) {
            case "Free": return { price: prices.free, period: "" };
            case "Pro": return { price: prices.pro, period: prices.proPeriod };
            case "Enterprise": return { price: prices.enterprise, period: "" };
            default: return { price: "", period: "" };
        }
    };

    return (
        <section id="pricing" className={cx("bg-surface", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-14 text-center md:mb-20">
                    <motion.p
                        className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-400"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {pricing.sectionLabel}
                    </motion.p>
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {pricing.headline}
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-xl text-lg text-gray-400"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {pricing.subheadline}
                    </motion.p>

                    {/* Region toggle */}
                    <motion.div
                        className="mt-8 flex items-center justify-center"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center rounded-full border border-gray-800/60 bg-gray-900/50 p-1">
                            {(["US/AUS", "Nigeria"] as const).map((r) => (
                                <button
                                    key={r}
                                    onClick={() => handleRegionToggle(r)}
                                    className={cx(
                                        "rounded-full px-5 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-200",
                                        region === r
                                            ? "bg-brand-600 text-white shadow-sm"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Pricing cards */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
                    {pricing.tiers.map((tier, index) => {
                        const tierPrice = getPriceForTier(tier.name);
                        return (
                            <motion.div
                                key={tier.name}
                                className={cx(
                                    "relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 md:p-8",
                                    tier.highlighted
                                        ? "border-brand-500/40 bg-brand-950/20 shadow-[0_0_40px_rgba(138,97,247,0.08)]"
                                        : "border-gray-800/60 bg-gray-900/30 hover:border-gray-700/60"
                                )}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                {/* Popular badge */}
                                {tier.highlighted && (
                                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
                                )}

                                {/* Badge */}
                                {tier.highlighted && (
                                    <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-900/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-400">
                                        <span className="size-1.5 rounded-full bg-brand-400" />
                                        Most Popular
                                    </span>
                                )}

                                {/* Tier name */}
                                <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-brand-400">
                                    {tier.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-1 flex items-baseline gap-1">
                                    <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                                        {tierPrice.price}
                                    </span>
                                    {tierPrice.period && (
                                        <span className="font-mono text-sm text-gray-500">
                                            {tierPrice.period}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="mb-6 text-sm text-gray-500">
                                    {tier.description}
                                </p>

                                {/* CTA button */}
                                <Button
                                    color={tier.highlighted ? "primary" : "secondary"}
                                    size="lg"
                                    className="btn-pill mb-7 w-full"
                                    href={tier.name === "Enterprise" ? "/contact" : "/download"}
                                >
                                    {tier.cta}
                                </Button>

                                {/* Divider */}
                                <div className="mb-6 h-px bg-gray-800/40" />

                                {/* Features list */}
                                <ul className="flex flex-1 flex-col gap-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className={cx(
                                                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                                                tier.highlighted ? "bg-brand-900/40" : "bg-gray-800/60"
                                            )}>
                                                <Check
                                                    className={cx(
                                                        "size-3",
                                                        tier.highlighted ? "text-brand-400" : "text-gray-500"
                                                    )}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
