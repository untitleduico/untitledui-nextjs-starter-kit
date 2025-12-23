"use client";

import { SearchLg } from "@untitledui/icons";
import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  svgClassName?: string;
  childrenClassName?: string;
}

export const CloudIllustration = ({
  size = "lg",
  ...otherProps
}: IllustrationProps) => {
  const Pattern = sizes[size];

  return <Pattern {...otherProps} />;
};

export const sm = ({
  className,
  svgClassName,
  childrenClassName,
  children = <SearchLg className="size-6" />,
  ...otherProps
}: Omit<IllustrationProps, "size">) => {
  return (
    <div {...otherProps} className={cx("relative h-30 w-38", className)}>
      <svg
        className={cx("size-full stroke-inherit text-inherit", svgClassName)}
        fill="none"
        viewBox="0 0 152 120"
      >
        <circle className="fill-utility-gray-100" cx="76" cy="52" r="52" />

        <circle className="fill-utility-gray-100" cx="21" cy="19" r="5" />
        <circle className="fill-utility-gray-100" cx="18" cy="109" r="7" />
        <circle className="fill-utility-gray-100" cx="145" cy="35" r="7" />
        <circle className="fill-utility-gray-100" cx="134" cy="8" r="4" />

        <g filter="url(#filter-01-sm)">
          <path
            className="fill-bg-secondary"
            d="M78.6 16C67.8273 16 58.2978 21.3233 52.4987 29.4829C50.605 29.0363 48.6301 28.8 46.6 28.8C32.4615 28.8 21 40.2615 21 54.4C21 68.5385 32.4615 80 46.6 80L110.6 80C122.971 80 133 69.9712 133 57.6C133 45.2288 122.971 35.2 110.6 35.2C109.721 35.2 108.854 35.2506 108.002 35.349C103.098 23.9677 91.7797 16 78.6 16Z"
          />
          <path
            className="stroke-border-secondary_alt"
            d="M78.6 15.5C67.7787 15.5 58.1927 20.7893 52.2864 28.9214C50.4555 28.5145 48.5525 28.3 46.6 28.3C32.1854 28.3 20.5 39.9854 20.5 54.4C20.5 68.8146 32.1854 80.5 46.6 80.5L110.6 80.5C123.247 80.5 133.5 70.2473 133.5 57.6C133.5 44.9527 123.247 34.7 110.6 34.7C109.828 34.7 109.065 34.7382 108.313 34.8128C103.256 23.4354 91.8553 15.5 78.6 15.5Z"
          />
          <ellipse
            cx="46.6"
            cy="54.3998"
            fill="url(#cloud-gradient-01-sm)"
            rx="25.6"
            ry="25.6"
          />
          <circle cx="78.6" cy="48" fill="url(#cloud-gradient-02-sm)" r="32" />
          <ellipse
            cx="110.6"
            cy="57.6002"
            fill="url(#cloud-gradient-03-sm)"
            rx="22.4"
            ry="22.4"
          />
        </g>

        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="106"
            id="filter-01-sm"
            width="154"
            x="0"
            y="15"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="1.5"
              result="effect-01-sm"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.04 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect-01-sm"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-02-sm"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.03 0"
            />
            <feBlend in2="effect-02-sm" mode="normal" result="effect-02-sm" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-03-sm"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.08 0"
            />
            <feBlend in2="effect-02-sm" mode="normal" result="effect-03-sm" />
            <feBlend
              in="SourceGraphic"
              in2="effect-03-sm"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-01-sm"
            x1="26.9429"
            x2="72.2"
            y1="37.4855"
            y2="79.9998"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-02-sm"
            x1="54.0286"
            x2="110.6"
            y1="26.8571"
            y2="80"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-03-sm"
            x1="93.4"
            x2="133"
            y1="42.8002"
            y2="80.0002"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>

      {children && (
        <span
          className={cx(
            "absolute inset-x-13 bottom-2 z-10 flex size-12 items-center justify-center rounded-full bg-alpha-black/20 text-fg-white backdrop-blur-xs",
            childrenClassName
          )}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export const md = ({
  className,
  svgClassName,
  childrenClassName,
  children = <SearchLg className="size-7" />,
  ...otherProps
}: Omit<IllustrationProps, "size">) => {
  return (
    <div {...otherProps} className={cx("relative h-32 w-43", className)}>
      <svg
        className={cx("size-full stroke-inherit text-inherit", svgClassName)}
        fill="none"
        viewBox="0 0 182 137"
      >
        <circle className="fill-utility-gray-100" cx="91" cy="64" r="64" />

        <circle className="fill-utility-gray-100" cx="25" cy="20" r="6" />
        <circle className="fill-utility-gray-100" cx="22" cy="112" r="8" />
        <circle className="fill-utility-gray-100" cx="165" cy="36" r="8" />
        <circle className="fill-utility-gray-100" cx="154" cy="9" r="5" />

        <g filter="url(#filter-01-md)">
          <path
            className="fill-bg-secondary"
            d="M93 16C79.534 16 67.6222 22.6541 60.3733 32.8536C58.0062 32.2954 55.5376 32 53 32C35.3269 32 21 46.3269 21 64C21 81.6731 35.3269 96 53 96H133C148.464 96 161 83.464 161 68C161 52.536 148.464 40 133 40C131.902 40 130.818 40.0633 129.752 40.1863C123.623 25.9596 109.475 16 93 16Z"
          />
          <path
            d="M93 15.5C79.4856 15.5 67.5173 22.1198 60.161 32.2916C57.8566 31.7734 55.4599 31.5 53 31.5C35.0507 31.5 20.5 46.0507 20.5 64C20.5 81.9493 35.0507 96.5 53 96.5H133C148.74 96.5 161.5 83.7401 161.5 68C161.5 52.2599 148.74 39.5 133 39.5C132.009 39.5 131.029 39.5506 130.064 39.6495C123.78 25.427 109.55 15.5 93 15.5Z"
            stroke="black"
            strokeOpacity="0.08"
          />
          <circle cx="53" cy="64" fill="url(#cloud-gradient-01-md)" r="32" />
          <circle cx="93" cy="56" fill="url(#cloud-gradient-02-md)" r="40" />
          <circle cx="133" cy="68" fill="url(#cloud-gradient-03-md)" r="28" />
        </g>

        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="122"
            id="filter-01-md"
            width="182"
            x="0"
            y="15"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="1.5"
              result="effect-01-md"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.04 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect-01-md"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-02-md"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.03 0"
            />
            <feBlend in2="effect-01-md" mode="normal" result="effect-02-md" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-03-md"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.08 0"
            />
            <feBlend in2="effect-02-md" mode="normal" result="effect-03-md" />
            <feBlend
              in="SourceGraphic"
              in2="effect-03-md"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-01-md"
            x1="28.4286"
            x2="85"
            y1="42.8571"
            y2="96"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-02-md"
            x1="62.2857"
            x2="133"
            y1="29.5714"
            y2="95.9999"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-03-md"
            x1="111.5"
            x2="161"
            y1="49.5"
            y2="96"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>

      {children && (
        <span
          className={cx(
            "absolute bottom-3 left-1/2 z-10 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-alpha-black/20 text-fg-white backdrop-blur-xs",
            childrenClassName
          )}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export const lg = ({
  className,
  svgClassName,
  childrenClassName,
  children = <SearchLg className="size-7" />,
  ...otherProps
}: Omit<IllustrationProps, "size">) => {
  return (
    <div {...otherProps} className={cx("relative h-40 w-55", className)}>
      <svg
        className={cx("size-full stroke-inherit text-inherit", svgClassName)}
        fill="none"
        viewBox="0 0 220 160"
      >
        <circle className="fill-utility-gray-100" cx="110" cy="80" r="80" />
        <circle className="fill-utility-gray-100" cx="26" cy="20" r="8" />
        <circle className="fill-utility-gray-100" cx="198" cy="126" r="6" />
        <circle className="fill-utility-gray-100" cx="25" cy="138" r="10" />
        <circle className="fill-utility-gray-100" cx="210" cy="46" r="10" />
        <circle className="fill-utility-gray-100" cx="191" cy="11" r="7" />
        <g filter="url(#filter-01-lg)">
          <mask
            fill="black"
            height="102"
            id="path-01-lg"
            maskUnits="userSpaceOnUse"
            width="176"
            x="23"
            y="15"
          >
            <rect fill="white" height="102" width="176" x="23" y="15" />
            <path
              clipRule="evenodd"
              d="M113.486 16C96.7495 16 81.9448 24.2701 72.9354 36.9466C69.9934 36.2528 66.9253 35.8857 63.7714 35.8857C41.8063 35.8857 24 53.692 24 75.6571C24 97.6223 41.8063 115.429 63.7714 115.429H163.2C182.42 115.429 198 99.8481 198 80.6286C198 61.4091 182.42 45.8286 163.2 45.8286C161.835 45.8286 160.488 45.9072 159.164 46.0601C151.546 28.3784 133.961 16 113.486 16Z"
              fillRule="evenodd"
            />
          </mask>
          <path
            className="fill-bg-secondary"
            clipRule="evenodd"
            d="M113.486 16C96.7495 16 81.9448 24.2701 72.9354 36.9466C69.9934 36.2528 66.9253 35.8857 63.7714 35.8857C41.8063 35.8857 24 53.692 24 75.6571C24 97.6223 41.8063 115.429 63.7714 115.429H163.2C182.42 115.429 198 99.8481 198 80.6286C198 61.4091 182.42 45.8286 163.2 45.8286C161.835 45.8286 160.488 45.9072 159.164 46.0601C151.546 28.3784 133.961 16 113.486 16Z"
            fillRule="evenodd"
          />
          <path
            className="fill-border-secondary_alt"
            d="M72.9354 36.9466L72.7059 37.9199L73.3607 38.0744L73.7505 37.5259L72.9354 36.9466ZM63.7714 115.429V116.429V115.429ZM159.164 46.0601L158.245 46.4558L158.54 47.1389L159.279 47.0535L159.164 46.0601ZM73.7505 37.5259C82.5804 25.102 97.0869 17 113.486 17V15C96.412 15 81.3092 23.4382 72.1203 36.3673L73.7505 37.5259ZM63.7714 36.8857C66.8474 36.8857 69.8386 37.2437 72.7059 37.9199L73.1649 35.9733C70.1483 35.2619 67.0031 34.8857 63.7714 34.8857V36.8857ZM25 75.6571C25 54.2443 42.3586 36.8857 63.7714 36.8857V34.8857C41.254 34.8857 23 53.1397 23 75.6571H25ZM63.7714 114.429C42.3586 114.429 25 97.07 25 75.6571H23C23 98.1746 41.254 116.429 63.7714 116.429V114.429ZM163.2 114.429H63.7714V116.429H163.2V114.429ZM197 80.6286C197 99.2958 181.867 114.429 163.2 114.429V116.429C182.972 116.429 199 100.4 199 80.6286H197ZM163.2 46.8286C181.867 46.8286 197 61.9613 197 80.6286H199C199 60.8568 182.972 44.8286 163.2 44.8286V46.8286ZM159.279 47.0535C160.565 46.905 161.873 46.8286 163.2 46.8286V44.8286C161.796 44.8286 160.411 44.9094 159.049 45.0667L159.279 47.0535ZM113.486 17C133.548 17 150.78 29.1277 158.245 46.4558L160.082 45.6644C152.312 27.6291 134.375 15 113.486 15V17Z"
            mask="url(#path-01-lg)"
          />
          <circle
            cx="63.7714"
            cy="75.6572"
            fill="url(#cloud-gradient-01-lg)"
            r="39.7714"
          />
          <circle
            cx="113.486"
            cy="65.7143"
            fill="url(#cloud-gradient-02-lg)"
            r="49.7143"
          />
          <circle
            cx="163.2"
            cy="80.6286"
            fill="url(#cloud-gradient-03-lg)"
            r="34.8"
          />
        </g>

        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="141.429"
            id="filter-01-lg"
            width="216"
            x="3"
            y="15"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="1.5"
              result="effect-01-lg"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.04 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect-01-lg"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-02-lg"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.03 0"
            />
            <feBlend in2="effect-01-lg" mode="normal" result="effect-02-lg" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="4"
              result="effect-03-lg"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.08 0"
            />
            <feBlend in2="effect-02-lg" mode="normal" result="effect-03-lg" />
            <feBlend
              in="SourceGraphic"
              in2="effect-03-lg"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-01-lg"
            x1="33.2326"
            x2="103.543"
            y1="49.3796"
            y2="115.429"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-02-lg"
            x1="75.3122"
            x2="163.2"
            y1="32.8673"
            y2="115.428"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="cloud-gradient-03-lg"
            x1="136.479"
            x2="198"
            y1="57.6357"
            y2="115.429"
          >
            <stop className="text-utility-gray-200" stopColor="currentColor" />
            <stop
              className="text-utility-gray-50"
              offset="0.350715"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>

      {children && (
        <span
          className={cx(
            "absolute bottom-5 left-1/2 z-10 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-alpha-black/20 text-fg-white backdrop-blur-xs",
            childrenClassName
          )}
        >
          {children}
        </span>
      )}
    </div>
  );
};

const sizes = {
  sm,
  md,
  lg,
};
