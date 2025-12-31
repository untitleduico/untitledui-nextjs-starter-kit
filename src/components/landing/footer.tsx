"use client";

import { MitableLogo } from "@/components/foundations/logo/mitable-logo";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const footerLinks = {
    product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Download", href: "#download" },
        { label: "Changelog", href: "#changelog" },
    ],
    company: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" },
    ],
    resources: [
        { label: "Documentation", href: "#docs" },
        { label: "Help Center", href: "#help" },
        { label: "Contact", href: "#contact" },
        { label: "Status", href: "#status" },
    ],
    legal: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
        { label: "Security", href: "#security" },
        { label: "Cookies", href: "#cookies" },
    ],
};

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a
        href={href}
        aria-label={label}
        className="flex size-10 items-center justify-center rounded-lg text-fg-quaternary transition hover:bg-primary_hover hover:text-fg-tertiary"
    >
        {children}
    </a>
);

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={cx("bg-primary", className)}>
            <div className="mx-auto max-w-container px-4 py-12 md:px-8 md:py-16">
                {/* Main footer content */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo and description */}
                    <div className="lg:col-span-2">
                        <MitableLogo className="mb-4" />
                        <p className="mb-6 max-w-xs text-md text-tertiary">
                            Your work, documented automatically. Never forget what you worked on.
                        </p>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-tertiary">Product</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Button color="link-gray" size="md" href={link.href}>
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-tertiary">Company</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Button color="link-gray" size="md" href={link.href}>
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-tertiary">Resources</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Button color="link-gray" size="md" href={link.href}>
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-tertiary">Legal</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Button color="link-gray" size="md" href={link.href}>
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary pt-8 md:flex-row">
                    <p className="text-md text-tertiary">
                        &copy; {new Date().getFullYear()} Mitable. All rights reserved.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        <SocialIcon href="https://twitter.com" label="Twitter">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://github.com" label="GitHub">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://discord.com" label="Discord">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};
