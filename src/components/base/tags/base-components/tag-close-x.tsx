"use client";

import { XClose } from "@untitledui/icons";
import type { RefAttributes } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";

interface TagCloseXProps
  extends AriaButtonProps,
    RefAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const styles = {
  sm: { root: "p-0.5", icon: "size-2.5" },
  md: { root: "p-0.5", icon: "size-3" },
  lg: { root: "p-0.75", icon: "size-3.5" },
};

export const TagCloseX = ({
  size = "md",
  className,
  ...otherProps
}: TagCloseXProps) => {
  return (
    <AriaButton
      aria-label="Remove this tag"
      className={cx(
        "flex cursor-pointer rounded-[3px] text-fg-quaternary outline-transparent transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-focus-ring focus-visible:outline-offset-2 disabled:cursor-not-allowed",
        styles[size].root,
        className
      )}
      slot="remove"
      {...otherProps}
    >
      <XClose
        className={cx("transition-inherit-all", styles[size].icon)}
        strokeWidth="3"
      />
    </AriaButton>
  );
};
