"use client";

import { Zap, Clock, FileX02, RefreshCw05 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const problemIcons = [Zap, Clock, FileX02, RefreshCw05] as const;

interface ProblemSectionProps {
    className?: string;
}

export const ProblemSection = ({ className }: ProblemSectionProps) => {
    const { problems } = siteContent;

    return (
        <section className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {problems.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {problems.subheadline}
                    </p>
                </div>

                {/* Problems grid */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
                    {problems.items.map((problem, index) => {
                        const Icon = problemIcons[index] || Zap;

                        return (
                            <div
                                key={problem.title}
                                className="group flex gap-4 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900 md:p-8"
                            >
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-gray-400 transition-colors group-hover:bg-brand-900/50 group-hover:text-brand-400">
                                    <Icon className="size-6" />
                                </div>
                                <div>
                                    <h3 className="mb-2 font-display text-lg font-bold uppercase tracking-tight text-white md:text-xl">
                                        {problem.title}
                                    </h3>
                                    <p className="text-md text-gray-400">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
