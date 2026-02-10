/**
 * Centralized content configuration for the Mitable website.
 *
 * This file now re-exports from the regional content system.
 * Content is selected based on NEXT_PUBLIC_REGION environment variable:
 * - "ng" for Nigerian market (mitable.ng)
 * - "global" (or unset) for global market (mitable.ai)
 *
 * @see src/config/content/index.ts for the content selector
 * @see src/config/content/global.ts for mitable.ai content
 * @see src/config/content/ng.ts for mitable.ng content
 */

export { siteContent, getSiteContent, getRegion } from "./content";
export type { SiteContent, Region } from "./content";
