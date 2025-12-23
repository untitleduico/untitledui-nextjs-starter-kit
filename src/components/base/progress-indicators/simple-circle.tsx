"use client";

export const CircleProgressBar = (props: {
  value: number;
  min?: 0;
  max?: 100;
}) => {
  const { value, min = 0, max = 100 } = props;
  const percentage = ((value - min) * 100) / (max - min);

  return (
    <div
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className="relative flex w-max items-center justify-center"
      role="progressbar"
    >
      <span className="absolute font-medium text-primary text-sm">
        {percentage}%
      </span>
      <svg className="size-16 -rotate-90" viewBox="0 0 60 60">
        <circle
          className="stroke-bg-quaternary"
          cx="30"
          cy="30"
          fill="none"
          r="26"
          strokeWidth="6"
        />
        <circle
          className="stroke-fg-brand-primary"
          cx="30"
          cy="30"
          fill="none"
          pathLength="100"
          r="26"
          strokeDasharray="100"
          strokeLinecap="round"
          strokeWidth="6"
          style={{
            strokeDashoffset: `calc(100 - ${percentage})`,
          }}
        />
      </svg>
    </div>
  );
};
