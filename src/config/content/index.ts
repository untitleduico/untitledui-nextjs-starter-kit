/**
 * Content selector based on NEXT_PUBLIC_REGION environment variable.
 *
 * Usage:
 * - Set NEXT_PUBLIC_REGION=ng for Nigerian market (mitable.ng)
 * - Set NEXT_PUBLIC_REGION=global (or leave unset) for global market (mitable.ai)
 */

import { globalContent } from "./global";
import { ngContent } from "./ng";

export type Region = "ng" | "global";

export function getRegion(): Region {
    const region = process.env.NEXT_PUBLIC_REGION;
    if (region === "ng") {
        return "ng";
    }
    return "global";
}

export function getSiteContent() {
    const region = getRegion();
    return region === "ng" ? ngContent : globalContent;
}

// Export for direct import - will be resolved at build time
export const siteContent = getSiteContent();

export type SiteContent = typeof siteContent;

// Re-export individual content modules for direct access if needed
export { globalContent } from "./global";
export { ngContent } from "./ng";
export { baseContent } from "./base";
