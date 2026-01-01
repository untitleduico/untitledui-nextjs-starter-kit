"use client";

import { Play, ChevronRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

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
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-500">
                        {timeline.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
                        {timeline.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-grey">
                        {timeline.subheadline}
                    </p>
                </div>

                {/* Timeline Visual - Swiss Utility / Howie Style */}
                <div className="mx-auto max-w-4xl">
                    <div className="card-swiss overflow-hidden border border-gray-200/50 shadow-xl">
                        {/* Timeline Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="size-3 rounded-full bg-gray-300" />
                                    <div className="size-3 rounded-full bg-gray-300" />
                                    <div className="size-3 rounded-full bg-gray-300" />
                                </div>
                                <span className="font-mono text-xs text-gray-400">timeline</span>
                            </div>
                            <span className="font-mono text-xs text-gray-400">TODAY</span>
                        </div>

                        {/* Time axis with pill bars */}
                        <div className="border-b border-gray-100 px-6 py-4">
                            <div className="mb-3 flex items-center justify-between font-mono text-xs text-gray-400">
                                <span>09:00</span>
                                <span>10:00</span>
                                <span>11:00</span>
                                <span>12:00</span>
                                <span>13:00</span>
                                <span>14:00</span>
                            </div>
                            {/* Timeline bar visualization */}
                            <div className="flex h-8 items-center gap-1">
                                {timeline.sessions.map((session, index) => {
                                    // Calculate width based on duration
                                    const durationMatch = session.duration.match(/(\d+)h?\s*(\d+)?m?/);
                                    const hours = durationMatch ? parseInt(durationMatch[1]) || 0 : 1;
                                    const minutes = durationMatch ? parseInt(durationMatch[2]) || 0 : 0;
                                    const totalMinutes = hours * 60 + minutes;
                                    const widthPercent = Math.min(Math.max((totalMinutes / 30) * 10, 10), 40);

                                    return (
                                        <div
                                            key={index}
                                            className={cx(
                                                "group relative h-full cursor-pointer rounded-full transition-all hover:opacity-90",
                                                session.type === "focus" ? "bg-brand-500" : "bg-gray-300"
                                            )}
                                            style={{ width: `${widthPercent}%` }}
                                        >
                                            {/* Tooltip on hover */}
                                            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                                                <span className="font-mono text-xs text-white">
                                                    {session.app} · {session.duration}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Session blocks */}
                        <div className="p-6">
                            {/* Session grid */}
                            <div className="mb-6 grid gap-3 sm:grid-cols-2">
                                {timeline.sessions.map((session, index) => (
                                    <div
                                        key={index}
                                        className={cx(
                                            "flex items-center gap-3 rounded-xl p-4 transition-all cursor-pointer",
                                            session.type === "focus"
                                                ? "bg-brand-50 hover:bg-brand-100"
                                                : "bg-gray-100 hover:bg-gray-200"
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                "size-3 rounded-full",
                                                session.type === "focus" ? "bg-brand-500" : "bg-gray-400"
                                            )}
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-ink">{session.app}</span>
                                                <span className="font-mono text-xs text-gray-500">{session.time}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-grey">{session.label}</span>
                                                <span className="font-mono text-xs text-brand-600">{session.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="mb-6 flex items-center justify-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-brand-500" />
                                    <span className="font-mono text-xs text-gray-500">Deep Work</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-gray-300" />
                                    <span className="font-mono text-xs text-gray-500">Comms</span>
                                </div>
                            </div>

                            {/* Expandable session detail */}
                            <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-brand-100">
                                            <Play className="size-5 text-brand-600" />
                                        </div>
                                        <div>
                                            <span className="font-medium text-ink">
                                                {timeline.expandedSession.app} Session
                                            </span>
                                            <p className="text-sm text-grey">Click to expand details</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="size-5 text-brand-600" />
                                </div>

                                {/* Expanded content */}
                                <div className="mt-4 space-y-2 border-t border-brand-200/50 pt-4">
                                    {timeline.expandedSession.details.map((detail, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-sm text-secondary"
                                        >
                                            <div className="size-2 rounded-full bg-brand-500" />
                                            {detail}
                                        </div>
                                    ))}
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
                </div>
            </div>
        </section>
    );
};
