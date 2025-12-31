"use client";

import { Clock, FileX02, List, FaceFrown } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const problemIcons = [Clock, FileX02, List, FaceFrown] as const;

interface ProblemSectionProps {
    className?: string;
}

export const ProblemSection = ({ className }: ProblemSectionProps) => {
    const { problems } = siteContent;

    return (
        <section className={cx("", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        {problems.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-secondary">
                        {problems.subheadline}
                    </p>
                </div>

                {/* Problems grid */}
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
                    {problems.items.map((problem, index) => {
                        const Icon = problemIcons[index] || Clock;

                        return (
                            <div
                                key={problem.title}
                                className="group flex gap-4 rounded-2xl bg-secondary p-6 transition-all hover:bg-tertiary md:p-8"
                            >
                                <FeaturedIcon
                                    icon={Icon}
                                    size="md"
                                    theme="light"
                                    color="error"
                                    className="shrink-0"
                                />
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold text-primary md:text-xl">
                                        {problem.title}
                                    </h3>
                                    <p className="text-md text-secondary">
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
