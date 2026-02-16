/**
 * mitable.ng (Nigeria) content configuration.
 * Target: Managers, teams, enterprises
 * Positioning: Accountability & performance tool
 * Key Message: "See what your team accomplished"
 * App Default: Always-on (continuous tracking)
 */

import { baseContent } from "./base";

export const ngContent = {
    ...baseContent,

    brand: {
        ...baseContent.brand,
        tagline: "See what your team accomplished today.",
        description: "Mitable runs quietly in the background, capturing work as it happens. Get daily summaries of what everyone's been working on.",
    },

    hero: {
        badge: "Performance Visibility for Modern Teams",
        headline: "Know what your team",
        headlineAccent: "accomplished today",
        subheadline: "Mitable runs quietly in the background, capturing work as it happens. Get daily summaries of what everyone's been working on.",
        tagline: "> ACCOUNTABILITY WITHOUT THE ADMIN WORK",
        primaryCta: "Get Started",
        transformation: {
            rawInput: {
                title: "Team Activity",
                items: ["8 developers online", "4 in meetings", "12 PRs pending"],
            },
            smartOutput: {
                title: "Daily Summary",
                items: ["14 tickets resolved", "3 features shipped", "2 docs updated"],
            },
        },
        briefing: {
            greeting: "Good Morning, Manager.",
            status: "Here's what your team accomplished yesterday:",
            items: [
                { type: "completed", text: "John: Finished payment integration (4.5 hrs)" },
                { type: "progress", text: "Sarah: 80% done with dashboard redesign" },
                { type: "flagged", text: "David: Low activity detected - 2.1 hrs logged" },
            ],
            actions: ["View Full Report", "Send Feedback"],
        },
    },

    logoMarquee: {
        heading: "Trusted by teams across Nigeria:",
    },

    problems: {
        headline: "Managing remote teams is hard.",
        subheadline: "These visibility gaps are costing your business every day.",
        items: [
            {
                title: "No visibility",
                description: "You ask for updates but never know who's actually working. Without real data, you're managing blind.",
            },
            {
                title: "Wasted time on check-ins",
                description: "Daily standups, progress reports, status meetings — you spend more time asking for updates than getting work done.",
            },
            {
                title: "Accountability gaps",
                description: "Some team members work 8+ hours, others barely 3. Without tracking, underperformers fly under the radar.",
            },
            {
                title: "Unclear productivity",
                description: "You're paying salaries but can't measure output. Is your team investment paying off?",
            },
        ],
    },

    flowComparison: {
        headline: "Stop chasing status updates.",
        subheadline: "Get automatic visibility into what your team is working on.",
        without: {
            title: "WITHOUT MITABLE",
            steps: [
                { text: "Morning standup", type: "stop" },
                { text: "Ask for updates", type: "stop" },
                { text: "Chase progress reports", type: "stop" },
                { text: "Compile weekly summary", type: "stop" },
                { text: "Guess who's productive", type: "stop" },
                { text: "Hope for honesty", type: "stop" },
            ],
        },
        with: {
            title: "WITH MITABLE",
            steps: [
                { text: "Open dashboard", type: "work" },
                { text: "See everything", type: "work" },
            ],
            tagline: "Real-time visibility, zero interruptions.",
        },
    },

    useCases: {
        sectionLabel: "Built For",
        headline: "Built for managers.",
        subheadline: "Whether you're leading developers, designers, or operations — Mitable gives you the visibility you need.",
        items: [
            {
                icon: "users",
                title: "Team Leads",
                question: '"What did my team do today?"',
                value: "Daily summaries showing apps used, time spent, and work completed.",
            },
            {
                icon: "briefcase",
                title: "HR & Operations",
                question: '"Who needs support?"',
                value: "Identify underperformers early and provide timely intervention.",
            },
            {
                icon: "building",
                title: "Executives",
                question: '"Is my investment paying off?"',
                value: "Department-wide productivity metrics and trend analysis.",
            },
        ],
    },

    features: {
        sectionLabel: "Capabilities",
        headline: "Complete visibility. Zero friction.",
        subheadline: "Mitable runs automatically in the background. No manual check-ins. No forgotten timesheets.",
        items: [
            {
                title: "Always-On Tracking",
                role: "MONITORING",
                description: "Continuous work capture from the moment employees log in.",
                quote: "Today's summary: 7h 45m active across 6 apps. Top: VS Code (3h 20m)",
                highlights: ["Automatic start on login", "Real-time activity monitoring", "Idle time detection"],
            },
            {
                title: "Manager Dashboard",
                role: "INSIGHTS",
                description: "See your entire team's productivity at a glance.",
                quote: "Team productivity up 23% this week. 4 members exceeded targets.",
                highlights: ["Individual and team summaries", "App usage breakdown", "Comparative performance metrics"],
            },
            {
                title: "Daily Summaries",
                role: "REPORTS",
                description: "Automatic end-of-day reports sent to managers.",
                quote: "Daily report ready: 8 team members, 47h total logged, 12 deliverables.",
                highlights: ["Automated daily/weekly reports", "Flagging of low activity", "Export to Excel and PDF"],
            },
        ],
    },

    platforms: {
        headline: "Works everywhere your team works",
        subheadline: "Monitor activity across all desktop applications. No plugins needed.",
        items: baseContent.platforms.items,
    },

    howItWorks: {
        sectionLabel: "How It Works",
        headline: "Setup once, monitor always",
        subheadline: "Deploy to your team in minutes. Get visibility immediately.",
        steps: [
            {
                step: "01",
                title: "Install on Team Devices",
                description: "Quick installation via IT deployment or employee self-install.",
            },
            {
                step: "02",
                title: "Automatic Tracking Begins",
                description: "Mitable starts capturing work automatically. No employee action needed.",
            },
            {
                step: "03",
                title: "View Manager Dashboard",
                description: "See real-time activity and daily summaries for your entire team.",
            },
            {
                step: "04",
                title: "Get Daily Reports",
                description: "Receive automated summaries in your inbox every morning.",
            },
        ],
    },

    timeline: {
        sectionLabel: "Team Activity View",
        headline: "See who's working on what",
        subheadline: "Real-time visibility into your team's activities across all applications.",
        sessions: [
            { time: "09:00", app: "VS Code", label: "Development", duration: "3h 20m", type: "focus" },
            { time: "12:20", app: "Slack", label: "Communication", duration: "45m", type: "comms" },
            { time: "13:05", app: "Figma", label: "Design Review", duration: "1h 15m", type: "focus" },
            { time: "14:20", app: "Zoom", label: "Client Call", duration: "1h", type: "comms" },
        ],
        expandedSession: {
            app: "VS Code",
            details: ["Active coding: 2h 45m", "Files modified: 12", "Commits: 3"],
            action: "View Detailed Activity Log",
        },
    },

    team: {
        sectionLabel: "Team Management",
        headline: "Your team, fully visible.",
        headlineAccent: "No more guessing.",
        subheadline: "Real-time insights into productivity, accountability, and performance.",
        features: ["Real-time activity monitoring", "Automated attendance tracking", "Performance benchmarking", "Comprehensive audit trails"],
    },

    privacy: {
        sectionLabel: "Compliance",
        headline: "Enterprise-grade oversight.",
        subheadline: "Built for accountability while respecting local regulations.",
        features: [
            {
                icon: "shield",
                title: "Centralized Control",
                description: "IT admins control what's monitored. Employees see exactly what's being tracked.",
            },
            {
                icon: "lock",
                title: "Secure Storage",
                description: "All data encrypted and stored securely. Compliant with data protection standards.",
            },
            {
                icon: "clock",
                title: "Retention Policies",
                description: "Customizable data retention periods to meet your compliance requirements.",
            },
            {
                icon: "file-text",
                title: "Audit Trails",
                description: "Complete logs of all monitoring activities for compliance and HR records.",
            },
        ],
    },

    pricing: {
        sectionLabel: "Pricing",
        headline: "Invest in visibility.",
        subheadline: "Transparent pricing. No hidden costs. Pay per seat.",
        tiers: [
            {
                name: "Team",
                price: "₦5,000",
                period: "/user/month",
                description: "For small teams",
                features: ["Up to 10 users", "Daily activity summaries", "Basic app tracking", "Email reports", "Email support"],
                cta: "Start Free Trial",
                highlighted: false,
            },
            {
                name: "Business",
                price: "₦8,000",
                period: "/user/month",
                description: "For growing companies",
                features: ["Up to 50 users", "Real-time dashboard", "Advanced analytics", "Screenshot capture", "Priority support", "API access"],
                cta: "Start Free Trial",
                highlighted: true,
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: ["Unlimited users", "Custom integrations", "On-premise option", "SSO & SCIM", "Dedicated success manager", "SLA guarantee"],
                cta: "Contact Sales",
                highlighted: false,
            },
        ],
    },

    cta: {
        headline: "See what your team accomplished today.",
        subheadline: "Join hundreds of Nigerian companies using Mitable for performance visibility.",
        primaryCta: "Get Started",
        secondaryCta: "Book a Demo",
        trustIndicators: ["14-day free trial", "No credit card required", "Deploy in minutes"],
    },

    footer: {
        ...baseContent.footer,
        tagline: "Performance visibility for modern teams.",
        description: "",
    },
};

export type NgContent = typeof ngContent;
