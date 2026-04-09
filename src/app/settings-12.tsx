"use client";

import { useMemo, useState } from "react";
import { Bell01, Check, DownloadCloud02, LayersThree01, LayersTwo01, SearchLg, Settings01, Zap } from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import { NavButton } from "@/components/application/app-navigation/base-components/nav-button";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { Table, TableCard } from "@/components/application/table/table";
import { BadgeWithIcon } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { DropdownAvatar } from "@/components/base/dropdown/dropdown-avatar";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";
import { Input } from "@/components/base/input/input";
import { RadioGroupIconSimple } from "@/components/base/radio-groups/radio-group-icon-simple";

// Helper functions for formatting
const formatCurrency = (amount: number): string => `USD ${amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;

const formatInvoicePeriod = (timestamp: number): string =>
    new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

const invoices = [
    {
        id: "invoice-01",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 11, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-02",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 10, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-03",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 9, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-04",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 8, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-05",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 7, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-06",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 6, 1).getTime(),
        status: "Paid",
    },
    {
        id: "invoice-07",
        plan: "Basic plan",
        amount: 10.0,
        invoice: new Date(2026, 5, 1).getTime(),
        status: "Paid",
    },
];

const plans = [
    {
        value: "basic",
        title: "Basic plan",
        secondaryTitle: "$10/month",
        description: "Includes up to 10 users, 20 GB individual data and access to all features.",
        icon: LayersTwo01,
    },

    {
        value: "business",
        title: "Business plan",
        secondaryTitle: "$20/month",
        description: "Includes up to 20 users, 40 GB individual data and access to all features.",
        icon: LayersThree01,
    },

    {
        value: "enterprise",
        title: "Enterprise plan",
        secondaryTitle: "$40/month",
        description: "Unlimited users, unlimited individual data and access to all features.",
        icon: Zap,
    },
];

export const Settings12 = () => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "deliveryDate",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return invoices.toSorted((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Handle numbers (including timestamps)
            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "ascending" ? first - second : second - first;
            }

            // Handle strings
            if (typeof first === "string" && typeof second === "string") {
                const result = first.localeCompare(second);
                return sortDescriptor.direction === "ascending" ? result : -result;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <div className="bg-primary">
            <HeaderNavigationBase
                activeUrl="/settings/billing"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Projects", href: "/projects" },
                    { label: "Tasks", href: "/tasks" },
                    { label: "Reporting", href: "/reporting" },
                    { label: "Users", href: "/users" },
                ]}
                subItems={[
                    { label: "My details", href: "/settings/my-details" },
                    { label: "Profile", href: "/settings/profile" },
                    { label: "Password", href: "/settings/password" },
                    { label: "Team", href: "/settings/team" },
                    { label: "Billing", href: "/settings/billing" },
                    { label: "Notifications", href: "/settings/notifications" },
                ]}
                actions={
                    <>
                        <Button iconLeading={Zap} color="secondary" size="sm">
                            Upgrade now
                        </Button>
                        <div className="flex gap-0.5">
                            <NavButton icon={Settings01} label="Settings" href="/settings" tooltipPlacement="bottom" />
                            <div className="relative">
                                <NavButton icon={Bell01} label="Notifications" href="/notifications-01" tooltipPlacement="bottom" />
                                <div className="absolute -top-0.25 -right-0.25 flex size-3.5 items-center justify-center rounded-full bg-fg-error-primary text-[10px] font-bold text-white">
                                    2
                                </div>
                            </div>
                        </div>
                        <DropdownAvatar />
                    </>
                }
            />

            <main className="bg-primary pt-8 pb-12 lg:pt-12 lg:pb-24">
                <div className="flex flex-col gap-8">
                    <div className="mx-auto w-full max-w-container px-4 lg:px-8">
                        {/* Page header simple with input search */}
                        <div className="relative flex flex-col gap-5">
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <div className="flex flex-1 flex-col gap-0.5">
                                    <h1 className="text-xl font-semibold text-primary">Billing</h1>
                                </div>
                                <div className="flex flex-col gap-4 lg:hidden lg:flex-row">
                                    <Input
                                        className="w-full max-w-70 max-md:hidden"
                                        size="sm"
                                        shortcut
                                        aria-label="Search"
                                        placeholder="Search"
                                        icon={SearchLg}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 lg:px-8">
                        <SectionHeader.Root>
                            <SectionHeader.Group>
                                <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                    <SectionHeader.Heading>Account plans</SectionHeader.Heading>
                                    <SectionHeader.Subheading>Pick an account plan that fits your workflow.</SectionHeader.Subheading>
                                </div>
                                <div className="absolute top-0 right-0 md:static">
                                    <DropdownIconSimple />
                                </div>
                            </SectionHeader.Group>
                        </SectionHeader.Root>

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_minmax(560px,640px)] lg:gap-8">
                            <SectionLabel.Root
                                size="sm"
                                title="Current plan"
                                description="We'll credit your account if you need to downgrade during the billing cycle."
                            />

                            <RadioGroupIconSimple defaultValue="basic" items={plans} />
                        </div>
                    </div>

                    <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 lg:px-8">
                        <SectionHeader.Root>
                            <SectionHeader.Group>
                                <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                    <SectionHeader.Heading>Billing and invoicing</SectionHeader.Heading>
                                    <SectionHeader.Subheading>Pick an account plan that fits your workflow.</SectionHeader.Subheading>
                                </div>
                                <SectionHeader.Actions>
                                    <Button color="secondary" size="sm" iconLeading={DownloadCloud02}>
                                        Download all
                                    </Button>
                                </SectionHeader.Actions>
                                <div className="absolute top-0 right-0 md:static">
                                    <DropdownIconSimple />
                                </div>
                            </SectionHeader.Group>
                        </SectionHeader.Root>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                            <SectionLabel.Root
                                size="sm"
                                title="Billing history"
                                description={
                                    <>
                                        Please reach out to our friendly team via{" "}
                                        <a
                                            href="mailto:billing@untitledui.com"
                                            className="rounded-xs underline decoration-utility-neutral-200 underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            billing@untitledui.com
                                        </a>{" "}
                                        with questions.
                                    </>
                                }
                            />

                            <TableCard.Root className="-mx-4 rounded-none bg-transparent shadow-none ring-0 lg:mx-0 lg:rounded-xl lg:bg-primary lg:shadow-xs lg:ring-1">
                                <Table
                                    aria-label="Invoices"
                                    selectionMode="multiple"
                                    sortDescriptor={sortDescriptor}
                                    onSortChange={setSortDescriptor}
                                    className="bg-primary"
                                >
                                    <Table.Header>
                                        <Table.Head id="invoice" isRowHeader label="Invoice" allowsSorting className="w-full" />
                                        <Table.Head id="status" label="Status" allowsSorting />
                                        <Table.Head id="amount" label="Amount" allowsSorting />
                                        <Table.Head id="plan" label="Plan" allowsSorting />
                                        <Table.Head id="actions" />
                                    </Table.Header>
                                    <Table.Body items={sortedItems}>
                                        {(invoice) => (
                                            <Table.Row id={invoice.id}>
                                                <Table.Cell className="font-semibold! text-nowrap">{formatInvoicePeriod(invoice.invoice)}</Table.Cell>
                                                <Table.Cell>
                                                    <BadgeWithIcon
                                                        iconLeading={Check}
                                                        color={invoice.status === "Paid" ? "success" : invoice.status === "Failed" ? "error" : "gray"}
                                                        type="modern"
                                                        size="sm"
                                                    >
                                                        {invoice.status}
                                                    </BadgeWithIcon>
                                                </Table.Cell>
                                                <Table.Cell className="text-nowrap">{formatCurrency(invoice.amount)}</Table.Cell>
                                                <Table.Cell className="text-nowrap">{invoice.plan}</Table.Cell>

                                                <Table.Cell>
                                                    <div className="flex gap-0.5">
                                                        <Button size="sm" color="link-color">
                                                            Edit
                                                        </Button>
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                            </TableCard.Root>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
