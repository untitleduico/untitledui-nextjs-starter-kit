"use client";

import { Shield01, Eye, Lock01, Server01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";

const privacyFeatures = [
    {
        icon: Server01,
        title: "Local-first storage",
        description: "Your data stays on your device by default. Only sync to cloud if you choose to.",
    },
    {
        icon: Eye,
        title: "You control capture",
        description: "User-initiated sessions, not surveillance. Pause or stop anytime with a single click.",
    },
    {
        icon: Shield01,
        title: "App blocklist",
        description: "Exclude sensitive apps like banking, passwords, and personal messaging automatically.",
    },
    {
        icon: Lock01,
        title: "Encrypted at rest",
        description: "All captured data is encrypted on your device. Your work stays private and secure.",
    },
];

interface PrivacySectionProps {
    className?: string;
}

export const PrivacySection = ({ className }: PrivacySectionProps) => {
    return (
        <section className={cx("bg-brand-section", className)}>
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <p className="mb-3 text-sm font-semibold text-brand-200">Privacy</p>
                    <h2 className="mb-4 text-display-xs font-semibold tracking-tight text-white md:text-display-sm">
                        Privacy-first by design
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-brand-200">
                        Your data stays yours. Always. Mitable is built for you, not for your manager to spy on you.
                    </p>
                </div>

                {/* Privacy features grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {privacyFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 md:p-6"
                        >
                            <FeaturedIcon
                                icon={feature.icon}
                                size="md"
                                theme="dark"
                                color="brand"
                                className="shrink-0"
                            />
                            <div>
                                <h3 className="mb-1 text-md font-semibold text-white md:text-lg">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-brand-200 md:text-md">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
