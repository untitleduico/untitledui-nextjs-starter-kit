"use client";

import {
    ArrowUpRight,
    BarChartSquare02,
    Calendar,
    CheckDone01,
    DotsVertical,
    Edit04,
    FilterLines,
    Home01,
    LayersThree01,
    LifeBuoy01,
    PieChart03,
    Settings01,
    TrendUp01,
    UserPlus01,
    Users01,
    X,
} from "@untitledui/icons";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, BadgeWithIcon } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import type { NavItemType } from "@/components/application/app-navigation/config";

// --- Sidebar Config ---

const navItems: NavItemType[] = [
    { label: "Home", href: "/", icon: Home01 },
    { label: "Dashboard", href: "/dashboard", icon: BarChartSquare02 },
    { label: "Projects", href: "/projects", icon: LayersThree01 },
    {
        label: "Tasks",
        href: "/tasks",
        icon: CheckDone01,
        badge: (
            <span className="flex items-center justify-center rounded-full bg-utility-gray-100 px-1.5 py-0.5 text-xs font-medium text-utility-gray-700">
                8
            </span>
        ),
    },
    { label: "Reporting", href: "/reporting", icon: PieChart03 },
    { label: "Users", href: "/users", icon: Users01 },
];

const footerItems: NavItemType[] = [
    { label: "Support", href: "/support", icon: LifeBuoy01 },
    { label: "Settings", href: "/settings", icon: Settings01 },
];

const FeatureCard = () => (
    <div className="relative rounded-md border border-secondary bg-primary p-4">
        <button className="absolute top-3 right-3 text-fg-quaternary hover:text-fg-quaternary_hover">
            <X className="size-4" />
        </button>
        <div className="text-sm font-semibold text-secondary">New features available!</div>
        <p className="mt-1 text-sm text-tertiary">Check out the new dashboard view. Pages now load faster.</p>
        <div className="mt-3 flex gap-3">
            <Button color="link-gray" size="sm">
                Dismiss
            </Button>
            <Button color="link-color" size="sm">
                What&apos;s new?
            </Button>
        </div>
    </div>
);

// --- Side Metrics Data ---

const sideMetrics = [
    { label: "Total members", value: "4,862", change: "+9.2%" },
    { label: "Paid members", value: "2,671", change: "+6.6%" },
    { label: "Email open rate", value: "82%", change: "+8.1%" },
];

// --- Top Members Data ---

const topMembers = [
    { name: "Olivia Rhye", date: "Jan 2023", avatar: "https://i.pravatar.cc/64?img=1", online: true, active: true },
    { name: "Phoenix Baker", date: "Jan 2023", avatar: "https://i.pravatar.cc/64?img=2", online: true, active: false },
    { name: "Lana Steiner", date: "Feb 2023", avatar: "https://i.pravatar.cc/64?img=3", online: false, active: true },
    { name: "Demi Wilkinson", date: "Feb 2023", avatar: "https://i.pravatar.cc/64?img=4", online: true, active: false },
    { name: "Candice Wu", date: "Mar 2023", avatar: "https://i.pravatar.cc/64?img=5", online: false, active: true },
    { name: "Natali Craig", date: "Mar 2023", avatar: "https://i.pravatar.cc/64?img=6", online: true, active: false },
    { name: "Drew Cano", date: "Apr 2023", avatar: "https://i.pravatar.cc/64?img=7", online: true, active: true },
    { name: "Orlando Diggs", date: "Apr 2023", avatar: "https://i.pravatar.cc/64?img=8", online: false, active: false },
    { name: "Andi Lane", date: "May 2023", avatar: "https://i.pravatar.cc/64?img=9", online: true, active: false },
    { name: "Kate Morrison", date: "May 2023", avatar: "https://i.pravatar.cc/64?img=10", online: true, active: true },
];

// --- Blog Post Data ---

const blogPosts = [
    {
        image: "https://picsum.photos/seed/ux-review/600/400",
        author: "Olivia Rhye",
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        tags: ["Design", "Research", "Presentation"],
    },
    {
        image: "https://picsum.photos/seed/linear-101/600/400",
        author: "Phoenix Baker",
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        tags: ["Design", "Research"],
    },
];

// --- Chart Placeholder ---

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Values as $ amounts mapped to 0-30k range
const chartValues = [12000, 13500, 16500, 14400, 18000, 16500, 20100, 21600, 17400, 24000, 25500, 18880];
const yMax = 30000;

const ChartPlaceholder = () => {
    // Use a viewBox with nice round numbers; preserveAspectRatio will handle scaling
    const vW = 1000;
    const vH = 400;
    const padTop = 8;
    const chartH = vH - padTop;

    const pts = chartValues.map((v, i) => ({
        x: (i / (chartValues.length - 1)) * vW,
        y: padTop + chartH - (v / yMax) * chartH,
    }));

    // Build a smooth cubic bezier path through the points
    const buildPath = () => {
        let d = `M ${pts[0].x},${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
            const curr = pts[i];
            const next = pts[i + 1];
            const cpx = (curr.x + next.x) / 2;
            d += ` C ${cpx},${curr.y} ${cpx},${next.y} ${next.x},${next.y}`;
        }
        return d;
    };

    const linePath = buildPath();
    const areaPath = `${linePath} L ${pts[pts.length - 1].x},${vH} L ${pts[0].x},${vH} Z`;

    return (
        <div className="relative w-full">
            <div className="flex">
                <div className="flex w-10 shrink-0 flex-col justify-between py-0.5 pr-3 text-right text-xs text-tertiary" style={{ height: 220 }}>
                    <span>$30k</span>
                    <span>$20k</span>
                    <span>$10k</span>
                    <span>$0</span>
                </div>
                <div className="relative flex-1" style={{ height: 220 }}>
                    {/* Grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="absolute left-0 w-full border-t border-tertiary/20" style={{ top: `${(i / 3) * 100}%` }} />
                    ))}

                    <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${vW} ${vH}`} preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-brand-600)" stopOpacity="0.24" />
                                <stop offset="80%" stopColor="var(--color-brand-600)" stopOpacity="0.03" />
                                <stop offset="100%" stopColor="var(--color-brand-600)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Gradient area fill */}
                        <path d={areaPath} fill="url(#chartGradient)" />
                        {/* Line */}
                        <path
                            d={linePath}
                            fill="none"
                            stroke="var(--color-brand-600)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
            </div>
            <div className="ml-10 flex justify-between pt-3 text-xs text-tertiary">
                {months.map((m) => (
                    <span key={m}>{m}</span>
                ))}
            </div>
        </div>
    );
};

// --- Header Section ---

const HeaderSection = () => (
    <div className="flex flex-col gap-4 border-b border-secondary px-4 pt-8 pb-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-display-xs font-semibold text-primary">Dashboard</h1>
            <div className="flex flex-wrap items-center gap-3">
                <ButtonGroup size="sm">
                    <ButtonGroupItem>12 months</ButtonGroupItem>
                    <ButtonGroupItem>30 days</ButtonGroupItem>
                    <ButtonGroupItem>7 days</ButtonGroupItem>
                    <ButtonGroupItem>24 hours</ButtonGroupItem>
                </ButtonGroup>
                <Button color="secondary" size="sm" iconLeading={Calendar}>
                    Select dates
                </Button>
                <Button color="secondary" size="sm" iconLeading={FilterLines}>
                    Filters
                </Button>
            </div>
        </div>
    </div>
);

// --- Metrics Section ---

const MetricsSection = () => (
    <div className="flex flex-col gap-6 border-b border-secondary px-4 py-6 lg:flex-row lg:px-8">
        {/* Chart area */}
        <div className="flex-1">
            <div className="flex flex-wrap items-end gap-4">
                <div>
                    <p className="text-sm font-medium text-tertiary">MRR</p>
                    <p className="text-display-md font-semibold text-primary">$18,880</p>
                </div>
                <BadgeWithIcon type="pill-color" color="success" size="md" iconLeading={TrendUp01}>
                    7.4%
                </BadgeWithIcon>
            </div>
            <div className="mt-5">
                <ChartPlaceholder />
            </div>
        </div>
        {/* Side metrics */}
        <div className="flex flex-col gap-5 lg:w-[240px]">
            {sideMetrics.map((metric) => (
                <div key={metric.label} className="rounded-md border border-secondary bg-primary p-5 shadow-xs">
                    <p className="text-sm font-medium text-tertiary">{metric.label}</p>
                    <div className="mt-2 flex items-end gap-2">
                        <p className="text-display-sm font-semibold text-primary">{metric.value}</p>
                        <BadgeWithIcon type="pill-color" color="success" size="sm" iconLeading={TrendUp01}>
                            {metric.change}
                        </BadgeWithIcon>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- Content Section ---

const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary">{title}</h2>
        <button className="rounded-md p-2 text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover">
            <DotsVertical className="size-5" />
        </button>
    </div>
);

const CTACards = () => (
    <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex gap-4 rounded-md border border-secondary bg-primary p-5 shadow-xs">
            <FeaturedIcon icon={UserPlus01} color="gray" theme="modern" size="lg" />
            <div>
                <h3 className="text-sm font-semibold text-secondary">Create your first member</h3>
                <p className="mt-0.5 text-sm text-tertiary">Add yourself or import from CSV.</p>
            </div>
        </div>
        <div className="flex gap-4 rounded-md border border-secondary bg-primary p-5 shadow-xs">
            <FeaturedIcon icon={Edit04} color="gray" theme="modern" size="lg" />
            <div>
                <h3 className="text-sm font-semibold text-secondary">Create a new post</h3>
                <p className="mt-0.5 text-sm text-tertiary">Dive into the editor and start creating.</p>
            </div>
        </div>
    </div>
);

const BlogPostCard = ({ post }: { post: (typeof blogPosts)[number] }) => (
    <div className="min-w-[280px] flex-1">
        <div className="aspect-[3/2] overflow-hidden rounded-md bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <div className="mt-5">
            <p className="text-sm font-semibold text-brand-secondary">{post.author}</p>
            <div className="mt-1 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-primary">{post.title}</h3>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-fg-primary" />
            </div>
            <p className="mt-1 text-sm text-tertiary">{post.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <Badge key={tag} type="pill-color" color={tag === "Design" ? "brand" : tag === "Research" ? "blue" : "pink"} size="sm">
                        {tag}
                    </Badge>
                ))}
            </div>
        </div>
    </div>
);

const TopMembersFeed = () => (
    <div>
        <h3 className="text-sm font-medium text-tertiary">Top members</h3>
        <div className="mt-4 flex flex-col gap-1">
            {topMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-3 rounded-md px-2 py-2">
                    <Avatar src={member.avatar} alt={member.name} size="sm" status={member.online ? "online" : undefined} />
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium text-secondary">{member.name}</p>
                        <p className="text-xs text-tertiary">Member since {member.date}</p>
                    </div>
                    {member.active && <div className="size-2 shrink-0 rounded-full bg-brand-solid" />}
                </div>
            ))}
        </div>
    </div>
);

const ContentSection = () => (
    <div className="flex flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-5">
            <SectionHeader title="Start creating content" />
            <hr className="border-secondary" />
            <CTACards />
            <SectionHeader title="Recent posts" />
            <hr className="border-secondary" />
            <div className="flex flex-wrap gap-6">
                {blogPosts.map((post) => (
                    <BlogPostCard key={post.title} post={post} />
                ))}
            </div>
        </div>
        {/* Right sidebar */}
        <div className="lg:w-[240px]">
            <TopMembersFeed />
        </div>
    </div>
);

// --- Main Dashboard Page ---

export const DashboardPage = () => {
    return (
        <div className="flex min-h-dvh flex-col lg:flex-row">
            <SidebarNavigationSimple activeUrl="/dashboard" items={navItems} footerItems={footerItems} featureCard={<FeatureCard />} />
            <main className="flex-1 overflow-auto">
                <HeaderSection />
                <MetricsSection />
                <ContentSection />
            </main>
        </div>
    );
};
