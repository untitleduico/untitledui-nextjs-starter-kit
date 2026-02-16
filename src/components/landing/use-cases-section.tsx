"use client";

import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const iconMap = {
    "pen-tool": (
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    ),
    terminal: (
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    book: (
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
} as const;

interface UseCasesSectionProps {
    className?: string;
}

export const UseCasesSection = ({ className }: UseCasesSectionProps) => {
    const { useCases } = siteContent;

    return (
        <section className={cx("bg-surface", className)}>
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
                        {useCases.sectionLabel}
                    </motion.p>
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {useCases.headline}
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-xl text-lg text-gray-400"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {useCases.subheadline}
                    </motion.p>
                </div>

                {/* Use case cards */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
                    {useCases.items.map((useCase, index) => {
                        const icon = iconMap[useCase.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={useCase.title}
                                className="group relative overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900/30 p-6 transition-all duration-300 hover:border-gray-700/60 md:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                            >
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-950/0 to-brand-950/0 transition-all duration-500 group-hover:from-brand-950/10 group-hover:to-transparent" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gray-800/60 text-brand-400 transition-colors duration-300 group-hover:bg-brand-900/40">
                                        {icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 font-display text-lg font-bold uppercase tracking-tight text-white">
                                        {useCase.title}
                                    </h3>

                                    {/* Question */}
                                    <p className="mb-4 font-mono text-sm italic leading-relaxed text-gray-500">
                                        {useCase.question}
                                    </p>

                                    {/* Value prop */}
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        {useCase.value}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className="mt-6 h-px w-10 bg-gray-800 transition-all duration-500 group-hover:w-16 group-hover:bg-brand-400" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
