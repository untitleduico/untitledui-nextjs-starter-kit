"use client";

import { Play, File06, CheckSquare } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const roleIcons = {
    SESSIONS: Play,
    DOCS: File06,
    "TO-DOS": CheckSquare,
} as const;

interface FeaturesSectionProps {
    className?: string;
}

export const FeaturesSection = ({ className }: FeaturesSectionProps) => {
    const { features } = siteContent;

    return (
        <section id="features" className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-16 text-center md:mb-20">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wide text-brand-400">
                        {features.sectionLabel}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                        {features.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        {features.subheadline}
                    </p>
                </div>

                {/* Feature Cards - Alternating Layout */}
                <div className="space-y-12 md:space-y-16">
                    {features.items.map((feature, index) => {
                        const Icon = roleIcons[feature.role as keyof typeof roleIcons] || Play;
                        const isReversed = index % 2 === 1;

                        return (
                            <div
                                key={feature.title}
                                className={cx(
                                    "grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16",
                                    isReversed && "md:[direction:rtl] md:[&>*]:[direction:ltr]"
                                )}
                            >
                                {/* Text Content */}
                                <div>
                                    {/* Role tag */}
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-900/50 px-3 py-1.5">
                                        <Icon className="size-4 text-brand-400" />
                                        <span className="font-mono text-xs uppercase tracking-wide text-brand-400">
                                            {feature.role}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mb-6 text-lg text-gray-400">
                                        {feature.description}
                                    </p>

                                    {/* Highlights */}
                                    {feature.highlights && (
                                        <ul className="space-y-3">
                                            {feature.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex items-center gap-3 text-md text-gray-300"
                                                >
                                                    <div className="flex size-5 items-center justify-center rounded-full bg-brand-900">
                                                        <div className="size-2 rounded-full bg-brand-400" />
                                                    </div>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Visual Card */}
                                <div className="card-swiss overflow-hidden shadow-lg">
                                    {/* Card Header */}
                                    <div className="flex items-center gap-3 border-b border-gray-800 bg-gray-900/50 px-5 py-3">
                                        <div className="flex gap-1.5">
                                            <div className="size-3 rounded-full bg-gray-600" />
                                            <div className="size-3 rounded-full bg-gray-600" />
                                            <div className="size-3 rounded-full bg-gray-600" />
                                        </div>
                                        <span className="font-mono text-xs text-gray-500">
                                            mitable
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 md:p-6">
                                        {/* Quote/Output Display */}
                                        <div className="mb-4 rounded-lg bg-brand-950/50 p-4">
                                            <p className="font-mono text-sm text-brand-400">
                                                {feature.quote}
                                            </p>
                                        </div>

                                        {/* Timeline Bar Visualization */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-xs text-gray-500">SESSION ACTIVITY</span>
                                                <span className="font-mono text-xs text-gray-500">TODAY</span>
                                            </div>
                                            <div className="flex h-3 gap-1 overflow-hidden rounded-full">
                                                <div className="h-full w-[45%] rounded-full bg-brand-500" />
                                                <div className="h-full w-[20%] rounded-full bg-gray-700" />
                                                <div className="h-full w-[25%] rounded-full bg-brand-700" />
                                                <div className="h-full w-[10%] rounded-full bg-gray-700" />
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2 rounded-full bg-brand-400" />
                                                    <span className="font-mono text-xs text-gray-400">Deep Work</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2 rounded-full bg-gray-600" />
                                                    <span className="font-mono text-xs text-gray-400">Comms</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
