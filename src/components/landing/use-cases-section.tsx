"use client";

import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

interface UseCasesSectionProps {
    className?: string;
}

export const UseCasesSection = ({ className }: UseCasesSectionProps) => {
    const { useCases } = siteContent;

    return (
        <section className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-400">
                        {useCases.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {useCases.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {useCases.subheadline}
                    </p>
                </div>

                {/* Use cases grid */}
                <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                    {useCases.items.map((useCase) => (
                        <div
                            key={useCase.title}
                            className="card-swiss group p-6 transition-all hover:border-gray-700 md:p-8"
                        >
                            {/* Title */}
                            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-white">
                                {useCase.title}
                            </h3>

                            {/* Question - italic, grey */}
                            <p className="mb-4 italic text-gray-400">
                                {useCase.question}
                            </p>

                            {/* Value proposition */}
                            <p className="text-md text-gray-300">
                                {useCase.value}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-6 h-1 w-12 rounded-full bg-brand-800 transition-all group-hover:w-16 group-hover:bg-brand-400" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
