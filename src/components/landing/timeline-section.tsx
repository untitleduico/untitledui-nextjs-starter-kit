"use client";

import { ChevronRight } from "@untitledui/icons";
import { motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const appColors: Record<string, { bar: string; bg: string; text: string }> = {
    "VS Code": { bar: "bg-brand-400", bg: "bg-brand-950/50", text: "text-brand-400" },
    Figma: { bar: "bg-purple-400", bg: "bg-purple-950/50", text: "text-purple-400" },
    Teams: { bar: "bg-emerald-400", bg: "bg-emerald-950/50", text: "text-emerald-400" },
    Teams: { bar: "bg-emerald-400", bg: "bg-emerald-950/50", text: "text-emerald-400" },
    Zoom: { bar: "bg-blue-400", bg: "bg-blue-950/50", text: "text-blue-400" },
};

interface TimelineSectionProps {
    className?: string;
}

export const TimelineSection = ({ className }: TimelineSectionProps) => {
    const { timeline } = siteContent;

    return (
        <section id="timeline" className={cx("bg-surface", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-16 text-center md:mb-20">
                    <motion.p
                        className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-400"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {timeline.sectionLabel}
                    </motion.p>
                    <motion.h2
                        className="mb-5 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {timeline.headline}
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-2xl text-lg text-gray-400"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        {timeline.subheadline}
                    </motion.p>
                </div>

                {/* Timeline Visual */}
                <motion.div
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="overflow-hidden rounded-2xl border border-gray-800/60 bg-gray-900/40">
                        {/* Window chrome */}
                        <div className="flex items-center justify-between border-b border-gray-800/40 px-5 py-3">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="size-2.5 rounded-full bg-gray-700" />
                                    <div className="size-2.5 rounded-full bg-gray-700" />
                                    <div className="size-2.5 rounded-full bg-gray-700" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">Timeline</span>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-600">Today</span>
                        </div>

                        {/* Time axis bar chart */}
                        <div className="border-b border-gray-800/40 px-5 py-5">
                            {/* Time markers */}
                            <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-gray-600">
                                <span>09:00</span>
                                <span>10:00</span>
                                <span>11:00</span>
                                <span>12:00</span>
                                <span>13:00</span>
                                <span>14:00</span>
                            </div>
                            {/* Bars */}
                            <div className="flex h-10 items-center gap-1 rounded-lg bg-gray-950/40 p-1">
                                {timeline.sessions.map((session, index) => {
                                    const durationMatch = session.duration.match(/(\d+)h?\s*(\d+)?m?/);
                                    const hours = durationMatch ? parseInt(durationMatch[1]) || 0 : 1;
                                    const minutes = durationMatch ? parseInt(durationMatch[2]) || 0 : 0;
                                    const totalMinutes = hours * 60 + minutes;
                                    const widthPercent = Math.min(Math.max((totalMinutes / 30) * 10, 10), 45);
                                    const colors = appColors[session.app] || appColors["VS Code"];

                                    return (
                                        <motion.div
                                            key={index}
                                            className={cx(
                                                "group relative h-full cursor-pointer rounded-md transition-all hover:brightness-110",
                                                colors.bar,
                                                "opacity-70 hover:opacity-100"
                                            )}
                                            style={{ width: `${widthPercent}%` }}
                                            initial={{ scaleX: 0, originX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        >
                                            {/* Tooltip */}
                                            <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg border border-gray-700 bg-gray-900 px-3 py-1.5 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                                                <span className="font-mono text-[11px] text-white">
                                                    {session.app} &middot; {session.duration}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Session cards grid */}
                        <div className="p-5">
                            <div className="mb-5 grid gap-2.5 sm:grid-cols-2">
                                {timeline.sessions.map((session, index) => {
                                    const colors = appColors[session.app] || appColors["VS Code"];
                                    return (
                                        <motion.div
                                            key={index}
                                            className={cx(
                                                "flex items-center gap-3 rounded-xl p-3.5 transition-all cursor-pointer",
                                                colors.bg,
                                                "hover:brightness-110"
                                            )}
                                            initial={{ opacity: 0, y: 8 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                                        >
                                            <div className={cx("size-2.5 rounded-full", colors.bar)} />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-white">{session.app}</span>
                                                    <span className="font-mono text-[10px] text-gray-500">{session.time}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500">{session.label}</span>
                                                    <span className={cx("font-mono text-[10px]", colors.text)}>{session.duration}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Legend */}
                            <div className="mb-5 flex flex-wrap items-center justify-center gap-5">
                                {Object.entries(appColors).map(([app, colors]) => (
                                    <div key={app} className="flex items-center gap-2">
                                        <div className={cx("size-2.5 rounded-full", colors.bar)} />
                                        <span className="font-mono text-[10px] text-gray-500">{app}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Expanded session detail */}
                            <div className="overflow-hidden rounded-xl border border-brand-800/30 bg-brand-950/20">
                                <div className="flex items-center justify-between px-4 py-3.5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-lg bg-brand-900/40">
                                            <svg className="size-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-white">
                                                {timeline.expandedSession.app} Session
                                            </span>
                                            <p className="text-xs text-gray-500">Expand for details</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="size-4 text-brand-400" />
                                </div>

                                <div className="border-t border-brand-800/20 px-4 py-3.5">
                                    <div className="space-y-2">
                                        {timeline.expandedSession.details.map((detail, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2.5 text-sm text-gray-400"
                                            >
                                                <div className="size-1.5 rounded-full bg-brand-400/60" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            color="primary"
                                            size="sm"
                                            className="btn-pill"
                                        >
                                            {timeline.expandedSession.action}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
