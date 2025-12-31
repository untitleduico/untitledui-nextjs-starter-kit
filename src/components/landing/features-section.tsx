"use client";

import { File06, BookOpen01, CheckDone01, Check } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const featureIcons: Record<string, typeof File06> = {
    "AI Session Summaries": File06,
    "Auto-Generated SOPs": BookOpen01,
    "Smart To-Do Detection": CheckDone01,
};

interface FeaturesSectionProps {
    className?: string;
}

export const FeaturesSection = ({ className }: FeaturesSectionProps) => {
    const { features } = siteContent;

    return (
        <section id="features" className={cx("bg-secondary", className)}>
            <div className="mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-32">
                {/* Section header */}
                <div className="mb-16 text-center md:mb-20">
                    <p className="mb-3 text-sm font-semibold text-brand-secondary">
                        {features.sectionLabel}
                    </p>
                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        {features.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-secondary">
                        {features.subheadline}
                    </p>
                </div>

                {/* Features with alternating layouts */}
                <div className="space-y-20 md:space-y-28 lg:space-y-32">
                    {features.items.map((feature, index) => {
                        const Icon = featureIcons[feature.title] || File06;
                        const isReversed = index % 2 === 1;

                        return (
                            <div
                                key={feature.title}
                                className={cx(
                                    "flex flex-col items-center gap-10 lg:flex-row lg:gap-16",
                                    isReversed && "lg:flex-row-reverse"
                                )}
                            >
                                {/* Content side */}
                                <div className="flex-1 lg:max-w-lg">
                                    <FeaturedIcon
                                        icon={Icon}
                                        size="lg"
                                        theme="gradient"
                                        color="brand"
                                        className="mb-6"
                                    />

                                    <h3 className="mb-4 text-2xl font-semibold text-primary md:text-3xl">
                                        {feature.title}
                                    </h3>

                                    <p className="mb-6 text-lg text-secondary">
                                        {feature.description}
                                    </p>

                                    {/* Feature highlights */}
                                    {feature.highlights && (
                                        <ul className="space-y-3">
                                            {feature.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex items-center gap-3 text-md text-secondary"
                                                >
                                                    <Check className="size-5 shrink-0 text-success-500" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Mockup side */}
                                <div className="flex-1 w-full lg:max-w-xl">
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200/50 dark:bg-gray-800 dark:ring-gray-700/50">
                                        {/* Feature-specific mockup */}
                                        <FeatureMockup feature={feature.title} />
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

// Feature-specific mockup components
const FeatureMockup = ({ feature }: { feature: string }) => {
    switch (feature) {
        case "AI Session Summaries":
            return <SessionSummaryMockup />;
        case "Auto-Generated SOPs":
            return <SOPMockup />;
        case "Smart To-Do Detection":
            return <TodoMockup />;
        default:
            return <GenericMockup />;
    }
};

const SessionSummaryMockup = () => (
    <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
            <div className="size-10 rounded-lg bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                <File06 className="size-5 text-brand-600" />
            </div>
            <div>
                <div className="text-sm font-medium text-primary">Session Summary</div>
                <div className="text-xs text-tertiary">Today, 2:30 PM - 4:45 PM</div>
            </div>
        </div>
        <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
                <div className="mb-2 text-xs font-medium text-tertiary">Key Activities</div>
                <div className="space-y-2">
                    <div className="flex items-start gap-2">
                        <div className="mt-1.5 size-1.5 rounded-full bg-brand-500" />
                        <div className="h-3 flex-1 rounded bg-gray-200 dark:bg-gray-600" />
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="mt-1.5 size-1.5 rounded-full bg-brand-500" />
                        <div className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-600" />
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="mt-1.5 size-1.5 rounded-full bg-brand-500" />
                        <div className="h-3 w-3/4 rounded bg-gray-200 dark:bg-gray-600" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-brand-50 p-3 dark:bg-brand-900/30">
                    <div className="text-2xl font-semibold text-brand-600">2h 15m</div>
                    <div className="text-xs text-brand-600/70">Focus time</div>
                </div>
                <div className="rounded-lg bg-success-50 p-3 dark:bg-success-900/30">
                    <div className="text-2xl font-semibold text-success-600">12</div>
                    <div className="text-xs text-success-600/70">Tasks completed</div>
                </div>
            </div>
        </div>
    </div>
);

const SOPMockup = () => (
    <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                    <BookOpen01 className="size-5 text-brand-600" />
                </div>
                <div className="text-sm font-medium text-primary">Deploy to Production</div>
            </div>
            <div className="rounded-full bg-success-100 px-2.5 py-1 text-xs font-medium text-success-700 dark:bg-success-900/50 dark:text-success-400">
                Auto-generated
            </div>
        </div>
        <div className="space-y-3">
            {[1, 2, 3].map((step) => (
                <div key={step} className="flex gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-medium text-white">
                        {step}
                    </div>
                    <div className="flex-1">
                        <div className="mb-1 h-3 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
                        <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-600" />
                    </div>
                    <div className="size-12 rounded bg-gray-200 dark:bg-gray-600" />
                </div>
            ))}
        </div>
    </div>
);

const TodoMockup = () => (
    <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
            <div className="size-10 rounded-lg bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                <CheckDone01 className="size-5 text-brand-600" />
            </div>
            <div>
                <div className="text-sm font-medium text-primary">Detected Tasks</div>
                <div className="text-xs text-tertiary">3 new items from today</div>
            </div>
        </div>
        <div className="space-y-2">
            {[
                { priority: "high", checked: false },
                { priority: "medium", checked: false },
                { priority: "low", checked: true },
            ].map((task, i) => (
                <div
                    key={i}
                    className={cx(
                        "flex items-center gap-3 rounded-lg p-3",
                        task.checked ? "bg-gray-50 dark:bg-gray-700/30" : "bg-gray-50 dark:bg-gray-700/50"
                    )}
                >
                    <div
                        className={cx(
                            "size-5 rounded border-2 flex items-center justify-center",
                            task.checked
                                ? "border-success-500 bg-success-500"
                                : "border-gray-300 dark:border-gray-600"
                        )}
                    >
                        {task.checked && <Check className="size-3 text-white" />}
                    </div>
                    <div
                        className={cx(
                            "h-3 flex-1 rounded",
                            task.checked ? "bg-gray-300 dark:bg-gray-600" : "bg-gray-300 dark:bg-gray-500"
                        )}
                        style={{ width: `${70 + i * 10}%` }}
                    />
                    <div
                        className={cx(
                            "rounded-full px-2 py-0.5 text-xs font-medium",
                            task.priority === "high" && "bg-error-100 text-error-700 dark:bg-error-900/50 dark:text-error-400",
                            task.priority === "medium" && "bg-warning-100 text-warning-700 dark:bg-warning-900/50 dark:text-warning-400",
                            task.priority === "low" && "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                        )}
                    >
                        {task.priority}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const GenericMockup = () => (
    <div className="flex aspect-[4/3] items-center justify-center bg-gray-50 dark:bg-gray-700/50">
        <div className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm dark:bg-gray-800/80 dark:text-gray-400">
            Feature Preview
        </div>
    </div>
);
