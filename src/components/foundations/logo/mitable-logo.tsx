"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const MitableLogo = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-max items-center justify-start gap-2 overflow-visible", props.className)}>
            {/* Logo mark - stylized screen with recording indicator */}
            <svg viewBox="0 0 32 32" fill="none" className="size-8 shrink-0">
                {/* Background rounded square */}
                <rect width="32" height="32" rx="8" className="fill-brand-600" />
                {/* Window/screen icon */}
                <rect x="6" y="8" width="20" height="14" rx="2" className="fill-white/20" />
                <rect x="8" y="10" width="16" height="10" rx="1" className="fill-white" />
                {/* Recording indicator dot */}
                <circle cx="24" cy="10" r="3" className="fill-error-500" />
                {/* Arrow/document hint */}
                <path
                    d="M12 15L16 12L20 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-600"
                />
            </svg>

            {/* Wordmark */}
            <span className="text-xl font-bold tracking-tight text-fg-primary">
                Mitable
            </span>
        </div>
    );
};

export const MitableLogoMinimal = (props: HTMLAttributes<SVGSVGElement>) => {
    return (
        <svg {...props} viewBox="0 0 32 32" fill="none" className={cx("size-8", props.className)}>
            {/* Background rounded square */}
            <rect width="32" height="32" rx="8" className="fill-brand-600" />
            {/* Window/screen icon */}
            <rect x="6" y="8" width="20" height="14" rx="2" className="fill-white/20" />
            <rect x="8" y="10" width="16" height="10" rx="1" className="fill-white" />
            {/* Recording indicator dot */}
            <circle cx="24" cy="10" r="3" className="fill-error-500" />
            {/* Arrow/document hint */}
            <path
                d="M12 15L16 12L20 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-600"
            />
        </svg>
    );
};

export const MitableLogoWhite = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("flex h-8 w-max items-center justify-start gap-2 overflow-visible", props.className)}>
            {/* Logo mark */}
            <svg viewBox="0 0 32 32" fill="none" className="size-8 shrink-0">
                <rect width="32" height="32" rx="8" className="fill-white/10" />
                <rect x="6" y="8" width="20" height="14" rx="2" className="fill-white/20" />
                <rect x="8" y="10" width="16" height="10" rx="1" className="fill-white" />
                <circle cx="24" cy="10" r="3" className="fill-error-400" />
                <path
                    d="M12 15L16 12L20 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-600"
                />
            </svg>

            {/* Wordmark */}
            <span className="text-xl font-bold tracking-tight text-white">
                Mitable
            </span>
        </div>
    );
};
