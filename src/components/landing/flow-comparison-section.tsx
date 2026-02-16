"use client";

import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface FlowComparisonSectionProps {
    className?: string;
}

export const FlowComparisonSection = ({ className }: FlowComparisonSectionProps) => {
    const { flowComparison } = siteContent;

    return (
        <section className={cx("relative overflow-hidden bg-ink", className)}>
            {/* Subtle top border line */}
            <div className="mx-auto max-w-container">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            </div>

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
                        The Problem
                    </motion.p>
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {flowComparison.headline}
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-xl text-lg text-gray-400"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {flowComparison.subheadline}
                    </motion.p>
                </div>

                {/* Two-column comparison */}
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-8">
                    {/* WITHOUT MITABLE */}
                    <motion.div
                        className="relative overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900/30 p-6 md:p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Red tint overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-950/10 to-transparent" />

                        <div className="relative">
                            <div className="mb-8 flex items-center gap-2.5">
                                <div className="flex size-8 items-center justify-center rounded-lg bg-red-950/60">
                                    <svg className="size-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-500">
                                    {flowComparison.without.title}
                                </h3>
                            </div>

                            <ol className="space-y-3">
                                {flowComparison.without.steps.map((step, index) => {
                                    const isStop = step.type === "stop";
                                    return (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                                        >
                                            <span
                                                className={cx(
                                                    "flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                                                    isStop
                                                        ? "bg-red-950/40 text-red-500/60"
                                                        : "bg-gray-800 text-white"
                                                )}
                                            >
                                                {index + 1}
                                            </span>
                                            <span
                                                className={cx(
                                                    "text-sm",
                                                    isStop
                                                        ? "text-red-400/50 line-through decoration-red-500/30"
                                                        : "font-medium text-white"
                                                )}
                                            >
                                                {step.text}
                                            </span>
                                            {isStop && (
                                                <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-red-500/40">
                                                    CONTEXT SWITCH
                                                </span>
                                            )}
                                        </motion.li>
                                    );
                                })}
                            </ol>

                            {/* Time wasted indicator */}
                            <div className="mt-8 flex items-center justify-between border-t border-red-900/20 pt-5">
                                <span className="font-mono text-[11px] uppercase tracking-wider text-gray-600">Time lost</span>
                                <span className="font-mono text-sm text-red-400/60">~45 min</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* WITH MITABLE */}
                    <motion.div
                        className="relative overflow-hidden rounded-2xl border border-brand-800/40 bg-brand-950/20 p-6 md:p-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Violet tint overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-950/20 to-transparent" />

                        <div className="relative">
                            <div className="mb-8 flex items-center gap-2.5">
                                <div className="flex size-8 items-center justify-center rounded-lg bg-brand-900/60">
                                    <svg className="size-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-400">
                                    {flowComparison.with.title}
                                </h3>
                            </div>

                            <ol className="space-y-3">
                                {flowComparison.with.steps.map((step, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                    >
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-900/60 font-mono text-xs font-semibold text-brand-400">
                                            {index + 1}
                                        </span>
                                        <span className="font-medium text-white">{step.text}</span>
                                    </motion.li>
                                ))}
                            </ol>

                            {/* Tagline */}
                            <motion.div
                                className="mt-8 border-t border-brand-800/30 pt-5"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <motion.div
                                            className="absolute -inset-1 rounded-full bg-brand-400/20"
                                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <div className="relative size-2.5 rounded-full bg-brand-400" />
                                    </div>
                                    <p className="font-mono text-sm text-brand-400">
                                        {flowComparison.with.tagline}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mitable auto-generated outputs */}
                            <div className="mt-5 space-y-2">
                                {["Docs updated", "Ticket closed", "Notes saved"].map((item, i) => (
                                    <motion.div
                                        key={item}
                                        className="flex items-center gap-2.5 rounded-lg bg-brand-950/40 px-3 py-2"
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                                    >
                                        <svg className="size-3.5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="font-mono text-xs text-brand-300/70">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
