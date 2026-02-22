"use client";

import { useRef } from "react";
import { Play, File06 } from "@untitledui/icons";
import { motion, useScroll, useTransform } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const roleIcons = {
    SESSIONS: Play,
    DOCS: File06,
} as const;

/* ─── Stylized Console Mockups per Feature ─── */

const SessionsMockup = () => (
    <div className="relative overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900/50">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-gray-800/40 px-4 py-2.5">
            <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
            </div>
            <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-400">Sessions</span>
                <span className="font-mono text-[10px] text-gray-700">|</span>
                <span className="font-mono text-[10px] text-gray-600">Docs</span>
            </div>
        </div>
        {/* Session rows */}
        <div className="p-3 space-y-2">
            {[
                { app: "VS Code", time: "2h 15m", color: "bg-brand-400", w: "w-[60%]" },
                { app: "Figma", time: "1h 30m", color: "bg-purple-400", w: "w-[40%]" },
                { app: "Teams", time: "45m", color: "bg-gray-500", w: "w-[20%]" },
                { app: "Zoom", time: "30m", color: "bg-gray-600", w: "w-[15%]" },
            ].map((s) => (
                <div key={s.app} className="flex items-center gap-3">
                    <span className="w-14 shrink-0 font-mono text-[10px] text-gray-500">{s.app}</span>
                    <div className="flex-1">
                        <div className={cx("h-3 rounded-full", s.color, s.w, "opacity-60")} />
                    </div>
                    <span className="font-mono text-[10px] tabular-nums text-gray-600">{s.time}</span>
                </div>
            ))}
            {/* Footer */}
            <div className="mt-3 flex items-center justify-between border-t border-gray-800/40 pt-3">
                <span className="font-mono text-[10px] text-gray-600">TOTAL</span>
                <span className="font-mono text-[10px] font-medium text-brand-400">5h 00m</span>
            </div>
        </div>
    </div>
);

const DocsMockup = () => (
    <div className="relative overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900/50">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-gray-800/40 px-4 py-2.5">
            <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
            </div>
            <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-600">Sessions</span>
                <span className="font-mono text-[10px] text-gray-700">|</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-400">Docs</span>
            </div>
        </div>
        {/* Doc preview */}
        <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
                <File06 className="size-3.5 text-brand-400" />
                <span className="text-xs font-medium text-white">API Migration Guide</span>
                <span className="ml-auto rounded-full bg-brand-950/60 px-2 py-0.5 font-mono text-[9px] text-brand-400">AUTO-GENERATED</span>
            </div>
            {/* Simulated markdown lines */}
            <div className="space-y-2 rounded-lg bg-gray-950/50 p-3">
                <div className="h-2.5 w-[45%] rounded bg-gray-700/50" />
                <div className="h-2 w-full rounded bg-gray-800/40" />
                <div className="h-2 w-[90%] rounded bg-gray-800/40" />
                <div className="h-2 w-[75%] rounded bg-gray-800/40" />
                <div className="mt-3 h-2.5 w-[35%] rounded bg-gray-700/50" />
                <div className="h-2 w-full rounded bg-gray-800/40" />
                <div className="h-2 w-[60%] rounded bg-gray-800/40" />
            </div>
            <div className="flex gap-2">
                <span className="rounded bg-gray-800 px-2 py-0.5 font-mono text-[9px] text-gray-500">MARKDOWN</span>
                <span className="rounded bg-gray-800 px-2 py-0.5 font-mono text-[9px] text-gray-500">2,450 WORDS</span>
            </div>
        </div>
    </div>
);

const mockups = [SessionsMockup, DocsMockup];

interface FeaturesSectionProps {
    className?: string;
}

export const FeaturesSection = ({ className }: FeaturesSectionProps) => {
    const { features } = siteContent;
    const panelCount = features.items.length;
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((panelCount - 1) / panelCount) * 100}%`]);

    return (
        <section id="features" className={cx("bg-ink", className)}>
            {/* Mobile: vertical stack */}
            <div className="md:hidden">
                <div className="mx-auto max-w-container px-4 py-20">
                    {/* Section header */}
                    <div className="mb-16 text-center">
                        <motion.p
                            className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-400"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {features.sectionLabel}
                        </motion.p>
                        <motion.h2
                            className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {features.headline}
                        </motion.h2>
                        <motion.p
                            className="mx-auto max-w-2xl text-lg text-gray-400"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            {features.subheadline}
                        </motion.p>
                    </div>

                    <div className="space-y-16">
                        {features.items.map((feature, index) => {
                            const Icon = roleIcons[feature.role as keyof typeof roleIcons] || Play;
                            const Mockup = mockups[index] || SessionsMockup;

                            return (
                                <motion.div
                                    key={feature.title}
                                    className="space-y-8"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div>
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-800/30 bg-brand-950/30 px-3.5 py-1.5">
                                            <Icon className="size-3.5 text-brand-400" />
                                            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-400">
                                                {feature.role}
                                            </span>
                                        </div>
                                        <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="mb-6 text-lg leading-relaxed text-gray-400">
                                            {feature.description}
                                        </p>
                                        <div className="mb-6 rounded-lg border-l-2 border-brand-400/40 bg-brand-950/20 px-4 py-3">
                                            <p className="font-mono text-sm leading-relaxed text-brand-300/70">
                                                {feature.quote}
                                            </p>
                                        </div>
                                        {feature.highlights && (
                                            <ul className="space-y-2.5">
                                                {feature.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex items-center gap-3 text-sm text-gray-300">
                                                        <div className="flex size-5 items-center justify-center rounded-full bg-brand-950/50">
                                                            <div className="size-1.5 rounded-full bg-brand-400" />
                                                        </div>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <div
                                            className="pointer-events-none absolute -inset-8 opacity-40"
                                            style={{
                                                background: "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.06) 0%, transparent 100%)",
                                            }}
                                        />
                                        <div className="relative">
                                            <Mockup />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop: horizontal scroll-jacking */}
            <div className="hidden md:block">
                <div
                    ref={scrollRef}
                    style={{ height: `${panelCount * 100}vh` }}
                >
                    <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
                        {/* Section header */}
                        <div className="mx-auto w-full max-w-container px-8 pt-20 pb-8 text-center lg:pt-24">
                            <motion.p
                                className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-400"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {features.sectionLabel}
                            </motion.p>
                            <motion.h2
                                className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {features.headline}
                            </motion.h2>
                            <motion.p
                                className="mx-auto max-w-2xl text-lg text-gray-400"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                            >
                                {features.subheadline}
                            </motion.p>
                        </div>

                        {/* Horizontal scroll panels */}
                        <div className="flex-1 overflow-hidden">
                            <motion.div
                                className="flex h-full"
                                style={{ x, width: `${panelCount * 100}%` }}
                            >
                                {features.items.map((feature, index) => {
                                    const Icon = roleIcons[feature.role as keyof typeof roleIcons] || Play;
                                    const Mockup = mockups[index] || SessionsMockup;

                                    return (
                                        <div
                                            key={feature.title}
                                            className="flex h-full shrink-0 items-center px-8 lg:px-16"
                                            style={{ width: `${100 / panelCount}%` }}
                                        >
                                            <div className="mx-auto grid w-full max-w-container grid-cols-2 items-center gap-12 lg:gap-16">
                                                {/* Text Content */}
                                                <div>
                                                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-800/30 bg-brand-950/30 px-3.5 py-1.5">
                                                        <Icon className="size-3.5 text-brand-400" />
                                                        <span className="font-mono text-[11px] uppercase tracking-widest text-brand-400">
                                                            {feature.role}
                                                        </span>
                                                    </div>
                                                    <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="mb-6 text-lg leading-relaxed text-gray-400">
                                                        {feature.description}
                                                    </p>
                                                    <div className="mb-6 rounded-lg border-l-2 border-brand-400/40 bg-brand-950/20 px-4 py-3">
                                                        <p className="font-mono text-sm leading-relaxed text-brand-300/70">
                                                            {feature.quote}
                                                        </p>
                                                    </div>
                                                    {feature.highlights && (
                                                        <ul className="space-y-2.5">
                                                            {feature.highlights.map((highlight) => (
                                                                <li key={highlight} className="flex items-center gap-3 text-sm text-gray-300">
                                                                    <div className="flex size-5 items-center justify-center rounded-full bg-brand-950/50">
                                                                        <div className="size-1.5 rounded-full bg-brand-400" />
                                                                    </div>
                                                                    {highlight}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                                {/* Visual Mockup */}
                                                <div className="relative">
                                                    <div
                                                        className="pointer-events-none absolute -inset-8 opacity-40"
                                                        style={{
                                                            background: "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.06) 0%, transparent 100%)",
                                                        }}
                                                    />
                                                    <div className="relative">
                                                        <Mockup />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Progress dots */}
                        <div className="flex items-center justify-center gap-3 pb-8">
                            {features.items.map((feature, index) => (
                                <ProgressDot
                                    key={feature.title}
                                    index={index}
                                    total={panelCount}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── Progress Dot ─── */
function ProgressDot({
    index,
    total,
    scrollYProgress,
}: {
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const segmentSize = 1 / total;
    const start = index * segmentSize;
    const end = start + segmentSize;

    const opacity = useTransform(scrollYProgress, [start, start + segmentSize * 0.3, end - segmentSize * 0.3, end], [0.3, 1, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [start, start + segmentSize * 0.3, end - segmentSize * 0.3, end], [1, 1.4, 1.4, 1]);

    return (
        <motion.div
            className="size-2 rounded-full bg-brand-400"
            style={{ opacity, scale }}
        />
    );
}
