"use client";

import { useState, type FormEvent } from "react";
import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { Button } from "@/components/base/buttons/button";

const darkInput = {
    wrapperClassName: "!bg-gray-900/50 !ring-gray-800/60 focus-within:!ring-brand",
    inputClassName: "!text-white !placeholder-gray-500",
};

const darkTextArea =
    "!bg-gray-900/50 !ring-gray-800/60 !text-white !placeholder-gray-500 focus:!ring-brand";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `Enterprise Inquiry from ${name}${company ? ` (${company})` : ""}`,
        );

        const bodyParts = [
            `Name: ${name}`,
            `Email: ${email}`,
            company && `Company: ${company}`,
            "",
            message,
        ]
            .filter(Boolean)
            .join("\n");

        const body = encodeURIComponent(bodyParts);

        window.location.href = `mailto:mikun@mitable.ai?subject=${subject}&body=${body}`;
    };

    return (
        <div className="flex min-h-dvh flex-col bg-ink">
            <MitableHeader />

            <main className="flex-1 pt-18 md:pt-20">
                <section className="relative overflow-hidden">
                    {/* Background glow */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: "800px",
                            height: "600px",
                            background:
                                "radial-gradient(50% 50% at 50% 50%, rgba(138,97,247,0.06) 0%, transparent 100%)",
                        }}
                    />

                    <div className="relative mx-auto max-w-container px-4 py-20 md:px-8 md:py-28 lg:py-36">
                        {/* Back link */}
                        <a
                            href="/"
                            className="mb-12 inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-white"
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
                        </a>

                        {/* Headline */}
                        <div className="mb-12 text-center">
                            <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
                                Contact Sales
                            </h1>
                            <p className="mt-4 text-lg text-gray-400 md:text-xl">
                                Tell us about your team and we&apos;ll get back to you.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto flex max-w-lg flex-col gap-5"
                        >
                            <Input
                                label="Name"
                                placeholder="Your full name"
                                isRequired
                                value={name}
                                onChange={setName}
                                wrapperClassName={darkInput.wrapperClassName}
                                inputClassName={darkInput.inputClassName}
                            />

                            <Input
                                label="Email"
                                placeholder="you@company.com"
                                type="email"
                                isRequired
                                value={email}
                                onChange={setEmail}
                                wrapperClassName={darkInput.wrapperClassName}
                                inputClassName={darkInput.inputClassName}
                            />

                            <Input
                                label="Company"
                                placeholder="Company name (optional)"
                                value={company}
                                onChange={setCompany}
                                wrapperClassName={darkInput.wrapperClassName}
                                inputClassName={darkInput.inputClassName}
                            />

                            <TextArea
                                label="Message"
                                placeholder="How can we help?"
                                isRequired
                                rows={5}
                                value={message}
                                onChange={setMessage}
                                textAreaClassName={darkTextArea}
                            />

                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                className="btn-pill mt-2 w-full"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
