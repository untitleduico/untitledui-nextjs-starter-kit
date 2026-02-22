"use client";

import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

// Platform icons as SVG components
const VSCodeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <path d="M74.72 3.29L52.94 24.61.42 65.52a2.89 2.89 0 0 0-.42 4.08 2.89 2.89 0 0 0 3.29.84l49.67-24.41 21.46 21.46a6.2 6.2 0 0 0 4.4 1.82 6.2 6.2 0 0 0 6.2-6.2V9.49a6.2 6.2 0 0 0-6.2-6.2 6.2 6.2 0 0 0-4.1 1.56zM31.58 50L52.94 29.06v41.88L31.58 50z" />
    </svg>
);

const ChromeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" />
        <circle cx="50" cy="50" r="18" />
        <path d="M50 32L76.2 77.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M50 32L23.8 77.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M14 50H86" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

/* Microsoft Teams-style icon (T in rounded box) */
const TeamsIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 2h14v14H5V5zm3 2h8v2H8V7zm1.5 1.5v7h2v-7h-2z" />
    </svg>
);

const NotionIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0038 19.0029C24.0708 22.242 25.4475 22.0098 31.949 21.5453L79.494 18.5385C80.6365 18.5385 79.726 17.3949 79.262 17.1627L70.7715 11.0956C69.1628 9.72039 67.0855 8.11281 62.7845 8.57721L17.225 12.0481C15.3835 12.2803 14.9195 13.1917 15.6155 13.8709L20.0038 19.0029ZM24.303 29.9057V87.6217C24.303 91.0926 25.9115 92.235 29.979 91.9028L82.335 89.1284C86.404 88.7964 86.868 86.2422 86.868 83.467V26.2165C86.868 23.4422 85.7265 21.9344 83.4165 22.1666L28.4705 25.1718C26.0298 25.404 24.303 26.7792 24.303 29.9057Z"
        />
    </svg>
);

const LinearIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5765C17.5044 92.5576 7.42767 79.5693 1.22541 61.5228zM.00189459 46.8891c-.01764375.2833.00189459.567.05765189.8504.715688 18.6795 9.65179 35.5805 24.0438 46.8373C48.1761 97.6454 55.2593 98.0352 54.6839 95.0358L.00189459 46.8891zm99.9981-3.2155l-81.9955 4.8987C.0269 59.2326-.0262 60.5556.56917 60.4882L95.0792 99.4655c.7145.3002 1.5228-.317 1.3702-1.0473-4.2158-20.0754-3.2154-40.0503 3.5497-54.751z" />
    </svg>
);

const FigmaIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 38 57" fill="currentColor">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
    </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 98 96" fill="currentColor">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        />
    </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
);

const platforms = [
    { name: "VS Code", icon: VSCodeIcon },
    { name: "Chrome", icon: ChromeIcon },
    { name: "Teams", icon: TeamsIcon },
    { name: "Notion", icon: NotionIcon },
    { name: "Linear", icon: LinearIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Terminal", icon: TerminalIcon },
];

interface PlatformsSectionProps {
    className?: string;
}

export const PlatformsSection = ({ className }: PlatformsSectionProps) => {
    return (
        <section className={cx("bg-secondary", className)}>
            <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
                {/* Section header */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="mb-4 text-display-xs font-semibold tracking-tight text-primary md:text-display-sm">
                        {siteContent.platforms.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-secondary">
                        {siteContent.platforms.subheadline}
                    </p>
                </div>

                {/* Platform icons grid */}
                <div className="mx-auto grid max-w-4xl grid-cols-4 gap-8 md:grid-cols-8 md:gap-12">
                    {platforms.map((platform) => (
                        <div
                            key={platform.name}
                            className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
                        >
                            <div className="flex size-14 items-center justify-center rounded-xl bg-primary p-3 shadow-sm ring-1 ring-secondary_alt transition-shadow group-hover:shadow-md md:size-16">
                                <platform.icon className="size-full text-quaternary transition-colors group-hover:text-primary" />
                            </div>
                            <span className="text-xs font-medium text-tertiary md:text-sm">{platform.name}</span>
                        </div>
                    ))}
                </div>

                {/* Emphasis text */}
                <p className="mt-12 text-center text-sm font-medium text-tertiary md:mt-16">
                    No browser extensions. No plugins. Just native desktop capture.
                </p>
            </div>
        </section>
    );
};
