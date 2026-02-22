"use client";

import {
    CTASection,
    FeaturesSection,
    FlowComparisonSection,
    Footer,
    HeroSection,
    PricingSection,
    PrivacySection,
    ProblemSection,
    TimelineSection,
} from "@/components/landing";
import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";

// import { UseCasesSection } from "@/components/landing/use-cases-section";

export const HomeScreen = () => {
    return (
        <div className="flex min-h-dvh flex-col bg-ink">
            {/* Header */}
            <MitableHeader />

            {/* Main content - pt accounts for fixed header */}
            <main className="flex-1 pt-18 md:pt-20">
                {/* Hero Section - "Work in the flow. Leave the receipts to us." */}
                <HeroSection />

                {/* Problems Section - "Managing remote teams is hard" */}
                <ProblemSection />

                {/* Flow Comparison - "Context switching kills momentum" */}
                <FlowComparisonSection />

                {/* Use Cases Section - "Built for makers" */}
                {/* <UseCasesSection /> */}

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
