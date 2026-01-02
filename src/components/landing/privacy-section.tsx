"use client";

import { Lock01, EyeOff, Trash01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const iconMap = {
    lock: Lock01,
    "eye-off": EyeOff,
    trash: Trash01,
} as const;

interface PrivacySectionProps {
    className?: string;
}

export const PrivacySection = ({ className }: PrivacySectionProps) => {
    const { privacy } = siteContent;

    return (
        <section className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-400">
                        {privacy.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {privacy.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {privacy.subheadline}
                    </p>
                </div>

                {/* Privacy features - Minimalist icon grid */}
                <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3 md:gap-8">
                    {privacy.features.map((feature) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Lock01;

                        return (
                            <div
                                key={feature.title}
                                className="group flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-gray-800 text-brand-400 transition-all group-hover:bg-brand-600 group-hover:text-white">
                                    <Icon className="size-7" />
                                </div>

                                {/* Title - mono uppercase */}
                                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wide text-white">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-md text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
