"use client";

import type { SVGProps } from "react";
import { cx } from "@/utils/cx";

export const Circle = (
  props: Omit<SVGProps<SVGSVGElement>, "size"> & { size?: "sm" | "md" | "lg" }
) => {
  const { size = "lg", className } = props;
  const Pattern = sizes[size];

  return <Pattern className={className} />;
};

const lg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      height="768"
      viewBox="0 0 768 768"
      width="768"
      {...props}
      className={cx("text-border-secondary", props.className)}
    >
      <mask
        height="768"
        id="mask0_4933_392997"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="768"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4933_392997)" height="768" width="768" />
      </mask>
      <g mask="url(#mask0_4933_392997)">
        <circle cx="384" cy="384" r="47.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="95.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="143.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="191.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="239.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="287.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="335.5" stroke="currentColor" />
        <circle cx="384" cy="384" r="383.5" stroke="currentColor" />
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(384 384) rotate(90) scale(384 384)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4933_392997"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const md = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      height="480"
      viewBox="0 0 480 480"
      width="480"
      {...props}
      className={cx("text-border-secondary", props.className)}
    >
      <mask
        height="480"
        id="mask0_4933_393068"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="480"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4933_393068)" height="480" width="480" />
      </mask>
      <g mask="url(#mask0_4933_393068)">
        <circle cx="240" cy="240" r="47.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="79.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="111.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="143.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="143.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="175.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="207.5" stroke="currentColor" />
        <circle cx="240" cy="240" r="239.5" stroke="currentColor" />
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(240 240) rotate(90) scale(240 240)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4933_393068"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const sm = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      height="336"
      viewBox="0 0 336 336"
      width="336"
      {...props}
      className={cx("text-border-secondary", props.className)}
    >
      <mask
        height="336"
        id="mask0_4947_375931"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="336"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4947_375931)" height="336" width="336" />
      </mask>
      <g mask="url(#mask0_4947_375931)">
        <circle cx="168" cy="168" r="47.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="47.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="71.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="95.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="119.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="143.5" stroke="currentColor" />
        <circle cx="168" cy="168" r="167.5" stroke="currentColor" />
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(168 168) rotate(90) scale(168 168)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4947_375931"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const sizes = {
  sm,
  md,
  lg,
};
