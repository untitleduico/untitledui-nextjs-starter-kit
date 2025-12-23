"use client";

import { User01 } from "@untitledui/icons";
import { type FC, type ReactNode, useState } from "react";
import { cx } from "@/utils/cx";
import { AvatarOnlineIndicator, VerifiedTick } from "./base-components";

type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface AvatarProps {
  size?: AvatarSize;
  className?: string;
  src?: string | null;
  alt?: string;
  /**
   * Display a contrast border around the avatar.
   */
  contrastBorder?: boolean;
  /**
   * Display a badge (i.e. company logo).
   */
  badge?: ReactNode;
  /**
   * Display a status indicator.
   */
  status?: "online" | "offline";
  /**
   * Display a verified tick icon.
   *
   * @default false
   */
  verified?: boolean;

  /**
   * The initials of the user to display if no image is available.
   */
  initials?: string;
  /**
   * An icon to display if no image is available.
   */
  placeholderIcon?: FC<{ className?: string }>;
  /**
   * A placeholder to display if no image is available.
   */
  placeholder?: ReactNode;

  /**
   * Whether the avatar should show a focus ring when the parent group is in focus.
   * For example, when the avatar is wrapped inside a link.
   *
   * @default false
   */
  focusable?: boolean;
}

const styles = {
  xxs: {
    root: "size-4 outline-[0.5px] -outline-offset-[0.5px]",
    initials: "text-xs font-semibold",
    icon: "size-3",
  },
  xs: {
    root: "size-6 outline-[0.5px] -outline-offset-[0.5px]",
    initials: "text-xs font-semibold",
    icon: "size-4",
  },
  sm: {
    root: "size-8 outline-[0.75px] -outline-offset-[0.75px]",
    initials: "text-sm font-semibold",
    icon: "size-5",
  },
  md: {
    root: "size-10 outline-1 -outline-offset-1",
    initials: "text-md font-semibold",
    icon: "size-6",
  },
  lg: {
    root: "size-12 outline-1 -outline-offset-1",
    initials: "text-lg font-semibold",
    icon: "size-7",
  },
  xl: {
    root: "size-14 outline-1 -outline-offset-1",
    initials: "text-xl font-semibold",
    icon: "size-8",
  },
  "2xl": {
    root: "size-16 outline-1 -outline-offset-1",
    initials: "text-display-xs font-semibold",
    icon: "size-8",
  },
};

export const Avatar = ({
  contrastBorder = true,
  size = "md",
  src,
  alt,
  initials,
  placeholder,
  placeholderIcon: PlaceholderIcon,
  badge,
  status,
  verified,
  focusable = false,
  className,
}: AvatarProps) => {
  const [isFailed, setIsFailed] = useState(false);

  const renderMainContent = () => {
    if (src && !isFailed) {
      return (
        // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Click handled by parent container
        // biome-ignore lint/performance/noImgElement: img used for dynamic sizing, Next.js Image not suitable
        // biome-ignore lint/correctness/useImageSize: Dimensions controlled via CSS classes
        <img
          alt={alt}
          className="size-full rounded-full object-cover"
          data-avatar-img
          onError={() => setIsFailed(true)}
          src={src}
        />
      );
    }

    if (initials) {
      return (
        <span className={cx("text-quaternary", styles[size].initials)}>
          {initials}
        </span>
      );
    }

    if (PlaceholderIcon) {
      return (
        <PlaceholderIcon
          className={cx("text-fg-quaternary", styles[size].icon)}
        />
      );
    }

    return (
      placeholder || (
        <User01 className={cx("text-fg-quaternary", styles[size].icon)} />
      )
    );
  };

  const renderBadgeContent = () => {
    if (status) {
      return (
        <AvatarOnlineIndicator
          size={size === "xxs" ? "xs" : size}
          status={status}
        />
      );
    }

    if (verified) {
      return (
        <VerifiedTick
          className={cx(
            "absolute right-0 bottom-0",
            (size === "xxs" || size === "xs") && "-right-px -bottom-px"
          )}
          size={size === "xxs" ? "xs" : size}
        />
      );
    }

    return badge;
  };

  return (
    <div
      className={cx(
        "relative inline-flex shrink-0 items-center justify-center rounded-full bg-avatar-bg outline-transparent",
        // Focus styles
        focusable &&
          "group-outline-focus-ring group-focus-visible:outline-2 group-focus-visible:outline-offset-2",
        contrastBorder && "outline outline-avatar-contrast-border",
        styles[size].root,
        className
      )}
      data-avatar
    >
      {renderMainContent()}
      {renderBadgeContent()}
    </div>
  );
};
