"use client";

import { useRef, useCallback } from "react";
import { Play, File06 } from "@untitledui/icons";
import { motion, useScroll, useTransform } from "motion/react";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const roleIcons = {
    SESSIONS: Play,
    DOCS: File06,
    MONITORING: Play,
    INSIGHTS: Play,
    REPORTS: File06,
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

/* ─── Report in Word template (Mitable → your template) ─── */
const ReportToWordMockup = () => (
    <div className="relative overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900/50">
        {/* Word-style window chrome */}
        <div className="flex items-center gap-3 border-b border-gray-800/40 px-4 py-2.5">
            <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
                <div className="size-2.5 rounded-full bg-gray-700" />
            </div>
            <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-500">Daily Team Report.docx</span>
                <span className="rounded bg-brand-950/60 px-1.5 py-0.5 font-mono text-[9px] text-brand-400">YOUR TEMPLATE</span>
            </div>
        </div>
        {/* Document body: report content as if in Word */}
        <div className="p-4 space-y-3 bg-gray-950/30">
            <div>
                <h4 className="mb-1 font-display text-xs font-bold uppercase tracking-tight text-white">Daily Team Report</h4>
                <p className="font-mono text-[10px] text-gray-500">20 Nov 2025 · Generated by Mitable</p>
            </div>
            <div className="rounded border border-gray-800/60 overflow-hidden">
                <table className="w-full text-left font-mono text-[10px]">
                    <thead>
                        <tr className="border-b border-gray-800/60 bg-gray-900/50">
                            <th className="px-2.5 py-1.5 text-gray-500 font-semibold">Name</th>
                            <th className="px-2.5 py-1.5 text-gray-500 font-semibold">Hours</th>
                            <th className="px-2.5 py-1.5 text-gray-500 font-semibold">Deliverables</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        <tr className="border-b border-gray-800/40"><td className="px-2.5 py-1">Olawale A</td><td className="px-2.5 py-1">7h 45m</td><td className="px-2.5 py-1">3</td></tr>
                        <tr className="border-b border-gray-800/40"><td className="px-2.5 py-1">Chioma O</td><td className="px-2.5 py-1">6h 20m</td><td className="px-2.5 py-1">2</td></tr>
                        <tr className="border-b border-gray-800/40"><td className="px-2.5 py-1">Muhammed D</td><td className="px-2.5 py-1">8h 00m</td><td className="px-2.5 py-1">4</td></tr>
                        <tr><td className="px-2.5 py-1 text-gray-500">+5 more</td><td className="px-2.5 py-1 text-brand-400 font-medium">47h total</td><td className="px-2.5 py-1">12</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="font-mono text-[9px] text-gray-500">Report filled into your Word template · Edit and share as needed</p>
        </div>
    </div>
);

const mockups = [SessionsMockup, DocsMockup, ReportToWordMockup];

interface FeaturesSectionProps {
    className?: string;
}

const PANEL_LABELS: Record<string, string> = {
    MONITORING: "Monitoring",
    INSIGHTS: "Insights",
    REPORTS: "Reports",
};

export const FeaturesSection = ({ className }: FeaturesSectionProps) => {
    const { features } = siteContent;
    const panelCount = features.items.length;
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((panelCount - 1) / panelCount) * 100}%`]);

    const scrollToPanel = useCallback(
        (index: number) => {
            if (!scrollRef.current) return;
            const el = scrollRef.current;
            // Start of each panel (left edge): 0, 1/3, 2/3 for 3 panels; else index/panelCount
            const progress = panelCount === 3 ? index / 3 : index / panelCount;
            const top = el.offsetTop + progress * (el.offsetHeight - window.innerHeight);
            window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        },
        [panelCount]
    );

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

                        {/* Progress dots (clickable: Monitoring, Insights, Reports) */}
                        <div className="flex items-center justify-center gap-3 pb-8">
                            {features.items.map((feature, index) => (
                                <ProgressDot
                                    key={feature.title}
                                    index={index}
                                    total={panelCount}
                                    scrollYProgress={scrollYProgress}
                                    label={PANEL_LABELS[feature.role] ?? feature.role}
                                    onScrollToPanel={scrollToPanel}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── Progress Dot (clickable to scroll to capability) ─── */
function ProgressDot({
    index,
    total,
    scrollYProgress,
    label,
    onScrollToPanel,
}: {
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    label: string;
    onScrollToPanel: (index: number) => void;
}) {
    // Shift segments so the 3rd capability (Reports) highlights the 3rd dot: [0–25%] dot 1, [25–50%] dot 2, [50–100%] dot 3
    const segmentSize = 1 / total;
    const start =
        total === 3 && index === 2 ? 0.5 : total === 3 && index === 1 ? 0.25 : index * segmentSize;
    const end =
        total === 3 && index === 2 ? 1 : total === 3 && index === 0 ? 0.25 : total === 3 && index === 1 ? 0.5 : start + segmentSize;
    const ramp = Math.min(segmentSize * 0.3, (end - start) * 0.4);

    const opacity = useTransform(
        scrollYProgress,
        [start, start + ramp, end - ramp, end],
        [0.3, 1, 1, 0.3]
    );
    const scale = useTransform(
        scrollYProgress,
        [start, start + ramp, end - ramp, end],
        [1, 1.4, 1.4, 1]
    );

    return (
        <motion.button
            type="button"
            aria-label={`Go to ${label}`}
            className="rounded-full p-1.5 transition-colors hover:bg-gray-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            onClick={() => onScrollToPanel(index)}
            style={{ opacity, scale }}
        >
            <span className="block size-2 rounded-full bg-brand-400" />
        </motion.button>
    );
}
