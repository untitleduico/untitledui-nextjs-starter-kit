"use client";

import Link from "next/link";
import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";
import { Footer } from "@/components/landing";
import { FaqsSection } from "@/components/landing/faqs-section";

export default function FaqsPage() {
    return (
        <div className="flex min-h-dvh flex-col bg-ink">
            <MitableHeader />

            <main className="flex-1 pt-18 md:pt-20">
                <div className="mx-auto max-w-container px-4 pt-8 md:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-white"
                    >
                        <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to home
                    </Link>
                </div>
                <FaqsSection />
            </main>

            <Footer />
        </div>
    );
}
