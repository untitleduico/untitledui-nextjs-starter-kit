"use client";

import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";
import { ChevronDown } from "@untitledui/icons";

interface FaqsSectionProps {
    className?: string;
}

export const FaqsSection = ({ className }: FaqsSectionProps) => {
    const { faqs } = siteContent;

    return (
        <section id="faqs" className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                <div className="mx-auto max-w-3xl">
                    {/* Section header */}
                    <div className="mb-14 text-center md:mb-20">
                        <motion.p
                            className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-400"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {faqs.sectionLabel}
                        </motion.p>
                        <motion.h2
                            className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {faqs.headline}
                        </motion.h2>
                    </div>

                    {/* FAQ list */}
                    <div className="space-y-3">
                        {faqs.items.map((item, index) => (
                            <motion.details
                                key={index}
                                className="group rounded-2xl border border-gray-800/60 bg-gray-900/30 transition-all duration-200 hover:border-gray-700/60 [&[open]]:border-gray-700/60"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.05 * index }}
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6">
                                    <span className="font-semibold text-white">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className="size-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                                        aria-hidden
                                    />
                                </summary>
                                <div className="border-t border-gray-800/60 px-6 pb-5 pt-4 md:px-8 md:pb-6 md:pt-4">
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
