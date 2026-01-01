"use client";

import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";
import {
    HeroSection,
    LogoMarquee,
    ProblemSection,
    FeaturesSection,
    TimelineSection,
    PrivacySection,
    PricingSection,
    CTASection,
    Footer,
} from "@/components/landing";
import { UseCasesSection } from "@/components/landing/use-cases-section";

export const HomeScreen = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            {/* Header */}
            <MitableHeader />

            {/* Main content */}
            <main className="flex-1">
                {/* Hero Section - "Work in the flow. Leave the receipts to us." */}
                <HeroSection />

                {/* Logo Marquee - "The memory layer for modern teams" */}
                <LogoMarquee />

                {/* Problem Section - "What was I doing?" */}
                <ProblemSection />

                {/* Use Cases Section - "Built for makers" */}
                <UseCasesSection />

                {/* Features Section - Sessions, Docs, To-Dos */}
                <FeaturesSection />

                {/* Timeline Section - "Perfect Memory. Zero Effort." */}
                <TimelineSection />

                {/* Privacy Section - "Private by design" */}
                <PrivacySection />

                {/* Pricing Section - "Invest in your attention span" */}
                <PricingSection />

                {/* CTA Section - "Your work, documented automatically" */}
                <CTASection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
