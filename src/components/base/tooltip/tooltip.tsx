"use client";

import type { ReactNode } from "react";
import type {
  ButtonProps as AriaButtonProps,
  TooltipProps as AriaTooltipProps,
  TooltipTriggerComponentProps as AriaTooltipTriggerComponentProps,
} from "react-aria-components";
import {
  Button as AriaButton,
  OverlayArrow as AriaOverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";
import { cx } from "@/utils/cx";

const getCrossOffset = (isLeft: boolean, isRight: boolean) => {
  if (isLeft) {
    return -12;
  }
  if (isRight) {
    return 12;
  }
  return 0;
};

interface TooltipProps
  extends AriaTooltipTriggerComponentProps,
    Omit<AriaTooltipProps, "children"> {
  /**
   * The title of the tooltip.
   */
  title: ReactNode;
  /**
   * The description of the tooltip.
   */
  description?: ReactNode;
  /**
   * Whether to show the arrow on the tooltip.
   *
   * @default false
   */
  arrow?: boolean;
  /**
   * Delay in milliseconds before the tooltip is shown.
   *
   * @default 300
   */
  delay?: number;
}

export const Tooltip = ({
  title,
  description,
  children,
  arrow = false,
  delay = 300,
  closeDelay = 0,
  trigger,
  isDisabled,
  isOpen,
  defaultOpen,
  offset = 6,
  crossOffset,
  placement = "top",
  onOpenChange,
  ...tooltipProps
}: TooltipProps) => {
  const isTopOrBottomLeft = [
    "top left",
    "top end",
    "bottom left",
    "bottom end",
  ].includes(placement);
  const isTopOrBottomRight = [
    "top right",
    "top start",
    "bottom right",
    "bottom start",
  ].includes(placement);
  // Set negative cross offset for left and right placement to visually balance the tooltip.
  const calculatedCrossOffset = getCrossOffset(
    isTopOrBottomLeft,
    isTopOrBottomRight
  );

  return (
    <AriaTooltipTrigger
      {...{
        trigger,
        delay,
        closeDelay,
        isDisabled,
        isOpen,
        defaultOpen,
        onOpenChange,
      }}
    >
      {children}

      <AriaTooltip
        {...tooltipProps}
        className={({ isEntering, isExiting }) =>
          cx(
            isEntering && "animate-in ease-out",
            isExiting && "animate-out ease-in"
          )
        }
        crossOffset={crossOffset ?? calculatedCrossOffset}
        offset={offset}
        placement={placement}
      >
        {({ isEntering, isExiting }) => (
          <div
            className={cx(
              "z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform",
              description ? "py-3" : "py-2",

              isEntering &&
                "fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5 animate-in ease-out",
              isExiting &&
                "fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5 animate-out ease-in"
            )}
          >
            <span className="font-semibold text-white text-xs">{title}</span>

            {description && (
              <span className="font-medium text-tooltip-supporting-text text-xs">
                {description}
              </span>
            )}

            {arrow && (
              <AriaOverlayArrow>
                <svg
                  className="size-2.5 in-placement-bottom:rotate-180 in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 fill-bg-primary-solid"
                  viewBox="0 0 100 100"
                >
                  <path d="M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z" />
                </svg>
              </AriaOverlayArrow>
            )}
          </div>
        )}
      </AriaTooltip>
    </AriaTooltipTrigger>
  );
};

interface TooltipTriggerProps extends AriaButtonProps {}

export const TooltipTrigger = ({
  children,
  className,
  ...buttonProps
}: TooltipTriggerProps) => {
  return (
    <AriaButton
      {...buttonProps}
      className={(values) =>
        cx(
          "h-max w-max outline-hidden",
          typeof className === "function" ? className(values) : className
        )
      }
    >
      {children}
    </AriaButton>
  );
};
