"use client";

import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

/* ─── VS Code icon (simplified for the pill) ─── */
const VSCodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="size-4">
        <path
            d="M17.5 0L7.5 8.5L3 5.5L0 7l7.5 5.5L0 18l3 1.5 4.5-3L17.5 25l4.5-2V2L17.5 0zm0 3.5v18l-7-5.5V9l7-5.5z"
            fill="currentColor"
        />
    </svg>
);

/* ─── Download icon ─── */
const DownloadIcon = () => (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

/* ─── Decorative grid dots for the background ─── */
const GridPattern = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
    </div>
);

interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    const { hero } = siteContent;

    return (
        <section className={cx("relative overflow-hidden bg-ink", className)}>
            <GridPattern />

            {/* Radial glow behind pill */}
            <div
                className="pointer-events-none absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: "800px",
                    height: "600px",
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.08) 0%, rgba(138,97,247,0.02) 50%, transparent 100%)",
                }}
            />

            <div className="relative mx-auto max-w-container px-4 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24 lg:pb-36 lg:pt-28">
                <div className="flex flex-col items-center text-center">
                    {/* ── Badge ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-gray-400 backdrop-blur-sm">
                            <span className="size-1.5 rounded-full bg-brand-400" />
                            {hero.badge}
                        </span>
                    </motion.div>

                    {/* ── Headline ── */}
                    <motion.h1
                        className="mt-8 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5rem]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {hero.headline}{" "}
                        <span className="underline-accent text-brand-400">{hero.headlineAccent}</span>
                    </motion.h1>

                    {/* ── Subheadline ── */}
                    <motion.p
                        className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {hero.subheadline}
                    </motion.p>

                    {/* ── CTAs ── */}
                    <motion.div
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            color="primary"
                            size="xl"
                            href="/download"
                            className="btn-pill"
                        >
                            <span className="inline-flex items-center gap-2">
                                <DownloadIcon />
                                {hero.primaryCta}
                            </span>
                        </Button>
                    </motion.div>

                    {/* ═══════════════════════════════════════════
                        HERO VISUAL — THE WATCHPILL
                        A floating pill widget built in pure CSS,
                        angled, glowing, hovering over a grid.
                    ═══════════════════════════════════════════ */}
                    <motion.div
                        className="relative mt-20 w-full max-w-2xl md:mt-28"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", damping: 20 }}
                    >
                        {/* Glow layers behind the pill */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="absolute rounded-full"
                                style={{
                                    width: "420px",
                                    height: "120px",
                                    background: "radial-gradient(ellipse at center, rgba(138,97,247,0.15) 0%, transparent 70%)",
                                    filter: "blur(40px)",
                                }}
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        {/* Perspective container for the angled pill */}
                        <div
                            className="relative mx-auto"
                            style={{ perspective: "1200px" }}
                        >
                            {/* The Pill */}
                            <motion.div
                                className="relative mx-auto w-fit"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                                animate={{
                                    rotateX: [2, -1, 2],
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Pill body */}
                                <div
                                    className="relative flex items-center gap-4 rounded-full border border-gray-700/60 bg-gray-900/90 px-5 py-3 shadow-2xl backdrop-blur-xl sm:gap-5 sm:px-7 sm:py-4"
                                    style={{
                                        boxShadow:
                                            "0 0 0 1px rgba(138,97,247,0.08), 0 4px 24px -4px rgba(0,0,0,0.5), 0 12px 48px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                                    }}
                                >
                                    {/* Recording indicator */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="relative">
                                            <motion.div
                                                className="absolute -inset-1 rounded-full bg-red-500/30"
                                                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                            <div className="relative size-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                        </div>
                                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-red-400">
                                            REC
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-5 w-px bg-gray-700/50" />

                                    {/* Timer */}
                                    <div className="font-mono text-base font-semibold tabular-nums tracking-tight text-white sm:text-lg">
                                        02:15:33
                                    </div>

                                    {/* Divider */}
                                    <div className="h-5 w-px bg-gray-700/50" />

                                    {/* Active app */}
                                    <div className="flex items-center gap-2">
                                        <div className="flex size-7 items-center justify-center rounded-lg bg-[#007ACC]/20 text-[#4FC1FF]">
                                            <VSCodeIcon />
                                        </div>
                                        <span className="hidden font-mono text-xs text-gray-400 sm:inline">
                                            VS Code
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="hidden h-5 w-px bg-gray-700/50 sm:block" />

                                    {/* Stop button */}
                                    <button className="hidden items-center gap-1.5 rounded-full bg-gray-800 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-300 transition-colors hover:bg-gray-700 sm:flex">
                                        <div className="size-2 rounded-sm bg-gray-400" />
                                        Stop
                                    </button>
                                </div>

                                {/* Reflection / glass edge at bottom */}
                                <div
                                    className="pointer-events-none absolute -bottom-px left-6 right-6 h-px"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, rgba(138,97,247,0.2), transparent)",
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Ghost sessions beneath - depth cue */}
                        <div className="mt-6 flex flex-col items-center gap-2 opacity-30">
                            <div className="flex h-8 w-64 items-center justify-center gap-3 rounded-full border border-gray-800/40 bg-gray-900/40 sm:w-72">
                                <div className="size-2 rounded-full bg-gray-600" />
                                <span className="font-mono text-[10px] text-gray-600">01:45:12</span>
                                <span className="font-mono text-[10px] text-gray-700">Figma</span>
                            </div>
                            <div className="flex h-7 w-56 items-center justify-center gap-3 rounded-full border border-gray-800/20 bg-gray-900/20 sm:w-60">
                                <div className="size-2 rounded-full bg-gray-700" />
                                <span className="font-mono text-[10px] text-gray-700">00:32:08</span>
                                <span className="font-mono text-[10px] text-gray-800">Slack</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Tagline ── */}
                    <motion.p
                        className="mt-12 font-mono text-xs tracking-wide text-brand-400/70 sm:text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {hero.tagline}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
