"use client";

import { useState, useEffect, type FormEvent } from "react";
import { MitableHeader } from "@/components/marketing/header-navigation/mitable-header";
import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";
import { supabase } from "@/lib/supabase";

const darkInput = {
    wrapperClassName: "!bg-gray-900/50 !ring-gray-800/60 focus-within:!ring-brand",
    inputClassName: "!text-white !placeholder-gray-500",
};

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState<"loading" | "ready" | "success" | "error">("loading");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Listen for auth state changes (Supabase sets session from URL hash)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "PASSWORD_RECOVERY") {
                setStatus("ready");
            } else if (event === "SIGNED_IN") {
                // User might already be signed in from the recovery flow
                setStatus("ready");
            }
        });

        // Check if there's already a session (in case the event already fired)
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setStatus("ready");
            } else {
                // No session yet, might still be processing the hash
                // Give it a moment, then show error if no session
                setTimeout(() => {
                    supabase.auth.getSession().then(({ data: { session: s } }) => {
                        if (!s && status === "loading") {
                            setStatus("error");
                            setErrorMessage("Invalid or expired reset link. Please request a new one.");
                        }
                    });
                }, 2000);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;
        }

        try {
            const { error } = await supabase.auth.updateUser({ password });

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            setStatus("success");
        } catch {
            setErrorMessage("An unexpected error occurred. Please try again.");
        }
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
                                {status === "success" ? "Password Updated" : "Set New Password"}
                            </h1>
                            <p className="mt-4 text-lg text-gray-400 md:text-xl">
                                {status === "loading" && "Verifying your reset link..."}
                                {status === "ready" && "Enter your new password below."}
                                {status === "success" && "Your password has been successfully updated."}
                                {status === "error" && "There was a problem with your reset link."}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="mx-auto max-w-md">
                            {status === "loading" && (
                                <div className="flex justify-center">
                                    <svg
                                        className="size-8 animate-spin text-brand-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                </div>
                            )}

                            {status === "ready" && (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <Input
                                        label="New Password"
                                        placeholder="Enter new password"
                                        type="password"
                                        isRequired
                                        value={password}
                                        onChange={setPassword}
                                        wrapperClassName={darkInput.wrapperClassName}
                                        inputClassName={darkInput.inputClassName}
                                    />

                                    <Input
                                        label="Confirm Password"
                                        placeholder="Confirm new password"
                                        type="password"
                                        isRequired
                                        value={confirmPassword}
                                        onChange={setConfirmPassword}
                                        wrapperClassName={darkInput.wrapperClassName}
                                        inputClassName={darkInput.inputClassName}
                                    />

                                    {errorMessage && (
                                        <p className="text-sm text-red-400">{errorMessage}</p>
                                    )}

                                    <Button
                                        type="submit"
                                        color="primary"
                                        size="lg"
                                        className="btn-pill mt-2 w-full"
                                    >
                                        Update Password
                                    </Button>
                                </form>
                            )}

                            {status === "success" && (
                                <div className="rounded-2xl border border-gray-800/60 bg-gray-900/50 p-8 text-center">
                                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-900/40">
                                        <svg
                                            className="size-6 text-brand-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="mb-6 text-gray-300">
                                        You can now sign in with your new password.
                                    </p>
                                    <Button
                                        color="primary"
                                        className="btn-pill"
                                        href="/"
                                    >
                                        Back to Home
                                    </Button>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="rounded-2xl border border-red-900/40 bg-red-950/20 p-8 text-center">
                                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-red-900/40">
                                        <svg
                                            className="size-6 text-red-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="15" y1="9" x2="9" y2="15" />
                                            <line x1="9" y1="9" x2="15" y2="15" />
                                        </svg>
                                    </div>
                                    <p className="mb-6 text-gray-300">{errorMessage}</p>
                                    <Button
                                        color="secondary"
                                        className="btn-pill"
                                        href="/"
                                    >
                                        Back to Home
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
