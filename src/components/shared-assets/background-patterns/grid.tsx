"use client";

import type { SVGProps } from "react";
import { cx } from "@/utils/cx";

export const Grid = (
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
        id="mask0_4933_393109"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="768"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4933_393109)" height="768" width="768" />
      </mask>
      <g mask="url(#mask0_4933_393109)">
        <g clipPath="url(#clip0_4933_393109)">
          <g clipPath="url(#clip1_4933_393109)">
            <line stroke="currentColor" x1="0.5" x2="0.5" y2="768" />
            <line stroke="currentColor" x1="48.5" x2="48.5" y2="768" />
            <line stroke="currentColor" x1="96.5" x2="96.5" y2="768" />
            <line stroke="currentColor" x1="144.5" x2="144.5" y2="768" />
            <line stroke="currentColor" x1="192.5" x2="192.5" y2="768" />
            <line stroke="currentColor" x1="240.5" x2="240.5" y2="768" />
            <line stroke="currentColor" x1="288.5" x2="288.5" y2="768" />
            <line stroke="currentColor" x1="336.5" x2="336.5" y2="768" />
            <line stroke="currentColor" x1="384.5" x2="384.5" y2="768" />
            <line stroke="currentColor" x1="432.5" x2="432.5" y2="768" />
            <line stroke="currentColor" x1="480.5" x2="480.5" y2="768" />
            <line stroke="currentColor" x1="528.5" x2="528.5" y2="768" />
            <line stroke="currentColor" x1="576.5" x2="576.5" y2="768" />
            <line stroke="currentColor" x1="624.5" x2="624.5" y2="768" />
            <line stroke="currentColor" x1="672.5" x2="672.5" y2="768" />
            <line stroke="currentColor" x1="720.5" x2="720.5" y2="768" />
          </g>
          <rect
            height="767"
            stroke="currentColor"
            width="767"
            x="0.5"
            y="0.5"
          />
          <g clipPath="url(#clip2_4933_393109)">
            <line stroke="currentColor" x2="768" y1="47.5" y2="47.5" />
            <line stroke="currentColor" x2="768" y1="95.5" y2="95.5" />
            <line stroke="currentColor" x2="768" y1="143.5" y2="143.5" />
            <line stroke="currentColor" x2="768" y1="191.5" y2="191.5" />
            <line stroke="currentColor" x2="768" y1="239.5" y2="239.5" />
            <line stroke="currentColor" x2="768" y1="287.5" y2="287.5" />
            <line stroke="currentColor" x2="768" y1="335.5" y2="335.5" />
            <line stroke="currentColor" x2="768" y1="383.5" y2="383.5" />
            <line stroke="currentColor" x2="768" y1="431.5" y2="431.5" />
            <line stroke="currentColor" x2="768" y1="479.5" y2="479.5" />
            <line stroke="currentColor" x2="768" y1="527.5" y2="527.5" />
            <line stroke="currentColor" x2="768" y1="575.5" y2="575.5" />
            <line stroke="currentColor" x2="768" y1="623.5" y2="623.5" />
            <line stroke="currentColor" x2="768" y1="671.5" y2="671.5" />
            <line stroke="currentColor" x2="768" y1="719.5" y2="719.5" />
            <line stroke="currentColor" x2="768" y1="767.5" y2="767.5" />
          </g>
          <rect
            height="767"
            stroke="currentColor"
            width="767"
            x="0.5"
            y="0.5"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(384 384) rotate(90) scale(384 384)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4933_393109"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_4933_393109">
          <rect fill="white" height="768" width="768" />
        </clipPath>
        <clipPath id="clip1_4933_393109">
          <rect fill="white" height="768" width="768" />
        </clipPath>
        <clipPath id="clip2_4933_393109">
          <rect fill="white" height="768" width="768" />
        </clipPath>
      </defs>
    </svg>
  );
};

const md = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="480"
      viewBox="0 0 480 480"
      width="480"
      {...props}
      className={cx("text-border-secondary", props.className)}
      fill="none"
    >
      <mask
        height="480"
        id="mask0_4933_393121"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="480"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4933_393121)" height="480" width="480" />
      </mask>
      <g mask="url(#mask0_4933_393121)">
        <g clipPath="url(#clip0_4933_393121)">
          <g clipPath="url(#clip1_4933_393121)">
            <line stroke="currentColor" x1="0.5" x2="0.5" y2="480" />
            <line stroke="currentColor" x1="32.5" x2="32.5" y2="480" />
            <line stroke="currentColor" x1="64.5" x2="64.5" y2="480" />
            <line stroke="currentColor" x1="96.5" x2="96.5" y2="480" />
            <line stroke="currentColor" x1="128.5" x2="128.5" y2="480" />
            <line stroke="currentColor" x1="160.5" x2="160.5" y2="480" />
            <line stroke="currentColor" x1="192.5" x2="192.5" y2="480" />
            <line stroke="currentColor" x1="224.5" x2="224.5" y2="480" />
            <line stroke="currentColor" x1="256.5" x2="256.5" y2="480" />
            <line stroke="currentColor" x1="288.5" x2="288.5" y2="480" />
            <line stroke="currentColor" x1="320.5" x2="320.5" y2="480" />
            <line stroke="currentColor" x1="352.5" x2="352.5" y2="480" />
            <line stroke="currentColor" x1="384.5" x2="384.5" y2="480" />
            <line stroke="currentColor" x1="416.5" x2="416.5" y2="480" />
            <line stroke="currentColor" x1="448.5" x2="448.5" y2="480" />
          </g>
          <rect
            height="479"
            stroke="currentColor"
            width="479"
            x="0.5"
            y="0.5"
          />
          <g clipPath="url(#clip2_4933_393121)">
            <line stroke="currentColor" x2="480" y1="31.5" y2="31.5" />
            <line stroke="currentColor" x2="480" y1="63.5" y2="63.5" />
            <line stroke="currentColor" x2="480" y1="95.5" y2="95.5" />
            <line stroke="currentColor" x2="480" y1="127.5" y2="127.5" />
            <line stroke="currentColor" x2="480" y1="159.5" y2="159.5" />
            <line stroke="currentColor" x2="480" y1="191.5" y2="191.5" />
            <line stroke="currentColor" x2="480" y1="223.5" y2="223.5" />
            <line stroke="currentColor" x2="480" y1="255.5" y2="255.5" />
            <line stroke="currentColor" x2="480" y1="287.5" y2="287.5" />
            <line stroke="currentColor" x2="480" y1="319.5" y2="319.5" />
            <line stroke="currentColor" x2="480" y1="351.5" y2="351.5" />
            <line stroke="currentColor" x2="480" y1="383.5" y2="383.5" />
            <line stroke="currentColor" x2="480" y1="415.5" y2="415.5" />
            <line stroke="currentColor" x2="480" y1="447.5" y2="447.5" />
            <line stroke="currentColor" x2="480" y1="479.5" y2="479.5" />
          </g>
          <rect
            height="479"
            stroke="currentColor"
            width="479"
            x="0.5"
            y="0.5"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(240 240) rotate(90) scale(240 240)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4933_393121"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_4933_393121">
          <rect fill="white" height="480" width="480" />
        </clipPath>
        <clipPath id="clip1_4933_393121">
          <rect fill="white" height="480" width="480" />
        </clipPath>
        <clipPath id="clip2_4933_393121">
          <rect fill="white" height="480" width="480" />
        </clipPath>
      </defs>
    </svg>
  );
};

const sm = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="336"
      viewBox="0 0 336 336"
      width="336"
      {...props}
      className={cx("text-border-secondary", props.className)}
      fill="none"
    >
      <mask
        height="336"
        id="mask0_4947_375939"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="336"
        x="0"
        y="0"
      >
        <rect fill="url(#paint0_radial_4947_375939)" height="336" width="336" />
      </mask>
      <g mask="url(#mask0_4947_375939)">
        <g clipPath="url(#clip0_4947_375939)">
          <g clipPath="url(#clip1_4947_375939)">
            <line stroke="currentColor" x1="0.5" x2="0.5" y2="336" />
            <line stroke="currentColor" x1="24.5" x2="24.5" y2="336" />
            <line stroke="currentColor" x1="48.5" x2="48.5" y2="336" />
            <line stroke="currentColor" x1="72.5" x2="72.5" y2="336" />
            <line stroke="currentColor" x1="96.5" x2="96.5" y2="336" />
            <line stroke="currentColor" x1="120.5" x2="120.5" y2="336" />
            <line stroke="currentColor" x1="144.5" x2="144.5" y2="336" />
            <line stroke="currentColor" x1="168.5" x2="168.5" y2="336" />
            <line stroke="currentColor" x1="192.5" x2="192.5" y2="336" />
            <line stroke="currentColor" x1="216.5" x2="216.5" y2="336" />
            <line stroke="currentColor" x1="240.5" x2="240.5" y2="336" />
            <line stroke="currentColor" x1="264.5" x2="264.5" y2="336" />
            <line stroke="currentColor" x1="288.5" x2="288.5" y2="336" />
            <line stroke="currentColor" x1="312.5" x2="312.5" y2="336" />
          </g>
          <rect
            height="335"
            stroke="currentColor"
            width="335"
            x="0.5"
            y="0.5"
          />
          <g clipPath="url(#clip2_4947_375939)">
            <line stroke="currentColor" x2="336" y1="23.5" y2="23.5" />
            <line stroke="currentColor" x2="336" y1="47.5" y2="47.5" />
            <line stroke="currentColor" x2="336" y1="71.5" y2="71.5" />
            <line stroke="currentColor" x2="336" y1="95.5" y2="95.5" />
            <line stroke="currentColor" x2="336" y1="119.5" y2="119.5" />
            <line stroke="currentColor" x2="336" y1="143.5" y2="143.5" />
            <line stroke="currentColor" x2="336" y1="167.5" y2="167.5" />
            <line stroke="currentColor" x2="336" y1="191.5" y2="191.5" />
            <line stroke="currentColor" x2="336" y1="215.5" y2="215.5" />
            <line stroke="currentColor" x2="336" y1="239.5" y2="239.5" />
            <line stroke="currentColor" x2="336" y1="263.5" y2="263.5" />
            <line stroke="currentColor" x2="336" y1="287.5" y2="287.5" />
            <line stroke="currentColor" x2="336" y1="311.5" y2="311.5" />
            <line stroke="currentColor" x2="336" y1="335.5" y2="335.5" />
          </g>
          <rect
            height="335"
            stroke="currentColor"
            width="335"
            x="0.5"
            y="0.5"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(168 168) rotate(90) scale(168 168)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_4947_375939"
          r="1"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_4947_375939">
          <rect fill="white" height="336" width="336" />
        </clipPath>
        <clipPath id="clip1_4947_375939">
          <rect fill="white" height="336" width="336" />
        </clipPath>
        <clipPath id="clip2_4947_375939">
          <rect fill="white" height="336" width="336" />
        </clipPath>
      </defs>
    </svg>
  );
};

const sizes = {
  sm,
  md,
  lg,
};
