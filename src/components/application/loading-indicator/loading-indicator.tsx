"use client";

import { cx } from "@/utils/cx";

const styles = {
  sm: {
    root: "gap-4",
    label: "text-sm font-medium",
    spinner: "size-8",
  },
  md: {
    root: "gap-4",
    label: "text-sm font-medium",
    spinner: "size-12",
  },
  lg: {
    root: "gap-4",
    label: "text-lg font-medium",
    spinner: "size-14",
  },
  xl: {
    root: "gap-5",
    label: "text-lg font-medium",
    spinner: "size-16",
  },
};

interface LoadingIndicatorProps {
  /**
   * The visual style of the loading indicator.
   * @default 'line-simple'
   */
  type?: "line-simple" | "line-spinner" | "dot-circle";
  /**
   * The size of the loading indicator.
   * @default 'sm'
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Optional text label displayed below the indicator.
   */
  label?: string;
}

export const LoadingIndicator = ({
  type = "line-simple",
  size = "sm",
  label,
}: LoadingIndicatorProps) => {
  const renderSpinner = () => {
    if (type === "line-spinner") {
      return (
        <svg
          className={cx("animate-spin", styles[size].spinner)}
          fill="none"
          viewBox="0 0 32 32"
        >
          <circle
            className="stroke-fg-brand-primary"
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeDasharray="100"
            strokeDashoffset="40"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      );
    }

    if (type === "dot-circle") {
      return (
        <svg
          className={cx(
            "animate-spin text-fg-brand-primary",
            styles[size].spinner
          )}
          fill="none"
          viewBox="0 0 36 36"
        >
          <path
            d="M34 18C34 15.8989 33.5861 13.8183 32.7821 11.8771C31.978 9.93586 30.7994 8.17203 29.3137 6.68629C27.828 5.20055 26.0641 4.022 24.1229 3.21793C22.1817 2.41385 20.1011 2 18 2C15.8988 2 13.8183 2.41385 11.8771 3.21793C9.93585 4.022 8.17203 5.20055 6.68629 6.68629C5.20055 8.17203 4.022 9.93586 3.21793 11.8771C2.41385 13.8183 2 15.8989 2 18"
            stroke="url(#paint0)"
            strokeDasharray="0.1 8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M3.21793 24.1229C4.022 26.0641 5.20055 27.828 6.68629 29.3137C8.17203 30.7994 9.93585 31.978 11.8771 32.7821C13.8183 33.5861 15.8988 34 18 34C20.1011 34 22.1817 33.5861 24.1229 32.7821C26.0641 31.978 27.828 30.7994 29.3137 29.3137C30.7994 27.828 31.978 26.0641 32.7821 24.1229"
            stroke="url(#paint1)"
            strokeDasharray="0.1 8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0"
              x1="34"
              x2="2"
              y1="18"
              y2="18"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1"
              x1="33"
              x2="3"
              y1="23.5"
              y2="24"
            >
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.48" />
            </linearGradient>
          </defs>
        </svg>
      );
    }

    // Default case: type === "line-simple"
    return (
      <svg
        className={cx("animate-spin", styles[size].spinner)}
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle
          className="text-bg-tertiary"
          cx="16"
          cy="16"
          r="14"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle
          className="stroke-fg-brand-primary"
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeDasharray="100"
          strokeDashoffset="75"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    );
  };

  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center",
        styles[size].root
      )}
    >
      {renderSpinner()}
      {label && (
        <span className={cx("text-secondary", styles[size].label)}>
          {label}
        </span>
      )}
    </div>
  );
};
