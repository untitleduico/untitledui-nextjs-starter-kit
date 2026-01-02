"use client";

import { MitableLogo } from "@/components/foundations/logo/mitable-logo";
import { cx } from "@/utils/cx";
import { siteContent } from "@/config/site-content";

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a
        href={href}
        aria-label={label}
        className="flex size-10 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-800 hover:text-white"
    >
        {children}
    </a>
);

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { footer } = siteContent;

    return (
        <footer className={cx("bg-ink", className)}>
            <div className="mx-auto max-w-container px-4 py-12 md:px-8 md:py-16">
                {/* Main footer content */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo and description */}
                    <div className="lg:col-span-2">
                        <MitableLogo className="mb-4 text-white" />
                        <p className="mb-4 font-display text-lg font-semibold text-white">
                            {footer.tagline}
                        </p>
                        <p className="max-w-xs text-md text-gray-400">
                            {footer.description}
                        </p>
                        {/* Platform badges */}
                        {footer.platforms && (
                            <div className="mt-4 flex gap-2">
                                {footer.platforms.map((platform) => (
                                    <span
                                        key={platform}
                                        className="rounded-full bg-gray-800 px-3 py-1 font-mono text-xs text-gray-400"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links columns */}
                    <div>
                        <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Product
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {footer.links.product.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-md text-gray-400 transition hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {footer.links.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-md text-gray-400 transition hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {footer.links.resources.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-md text-gray-400 transition hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Legal
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {footer.links.legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-md text-gray-400 transition hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
                    <p className="font-mono text-xs text-gray-500">{footer.copyright}</p>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        <SocialIcon href={footer.social.twitter} label="Twitter">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </SocialIcon>
                        <SocialIcon href={footer.social.github} label="GitHub">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon href={footer.social.linkedin} label="LinkedIn">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};
