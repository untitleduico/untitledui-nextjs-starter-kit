"use client";

import { useState } from "react";
import { Play } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    const { hero } = siteContent;
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <section className={cx("relative overflow-hidden bg-canvas", className)}>
            {/* Subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-container px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <Badge type="pill-color" color="brand" size="md" className="mb-8">
                        {hero.badge}
                    </Badge>

                    {/* Headline - Bold Sans-Serif, Swiss Utility Style */}
                    <h1 className="mb-1 max-w-4xl font-display text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                        {hero.headline}
                    </h1>
                    <h1 className="mb-6 max-w-4xl font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-ink">Leave the </span>
                        <span className="underline-accent text-brand-500">receipts</span>
                        <span className="text-ink"> to us.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mb-4 max-w-2xl text-lg text-grey md:text-xl">
                        {hero.subheadline}
                    </p>

                    {/* Tagline - JetBrains Mono, Violet */}
                    <p className="mb-10 font-mono text-sm text-brand-500">
                        {hero.tagline}
                    </p>

                    {/* CTAs - Pill Style */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                            color="primary"
                            size="xl"
                            href="#download"
                            className="btn-pill"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            {hero.primaryCta}
                        </Button>
                        <Button
                            color="tertiary"
                            size="xl"
                            href="#demo"
                            className="btn-pill text-brand-600 hover:text-brand-700"
                        >
                            <Play className="size-5" />
                            {hero.secondaryCta}
                        </Button>
                    </div>

                    {/* Transformation Slider Visual */}
                    <div className="mt-16 w-full max-w-3xl md:mt-20">
                        <div className="card-swiss overflow-hidden border border-gray-200/50 shadow-xl">
                            {/* Slider Container */}
                            <div className="relative h-80 md:h-96">
                                {/* Raw Input Side (Left - Chaos) */}
                                <div
                                    className="absolute inset-0 bg-gray-100 p-6 md:p-8"
                                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                                >
                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex items-center gap-2">
                                            <div className="size-3 rounded-full bg-gray-400" />
                                            <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
                                                Raw Input
                                            </span>
                                        </div>
                                        <div className="flex-1 space-y-4 opacity-70">
                                            {hero.transformation.rawInput.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 rounded-lg bg-white/50 p-3 blur-[0.5px]"
                                                >
                                                    <div className="size-8 rounded-md bg-gray-300" />
                                                    <span className="text-sm text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                            <div className="mt-4 flex gap-2">
                                                <div className="h-2 w-16 rounded-full bg-gray-300" />
                                                <div className="h-2 w-24 rounded-full bg-gray-300" />
                                                <div className="h-2 w-12 rounded-full bg-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Smart Output Side (Right - Order) */}
                                <div
                                    className="absolute inset-0 bg-white p-6 md:p-8"
                                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                                >
                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex items-center gap-2">
                                            <div className="size-3 rounded-full bg-brand-500" />
                                            <span className="font-mono text-xs uppercase tracking-wide text-brand-600">
                                                Smart Output
                                            </span>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            {hero.transformation.smartOutput.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition-all hover:border-brand-200 hover:bg-brand-50/30"
                                                >
                                                    <div className="flex size-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                                                        <span className="font-mono text-xs font-semibold">{index + 1}</span>
                                                    </div>
                                                    <span className="font-medium text-ink">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                            <span className="font-mono text-xs text-gray-400">SESSION COMPLETE</span>
                                            <span className="font-mono text-xs text-brand-500">2h 15m documented</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Slider Control */}
                                <div
                                    className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-brand-500"
                                    style={{ left: `${sliderPosition}%` }}
                                >
                                    <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-500 bg-white shadow-lg">
                                        <svg className="size-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Slider Input (invisible, for interaction) */}
                                <input
                                    type="range"
                                    min="10"
                                    max="90"
                                    value={sliderPosition}
                                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                                    className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
                                    aria-label="Transformation slider"
                                />
                            </div>

                            {/* Card Footer */}
                            <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-3 md:px-8">
                                <span className="font-mono text-xs text-gray-400">DRAG TO COMPARE</span>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-brand-500" />
                                    <span className="font-mono text-xs text-brand-600">MITABLE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
