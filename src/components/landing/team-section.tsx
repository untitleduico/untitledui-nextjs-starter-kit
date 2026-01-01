"use client";

import { Users01, File06, BarChart01, ShieldTick } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const featureIcons = [Users01, File06, BarChart01, ShieldTick] as const;

interface TeamSectionProps {
    className?: string;
}

export const TeamSection = ({ className }: TeamSectionProps) => {
    const { team } = siteContent;

    return (
        <section className={cx("bg-brand-900", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-300">
                        {team.sectionLabel}
                    </p>
                    <h2 className="mb-2 font-display text-3xl font-semibold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {team.headline}
                    </h2>
                    <h2 className="mb-6 font-display text-3xl font-semibold uppercase tracking-tight text-brand-300 md:text-4xl lg:text-5xl">
                        {team.headlineAccent}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-brand-200">
                        {team.subheadline}
                    </p>
                </div>

                {/* Features grid */}
                <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 md:gap-6">
                    {team.features.map((feature, index) => {
                        const Icon = featureIcons[index] || Users01;

                        return (
                            <div
                                key={feature}
                                className="flex items-center gap-4 rounded-xl bg-brand-800/50 p-4 transition-colors hover:bg-brand-800 md:p-5"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-brand-200">
                                    <Icon className="size-5" />
                                </div>
                                <span className="text-md font-medium text-white">
                                    {feature}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
