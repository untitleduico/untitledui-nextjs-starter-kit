"use client";

import { Lock01, EyeOff, Trash01, ShieldTick } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const iconMap = {
    lock: Lock01,
    "eye-off": EyeOff,
    trash: Trash01,
    shield: ShieldTick,
} as const;

interface PrivacySectionProps {
    className?: string;
}

export const PrivacySection = ({ className }: PrivacySectionProps) => {
    const { privacy } = siteContent;

    return (
        <section className={cx("bg-ink", className)}>
            {/* Top divider */}
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
                        {privacy.sectionLabel}
                    </motion.p>
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {privacy.headline}
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-xl text-lg text-gray-400"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {privacy.subheadline}
                    </motion.p>
                </div>

                {/* Privacy cards */}
                <div className="mx-auto grid max-w-5xl gap-6 grid-cols-2 md:grid-cols-4 lg:gap-8">
                    {privacy.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Lock01;

                        return (
                            <motion.div
                                key={feature.title}
                                className="group relative overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900/30 p-6 text-center transition-all duration-300 hover:border-gray-700/60 md:p-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/0 to-brand-950/0 transition-all duration-500 group-hover:from-brand-950/5 group-hover:to-transparent" />

                                <div className="relative flex flex-col items-center">
                                    {/* Icon container */}
                                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gray-800/50 text-brand-400 transition-all duration-300 group-hover:bg-brand-900/30 group-hover:shadow-[0_0_24px_rgba(138,97,247,0.1)]">
                                        <Icon className="size-6" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-white">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
