"use client";

import { motion } from "motion/react";
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
            {/* Top divider */}
            <div className="mx-auto max-w-container">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            </div>

            {/* Background glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: "800px",
                    height: "500px",
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.06) 0%, transparent 100%)",
                }}
            />

            <div className="relative mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-36">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Small WatchPill illustration */}
                    <motion.div
                        className="mb-10 flex justify-center"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-3 rounded-full border border-gray-800/60 bg-gray-900/50 px-4 py-2 backdrop-blur-sm">
                            <div className="relative">
                                <motion.div
                                    className="absolute -inset-0.5 rounded-full bg-brand-400/20"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="relative size-2 rounded-full bg-brand-400" />
                            </div>
                            <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">Ready to record</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {cta.headline}
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        className="mb-10 text-lg text-gray-400 md:text-xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {cta.subheadline}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            color="primary"
                            size="xl"
                            href="/download"
                            className="btn-pill"
                        >
                            <span className="inline-flex items-center gap-2">
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                {cta.primaryCta}
                            </span>
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        className="mt-8 flex flex-wrap items-center justify-center gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {cta.trustIndicators.map((indicator) => (
                            <div key={indicator} className="flex items-center gap-2">
                                <div className="size-1.5 rounded-full bg-brand-400/50" />
                                <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{indicator}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
