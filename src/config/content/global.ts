/**
 * mitable.ai (Global) content configuration.
 * Target: Individual professionals
 * Positioning: Personal productivity journal
 * Key Message: "Your AI work journal"
 * App Default: Session-based (start/stop)
 */

import { baseContent } from "./base";

export const globalContent = {
    ...baseContent,

    brand: {
        ...baseContent.brand,
        tagline: "Granola for everything else you do on a computer.",
        description: "Mitable watches your screen, automating the boring bits of work so you can focus on the fun stuff.",
    },

    hero: {
        badge: "The Memory Layer for Modern Work",
        headline: "your AI work journal",
        headlineAccent: "that writes itself",
        subheadline: "Mitable automatically turns your on-screen work into documents and team updates",
        tagline: "> GRANOLA FOR EVERYTHING ELSE YOU DO ON A COMPUTER",
        primaryCta: "Download",
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

    problems: {
        headline: "Sound familiar?",
        subheadline: "These productivity killers cost you hours every week.",
        items: [
            {
                title: "Lost context",
                description: "You finish a task, get interrupted, and forget what you were doing. The mental overhead of context switching is exhausting.",
            },
            {
                title: "Missing documentation",
                description: "You solve a problem, move on, and three months later can't remember how you did it. Institutional knowledge walks out the door.",
            },
            {
                title: "Scattered notes",
                description: "Your work is fragmented across apps, tabs, and scratch files. Finding what you need takes longer than doing it again.",
            },
            {
                title: "Invisible progress",
                description: "You worked hard all week but can't articulate what you accomplished. Status updates become guesswork.",
            },
        ],
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
        subheadline: "Start a session. Do the work. Get the summary. No learning curve. No interruptions.",
        items: [
            {
                title: "Intelligent Sessions",
                role: "SESSIONS",
                description: "Mitable captures real work as it happens.",
                quote: "Session captured: 2h 15m of deep work across 4 apps.",
                highlights: ["One-click session start", "Automatic app and window detection", "AI-generated session summaries"],
            },
            {
                title: "Instant Documentation",
                role: "DOCS",
                description: "Never start from a blank page again.",
                quote: "Draft ready: API Migration Guide based on your Figma → Code session.",
                highlights: ["Proactively identifies documentation opportunities", "Automatically generates SOPs, reports, knowledge articles, and more", "Export docs to Notion and Google Drive"],
            },
        ],
    },

    platforms: {
        headline: "Works everywhere you work",
        subheadline: "No browser extensions. No plugins required. Mitable watches your actual desktop.",
        items: baseContent.platforms.items,
    },

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
        sectionLabel: "Cross-App Understanding",
        headline: "We go beyond the browser",
        subheadline: "Mitable understands work across your entire desktop including IDEs, desktop apps, and any other windows you allow.",
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
        subheadline: "Enterprise-grade security, built from the ground up.",
        features: [
            {
                icon: "lock",
                title: "Local Storage",
                description: "Your data stays on your device by default. Nothing leaves your machine without your say-so.",
            },
            {
                icon: "eye-off",
                title: "App Blocklist",
                description: "Block any app or window from being watched. Banking, messaging, whatever you want.",
            },
            {
                icon: "trash",
                title: "Auto-Deletion",
                description: "Set retention periods. Data expires automatically. You stay in control.",
            },
            {
                icon: "shield",
                title: "PII Redaction",
                description: "Automatically blocks sensitive data from summaries and docs.",
            },
        ],
    },

    pricing: {
        sectionLabel: "Pricing",
        headline: "Your focus is priceless.",
        subheadline: "Start free, upgrade when you need more.",
        tiers: [
            {
                name: "Free",
                price: "$0",
                period: "",
                description: "Get started",
                features: ["5 Sessions/month", "Local storage", "Smart summaries", "24/7 Access to Founders"],
                cta: "Get Started",
                highlighted: false,
            },
            {
                name: "Pro",
                price: "$12",
                period: "/month",
                description: "For serious makers",
                features: ["Everything in Free", "Unlimited sessions", "Doc & artefact export", "30-day history", "Priority support", "24/7 Access to Founders"],
                cta: "Start Free Trial",
                highlighted: true,
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For teams",
                features: ["Everything in Pro", "Team workspace", "Shared docs & artefacts", "SSO integration", "Dedicated support", "24/7 Access to Founders"],
                cta: "Contact Sales",
                highlighted: false,
            },
        ],
    },

    cta: {
        headline: "Your work, documented automatically.",
        subheadline: "Join teams across the world using Mitable.",
        primaryCta: "Download",
        secondaryCta: "Learn More",
        trustIndicators: ["Free to start", "No credit card", "Cancel anytime"],
    },

    footer: {
        ...baseContent.footer,
        tagline: "The work journal that writes itself.",
        description: "",
    },
};

export type GlobalContent = typeof globalContent;
