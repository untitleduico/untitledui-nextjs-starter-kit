"use client";

import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    return (
        <section className={cx("relative overflow-hidden", className)}>
            {/* Subtle gradient background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/50 via-transparent to-transparent dark:from-brand-950/20" />

            <div className="relative mx-auto max-w-container px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
                <div className="flex flex-col items-center text-center">
                    {/* Beta badge */}
                    <Badge type="pill-color" color="brand" size="md" className="mb-6">
                        {siteContent.hero.badge}
                    </Badge>

                    {/* Headline - larger with tighter tracking */}
                    <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                        {siteContent.hero.headline}
                    </h1>

                    {/* Subheadline */}
                    <p className="mb-10 max-w-2xl text-lg text-secondary md:text-xl">
                        {siteContent.hero.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button color="primary" size="xl" href="#download">
                            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            {siteContent.hero.primaryCta}
                        </Button>
                        <Button color="secondary" size="xl" href="#demo" iconLeading={PlayCircle}>
                            {siteContent.hero.secondaryCta}
                        </Button>
                    </div>

                    {/* Free indicator */}
                    <p className="mt-4 text-sm text-tertiary">Free to get started. No credit card required.</p>

                    {/* Product mockup */}
                    <div className="mt-16 w-full max-w-5xl md:mt-20">
                        <div className="relative">
                            {/* Main mockup container with glassmorphic effect */}
                            <div className="overflow-hidden rounded-2xl bg-white/80 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:bg-gray-900/80 dark:ring-white/10">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 border-b border-gray-200/50 bg-gray-100/50 px-4 py-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                                    <div className="flex gap-1.5">
                                        <div className="size-3 rounded-full bg-red-400" />
                                        <div className="size-3 rounded-full bg-yellow-400" />
                                        <div className="size-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <div className="mx-auto w-full max-w-sm rounded-md bg-white/80 px-3 py-1.5 text-center text-xs text-gray-500 dark:bg-gray-700/80 dark:text-gray-400">
                                            Mitable Console
                                        </div>
                                    </div>
                                </div>

                                {/* Mockup content */}
                                <div className="flex aspect-[16/10] flex-col bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900 md:p-8">
                                    {/* Top bar simulation */}
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-lg bg-brand-500" />
                                            <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-600" />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-8 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
                                            <div className="h-8 w-8 rounded-lg bg-brand-500" />
                                        </div>
                                    </div>

                                    {/* Main content area */}
                                    <div className="flex flex-1 gap-6">
                                        {/* Sidebar */}
                                        <div className="hidden w-48 flex-col gap-3 md:flex">
                                            <div className="h-8 w-full rounded-lg bg-brand-100 dark:bg-brand-900/50" />
                                            <div className="h-8 w-3/4 rounded-lg bg-gray-200 dark:bg-gray-700" />
                                            <div className="h-8 w-5/6 rounded-lg bg-gray-200 dark:bg-gray-700" />
                                            <div className="h-8 w-2/3 rounded-lg bg-gray-200 dark:bg-gray-700" />
                                        </div>

                                        {/* Main panel */}
                                        <div className="flex-1 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200/50 dark:bg-gray-800 dark:ring-gray-700/50 md:p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <div className="size-5 rounded bg-brand-500" />
                                                <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-600" />
                                            </div>
                                            <div className="mb-3 h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
                                            <div className="mb-3 h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                                            <div className="mb-6 h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />

                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                                                    <div className="mb-2 h-3 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                                                    <div className="h-6 w-12 rounded bg-brand-200 dark:bg-brand-800" />
                                                </div>
                                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                                                    <div className="mb-2 h-3 w-24 rounded bg-gray-300 dark:bg-gray-600" />
                                                    <div className="h-6 w-16 rounded bg-success-200 dark:bg-success-800" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating WatchPill indicator */}
                            <div className="absolute -right-2 top-1/3 hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-lg ring-4 ring-white dark:ring-gray-900 lg:block">
                                <span className="flex items-center gap-2">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
                                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                                    </span>
                                    Recording
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
