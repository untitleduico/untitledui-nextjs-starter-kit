/**
 * Centralized content configuration for the Mitable website.
 * "Swiss Utility" design - Modernist Clarity. Precision. Tool-focused.
 */

export const siteContent = {
    brand: {
        name: "Mitable",
        tagline: "Granola for everything else you do on a computer.",
        description: "Mitable watches your screen, automating the boring bits of work so you can focus on the fun stuff.",
    },

    hero: {
        badge: "The Memory Layer for Modern Work",
        headline: "Stay in the flow.",
        headlineAccent: "Leave the chores to us.",
        subheadline: "Mitable watches your screen, automating the boring bits of work so you can focus on the fun stuff.",
        tagline: "> GRANOLA FOR EVERYTHING ELSE YOU DO ON A COMPUTER",
        primaryCta: "Download for Mac",
        secondaryCta: "Watch the Workflow",
        // Transformation visual content
        transformation: {
            rawInput: {
                title: "Raw Input",
                items: ["12 tabs open", "3 unread DMs", "Code uncommitted"],
            },
            smartOutput: {
                title: "Smart Output",
                items: ["Finalized Q3 Deck", "Sent 4 Client Emails", "Updated Brand Guide"],
            },
        },
        // Legacy briefing content for backwards compatibility
        briefing: {
            greeting: "Good Afternoon, Alex.",
            status: "While you were in flow (3h 15m), I took some notes:",
            items: [
                { type: "drafted", text: '"Q3 Migration Plan" based on your code.' },
                { type: "logged", text: "2 hours billed to Client X (Figma)." },
                { type: "reminder", text: "You left the staging server open." },
            ],
            actions: ["Review & Share", "Discard"],
        },
    },

    logoMarquee: {
        heading: "The memory layer for modern teams:",
    },

    flowComparison: {
        headline: "Context switching kills momentum.",
        subheadline: "Stay in the flow. We handle the chores.",
        without: {
            title: "WITHOUT MITABLE",
            steps: [
                { text: "Finish code", type: "work" },
                { text: "Switch to Notion", type: "stop" },
                { text: "Remember what changed", type: "stop" },
                { text: "Write documentation", type: "stop" },
                { text: "Switch to Jira", type: "stop" },
                { text: "Update ticket", type: "stop" },
            ],
        },
        with: {
            title: "WITH MITABLE",
            steps: [
                { text: "Finish code", type: "work" },
                { text: "Keep coding", type: "work" },
            ],
            tagline: "Mitable did the rest.",
        },
    },

    useCases: {
        sectionLabel: "Built For",
        headline: "Built for makers.",
        subheadline: "Whether you're designing, coding, or writing — Mitable captures the work you'd otherwise forget.",
        items: [
            {
                icon: "pen-tool",
                title: "Designers",
                question: '"Why did I choose this layout?"',
                value: "Auto-document design iterations with screenshots and context.",
            },
            {
                icon: "terminal",
                title: "Developers",
                question: '"How did I fix that bug?"',
                value: "Turn debugging sessions into searchable tech docs.",
            },
            {
                icon: "book",
                title: "Writers",
                question: '"Where did the day go?"',
                value: "Time attribution and progress tracking for creative work.",
            },
        ],
    },

    features: {
        sectionLabel: "Capabilities",
        headline: "From chaos to clarity.",
        subheadline: "Start a session. Do the work. Get the summary. No learning curve, no interruptions.",
        items: [
            {
                title: "Intelligent Sessions",
                role: "SESSIONS",
                description: "Start a session. Do the work. Get the summary.",
                quote: "Session captured: 2h 15m of deep work across 4 apps.",
                highlights: ["One-click session start", "Automatic app detection", "AI-powered summaries"],
            },
            {
                title: "Instant Documentation",
                role: "DOCS",
                description: "Never start from a blank page.",
                quote: "Draft ready: API Migration Guide based on your Figma → Code session.",
                highlights: ["Session-to-doc generation", "Step-by-step process capture", "Export to Notion, Markdown"],
            },
            {
                title: "Context-Aware To-Dos",
                role: "TO-DOS",
                description: "Catches open loops before they slip away.",
                quote: "Detected: Unsent email draft open for 2 hours.",
                highlights: ["Unfinished task detection", "Gentle reminders", "Priority suggestions"],
            },
        ],
    },

    // Legacy - kept for backwards compatibility with PlatformsSection
    platforms: {
        headline: "Works everywhere you work",
        subheadline: "No browser extensions. No plugins required. Mitable watches your actual desktop.",
        items: ["VS Code", "Chrome", "Slack", "Notion", "Linear", "Figma", "GitHub", "Terminal"],
    },

    // Legacy - kept for backwards compatibility with HowItWorksSection
    howItWorks: {
        sectionLabel: "How It Works",
        headline: "Four simple steps",
        subheadline: "No complicated setup. No learning curve. Just start a session and let Mitable do the rest.",
        steps: [
            {
                step: "01",
                title: "Start a Session",
                description: "Click start and select which windows to watch.",
            },
            {
                step: "02",
                title: "Work Normally",
                description: "Mitable observes quietly. No interruptions.",
            },
            {
                step: "03",
                title: "AI Processing",
                description: "When you stop, AI extracts key activities.",
            },
            {
                step: "04",
                title: "Get Results",
                description: "Summaries and to-dos, ready to review.",
            },
        ],
    },

    timeline: {
        sectionLabel: "Perfect Memory",
        headline: "Perfect memory. Zero effort.",
        subheadline: "Every session recorded, organized, searchable. Click any moment to see exactly what you were doing.",
        // Example timeline data with app categories
        sessions: [
            { time: "09:00", app: "VS Code", label: "Deep Work", duration: "2h 15m", type: "focus" },
            { time: "11:15", app: "Slack", label: "Comms", duration: "45m", type: "comms" },
            { time: "12:00", app: "Figma", label: "Design", duration: "1h 30m", type: "focus" },
            { time: "13:30", app: "Zoom", label: "Meeting", duration: "30m", type: "comms" },
        ],
        expandedSession: {
            app: "VS Code",
            details: ["Edited auth.ts (45 mins)", 'Browsed StackOverflow: "JWT Best Practices"'],
            action: "Generate How-To Doc From This Segment",
        },
    },

    // Team section stub (kept for backwards compatibility but not used in Swiss Utility design)
    team: {
        sectionLabel: "Team Sync",
        headline: "When everyone has an assistant,",
        headlineAccent: "the team stays in sync.",
        subheadline: "Shared docs, automated team updates, and transparent progress.",
        features: ["Automatic standup summaries", "Shared documentation library", "Team activity insights", "No surveillance, just support"],
    },

    privacy: {
        sectionLabel: "Privacy",
        headline: "Private by design.",
        subheadline: "We analyze pixels, we don't hoard them.",
        features: [
            {
                icon: "lock",
                title: "Local Storage",
                description: "Your data stays on your device by default.",
            },
            {
                icon: "eye-off",
                title: "App Blocklist",
                description: "Block any app or window from being watched.",
            },
            {
                icon: "trash",
                title: "Auto-Deletion",
                description: "Set retention periods. Data expires automatically.",
            },
        ],
    },

    pricing: {
        sectionLabel: "Pricing",
        headline: "Invest in your attention span.",
        subheadline: "Start free, upgrade when you need more.",
        tiers: [
            {
                name: "Free",
                price: "$0",
                period: "",
                description: "Get started",
                features: ["3 Sessions/day", "Local storage", "Smart to-dos", "Basic summaries"],
                cta: "Get Started",
                highlighted: false,
            },
            {
                name: "Pro",
                price: "$12",
                period: "/month",
                description: "For serious makers",
                features: ["Unlimited sessions", "Cloud sync", "Doc export", "30-day history", "Priority support"],
                cta: "Start Free Trial",
                highlighted: true,
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For teams",
                features: ["Team workspace", "Shared docs", "SSO integration", "On-premise option", "Dedicated support"],
                cta: "Contact Sales",
                highlighted: false,
            },
        ],
    },

    cta: {
        headline: "Your work, documented automatically.",
        subheadline: "Join the beta and never lose context again.",
        primaryCta: "Download for Mac",
        secondaryCta: "Learn More",
        trustIndicators: ["Free to start", "No credit card", "Cancel anytime"],
    },

    footer: {
        tagline: "Your work, documented automatically.",
        description: "The AI workspace companion for makers.",
        copyright: `© ${new Date().getFullYear()} Mitable Inc.`,
        links: {
            product: [
                { label: "Capabilities", href: "#features" },
                { label: "Timeline", href: "#timeline" },
                { label: "Pricing", href: "#pricing" },
                { label: "Download", href: "#download" },
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
        platforms: ["Mac", "Windows (Coming Soon)"],
    },

    // Navigation for header
    navigation: {
        links: [
            { label: "Product", href: "#features" },
            { label: "Pricing", href: "#pricing" },
        ],
        cta: "Get Mitable",
    },
};

export type SiteContent = typeof siteContent;
