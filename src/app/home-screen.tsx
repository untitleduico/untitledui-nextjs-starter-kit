"use client";

import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";
import {
    HeroSection,
    LogoMarquee,
    ProblemSection,
    FeaturesSection,
    HowItWorksSection,
    PlatformsSection,
    PrivacySection,
    PricingSection,
    CTASection,
    Footer,
} from "@/components/landing";

export const HomeScreen = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            {/* Header */}
            <MitableHeader />

            {/* Main content */}
            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Logo Marquee - Social Proof */}
                <LogoMarquee />

                {/* Problem Section */}
                <ProblemSection />

                {/* Features Section - Alternating Layout */}
                <FeaturesSection />

                {/* How It Works Section */}
                <HowItWorksSection />

                {/* Platforms Section */}
                <PlatformsSection />

                {/* Privacy Section */}
                <PrivacySection />

                {/* Pricing Section */}
                <PricingSection />

                {/* CTA Section */}
                <CTASection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
