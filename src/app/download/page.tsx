import type { Metadata } from "next";
import { siteContent } from "@/config/site-content";
import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";

export const metadata: Metadata = {
    title: "Download Mitable",
    description: "Download Mitable for macOS (Apple Silicon & Intel) or Windows.",
};

/* ─── Platform icons ─── */
const AppleIcon = () => (
    <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

const WindowsIcon = () => (
    <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
);

const DownloadArrow = () => (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const iconMap = {
    apple: AppleIcon,
    windows: WindowsIcon,
} as const;

export default function DownloadPage() {
    const { downloads } = siteContent;

    return (
        <div className="flex min-h-dvh flex-col bg-ink">
            <MitableHeader />

            <main className="flex-1 pt-18 md:pt-20">
                <section className="relative overflow-hidden">
                    {/* Background glow */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: "800px",
                            height: "600px",
                            background:
                                "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.06) 0%, transparent 100%)",
                        }}
                    />

                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-36">
                        {/* Back link */}
                        <a
                            href="/"
                            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            Back to home
                        </a>

                        {/* Headline */}
                        <div className="mb-16 text-center">
                            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
                                {downloads.headline}
                            </h1>
                            <p className="mt-4 text-lg text-gray-400 md:text-xl">
                                {downloads.subheadline}
                            </p>
                        </div>

                        {/* Download cards */}
                        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {downloads.builds.map((build) => {
                                const Icon = iconMap[build.icon];
                                return (
                                    <div
                                        key={build.platform}
                                        className="group relative rounded-2xl border border-gray-800/60 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-700/80 hover:bg-gray-900/70"
                                    >
                                        {/* Icon */}
                                        <div className="mb-4 text-gray-300">
                                            <Icon />
                                        </div>

                                        {/* Platform name */}
                                        <h2 className="mb-1 text-lg font-semibold text-white">
                                            {build.platform}
                                        </h2>

                                        {/* Description */}
                                        <p className="mb-6 text-sm text-gray-400">
                                            {build.description}
                                        </p>

                                        {/* Download button */}
                                        <a
                                            href={build.href}
                                            className="inline-flex items-center gap-2 rounded-full bg-brand-solid px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand-solid_hover"
                                        >
                                            <DownloadArrow />
                                            Download
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Version note */}
                        <p className="mt-12 text-center font-mono text-xs text-gray-500">
                            Version 0.1.24 &middot;{" "}
                            <a href="/" className="underline underline-offset-2 transition-colors hover:text-gray-300">
                                Back to homepage
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
