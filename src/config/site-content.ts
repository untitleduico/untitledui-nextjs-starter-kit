/**
 * Centralized content configuration for the Mitable website.
 * Edit this file to update text across the entire site.
 */

export const siteContent = {
    brand: {
        name: "Mitable",
        tagline: "Your work, documented automatically",
        description:
            "Mitable watches your screen during work sessions, generates AI summaries, creates process docs, and builds smart to-do lists.",
    },

    hero: {
        badge: "Now in Private Beta",
        headline: "Your work, documented automatically",
        subheadline:
            "Mitable watches your screen during work sessions, generates AI summaries, creates process docs, and builds smart to-do lists. Never scramble for standups or forget to document a process again.",
        primaryCta: "Download for macOS",
        secondaryCta: "Watch Demo",
    },

    logoMarquee: {
        heading: "Trusted by teams at innovative companies",
    },

    problems: {
        headline: "Sound familiar?",
        subheadline: "You're not alone. Knowledge workers waste hours every week on work about work.",
        items: [
            {
                title: "Manual work logging is tedious",
                description:
                    "Standups, timesheets, and progress updates require manual recall that interrupts your flow.",
            },
            {
                title: "Process documentation is neglected",
                description:
                    '"I\'ll document this later" never happens. Tribal knowledge stays locked in your head.',
            },
            {
                title: "To-dos slip through the cracks",
                description:
                    "Tasks noticed while working get forgotten. Context from unfinished work disappears.",
            },
            {
                title: "Context switching amnesia",
                description:
                    '"What was I working on before lunch?" You lose momentum every time you return to work.',
            },
        ],
    },

    features: {
        sectionLabel: "Features",
        headline: "Everything you need to stay on top of your work",
        subheadline:
            "From session logs to process docs to smart to-dos, Mitable captures and organizes your work automatically so you can focus on what matters.",
        items: [
            {
                title: "AI Session Summaries",
                description:
                    "Get instant summaries of what you worked on. Never scramble for standups or forget context after a break.",
                highlights: [
                    "Automatic activity detection",
                    "Key decisions captured",
                    "Exportable to Slack, Notion, and more",
                ],
            },
            {
                title: "Auto-Generated SOPs",
                description:
                    "Record any task and get step-by-step documentation with screenshots. Perfect for onboarding and handoffs.",
                highlights: [
                    "Screenshots at each step",
                    "Editable and shareable",
                    "Version control built-in",
                ],
            },
            {
                title: "Smart To-Do Detection",
                description:
                    "AI detects unfinished tasks, open tickets, and pending reviews from your screen activity.",
                highlights: [
                    "Automatic task extraction",
                    "Priority suggestions",
                    "Integration with task managers",
                ],
            },
        ],
    },

    howItWorks: {
        sectionLabel: "How It Works",
        headline: "Four simple steps to automatic documentation",
        subheadline: "No complicated setup. No learning curve. Just start a session and let Mitable do the rest.",
        steps: [
            {
                step: "01",
                title: "Start a Session",
                description:
                    "Click start in the WatchPill and select which windows to watch. Set an optional goal for better summaries.",
            },
            {
                step: "02",
                title: "Work Normally",
                description:
                    "Mitable quietly observes in the background. No interruptions, no manual logging required.",
            },
            {
                step: "03",
                title: "AI Processing",
                description:
                    "When you stop, AI analyzes your session to extract key activities, decisions, and action items.",
            },
            {
                step: "04",
                title: "Get Results",
                description:
                    "Session summaries, process docs, and detected to-dos are ready. Review, edit, and share with your team.",
            },
        ],
    },

    platforms: {
        headline: "Works everywhere you work",
        subheadline: "No browser extensions. No plugins required. Mitable watches your actual desktop.",
        items: ["VS Code", "Chrome", "Slack", "Notion", "Linear", "Figma", "GitHub", "Terminal"],
    },

    privacy: {
        sectionLabel: "Privacy",
        headline: "Privacy-first by design",
        subheadline: "Your data stays yours. Always. Mitable is built for you, not for your manager to spy on you.",
        features: [
            {
                title: "Local-first storage",
                description: "Your data stays on your device by default. Only sync to cloud if you choose to.",
            },
            {
                title: "You control capture",
                description:
                    "User-initiated sessions, not surveillance. Pause or stop anytime with a single click.",
            },
            {
                title: "App blocklist",
                description:
                    "Exclude sensitive apps like banking, passwords, and personal messaging automatically.",
            },
            {
                title: "Encrypted at rest",
                description: "All captured data is encrypted on your device. Your work stays private and secure.",
            },
        ],
    },

    pricing: {
        sectionLabel: "Pricing",
        headline: "Simple, transparent pricing",
        subheadline: "Start free, upgrade when you need more. No hidden fees, cancel anytime.",
        tiers: [
            {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for trying out Mitable",
                features: [
                    "3 sessions per day",
                    "Local storage only",
                    "Basic AI summaries",
                    "To-do detection",
                    "Community support",
                ],
                cta: "Get Started",
                highlighted: false,
            },
            {
                name: "Pro",
                price: "$12",
                period: "/month",
                description: "For power users and professionals",
                features: [
                    "Unlimited sessions",
                    "Cloud sync & backup",
                    "Slack & Notion export",
                    "Advanced AI summaries",
                    "Process doc generation",
                    "Priority support",
                ],
                cta: "Start Free Trial",
                highlighted: true,
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For teams and organizations",
                features: [
                    "Everything in Pro",
                    "Team workspaces",
                    "Admin controls & analytics",
                    "SSO integration",
                    "On-premise deployment",
                    "Dedicated support",
                ],
                cta: "Contact Sales",
                highlighted: false,
            },
        ],
    },

    cta: {
        headline: "Ready to stop losing context?",
        subheadline: "Join the private beta and never forget what you worked on again. Free to get started.",
        primaryCta: "Download for macOS",
        secondaryCta: "Learn More",
        trustIndicators: ["Free to start", "No credit card required", "Cancel anytime"],
    },

    footer: {
        description: "AI-powered documentation for knowledge workers. Your work, documented automatically.",
        copyright: `© ${new Date().getFullYear()} Mitable. All rights reserved.`,
        links: {
            product: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Download", href: "#download" },
                { label: "Changelog", href: "/changelog" },
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
        },
        social: {
            twitter: "https://twitter.com/mitable",
            github: "https://github.com/mitable",
            linkedin: "https://linkedin.com/company/mitable",
        },
    },
};

export type SiteContent = typeof siteContent;
