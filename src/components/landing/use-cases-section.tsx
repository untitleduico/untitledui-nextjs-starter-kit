"use client";

import { PenTool02, Terminal, BookOpen01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const iconMap = {
    "pen-tool": PenTool02,
    terminal: Terminal,
    book: BookOpen01,
} as const;

interface UseCasesSectionProps {
    className?: string;
}

export const UseCasesSection = ({ className }: UseCasesSectionProps) => {
    const { useCases } = siteContent;

    return (
        <section className={cx("bg-canvas", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-500">
                        {useCases.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
                        {useCases.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-grey">
                        {useCases.subheadline}
                    </p>
                </div>

                {/* Use cases grid */}
                <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                    {useCases.items.map((useCase, index) => {
                        const Icon = iconMap[useCase.icon as keyof typeof iconMap] || PenTool02;

                        return (
                            <div
                                key={useCase.title}
                                className="card-swiss group p-6 transition-all hover:shadow-lg md:p-8"
                            >
                                {/* Icon */}
                                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                                    <Icon className="size-6" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-ink">
                                    {useCase.title}
                                </h3>

                                {/* Question - italic, grey */}
                                <p className="mb-4 italic text-grey">
                                    {useCase.question}
                                </p>

                                {/* Value proposition */}
                                <p className="text-md text-secondary">
                                    {useCase.value}
                                </p>

                                {/* Decorative line */}
                                <div className="mt-6 h-1 w-12 rounded-full bg-brand-200 transition-all group-hover:w-16 group-hover:bg-brand-500" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
