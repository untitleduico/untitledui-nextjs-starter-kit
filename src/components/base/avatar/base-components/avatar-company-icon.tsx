"use client";

import { cx } from "@/utils/cx";

const sizes = {
  xs: "size-2",
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
  xl: "size-4.5",
  "2xl": "size-5 ring-[1.67px]",
};

interface AvatarCompanyIconProps {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  src: string;
  alt?: string;
}

export const AvatarCompanyIcon = ({
  size,
  src,
  alt,
}: AvatarCompanyIconProps) => (
  // biome-ignore lint/performance/noImgElement: img used for dynamic sizing, Next.js Image not suitable
  // biome-ignore lint/correctness/useImageSize: Dimensions controlled via CSS classes
  <img
    alt={alt}
    className={cx(
      "absolute -right-0.5 -bottom-0.5 rounded-full bg-primary-25 object-cover ring-[1.5px] ring-bg-primary",
      sizes[size]
    )}
    src={src}
  />
);
