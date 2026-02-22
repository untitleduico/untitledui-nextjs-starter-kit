/**
 * Shared constants used across all regional content.
 * Download links, footer, social links, navigation structure.
 */

// Single source of truth for version - update this when releasing
const MITABLE_VERSION = "0.1.30";
const R2_BASE = "https://pub-56941275957b42049f3bad9b4bf1daa9.r2.dev";

export const baseContent = {
    brand: {
        name: "Mitable",
    },

    downloads: {
        headline: "Download Mitable",
        subheadline: "Choose the right version for your platform.",
        builds: [
            {
                platform: "macOS (Apple Silicon)",
                description: "For M1, M2, M3, and M4 Macs",
                href: `${R2_BASE}/Mitable-${MITABLE_VERSION}-arm64.dmg`,
                icon: "apple" as const,
            },
            {
                platform: "macOS (Intel)",
                description: "For Intel-based Macs",
                href: `${R2_BASE}/Mitable-${MITABLE_VERSION}-x64.dmg`,
                icon: "apple" as const,
            },
            {
                platform: "Windows",
                description: "For Windows 10 and later",
                href: `${R2_BASE}/Mitable-${MITABLE_VERSION}-x64.exe`,
                icon: "windows" as const,
            },
        ],
    },

    footer: {
        copyright: `© ${new Date().getFullYear()} Mitable Inc.`,
        links: {
            product: [
                { label: "Capabilities", href: "#features" },
                { label: "Timeline", href: "#timeline" },
                { label: "Pricing", href: "#pricing" },
                { label: "Download", href: "/download" },
            ],
            company: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
            ],
            resources: [
                { label: "Documentation", href: "/docs" },
                { label: "Help Center", href: "/help" },
                { label: "API", href: "/api" },
                { label: "Status", href: "/status" },
            ],
            legal: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Security", href: "/security" },
            ],
            support: [
                { label: "Support", href: "#support" },
                { label: "FAQs", href: "#faqs" },
                { label: "Data and security", href: "/data-and-security.pdf" },
                { label: "Contact", href: "/contact" },
                { label: "Socials", href: "#socials" },
            ],
        },
        social: {
            twitter: "https://twitter.com/mitable",
            github: "https://github.com/mitable",
            linkedin: "https://linkedin.com/company/mitable",
        },
        platforms: ["Mac", "Windows"],
    },

    navigation: {
        links: [
            { label: "Product", href: "#features" },
            { label: "Pricing", href: "#pricing" },
        ],
        cta: "Download",
    },

    // Platforms list (shared across regions)
    platforms: {
        items: ["VS Code", "Chrome", "Teams", "Notion", "Linear", "Figma", "GitHub", "Terminal"],
    },
};

export type BaseContent = typeof baseContent;
