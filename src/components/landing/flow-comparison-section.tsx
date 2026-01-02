"use client";

import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface FlowComparisonSectionProps {
    className?: string;
}

export const FlowComparisonSection = ({ className }: FlowComparisonSectionProps) => {
    const { flowComparison } = siteContent;

    return (
        <section className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-400">
                        The Issue
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {flowComparison.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {flowComparison.subheadline}
                    </p>
                </div>

                {/* Two-column comparison */}
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-8">
                    {/* WITHOUT MITABLE - Left Column */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
                        <div className="mb-6 flex items-center gap-2">
                            <svg className="size-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-gray-400">
                                {flowComparison.without.title}
                            </h3>
                        </div>
                        <ol className="space-y-3">
                            {flowComparison.without.steps.map((step, index) => (
                                <li
                                    key={index}
                                    className={cx(
                                        "flex items-center gap-3",
                                        step.type === "stop" && "text-red-400 line-through opacity-70"
                                    )}
                                >
                                    <span className={cx(
                                        "flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                                        step.type === "stop"
                                            ? "bg-red-900/50 text-red-400"
                                            : "bg-gray-700 text-white"
                                    )}>
                                        {index + 1}
                                    </span>
                                    <span className={cx(
                                        "text-md",
                                        step.type === "stop" ? "text-red-400" : "text-white"
                                    )}>
                                        {step.text}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* WITH MITABLE - Right Column */}
                    <div className="rounded-2xl border border-brand-800 bg-brand-950/30 p-6 md:p-8">
                        <div className="mb-6 flex items-center gap-2">
                            <svg className="size-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-brand-400">
                                {flowComparison.with.title}
                            </h3>
                        </div>
                        <ol className="space-y-3">
                            {flowComparison.with.steps.map((step, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-900 font-mono text-xs font-semibold text-brand-400">
                                        {index + 1}
                                    </span>
                                    <span className="text-md text-white">
                                        {step.text}
                                    </span>
                                </li>
                            ))}
                        </ol>
                        {/* Tagline */}
                        <div className="mt-8 border-t border-brand-800 pt-6">
                            <p className="font-mono text-sm text-brand-400">
                                {flowComparison.with.tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
