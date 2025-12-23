"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import type { ComponentPropsWithRef } from "react";
import { createContext, useContext, useId } from "react";
import { cx } from "@/utils/cx";

interface PinInputContextType {
  size: "sm" | "md" | "lg";
  disabled: boolean;
  id: string;
}

const PinInputContext = createContext<PinInputContextType>({
  size: "sm",
  id: "",
  disabled: false,
});

export const usePinInputContext = () => {
  const context = useContext(PinInputContext);

  if (!context) {
    throw new Error(
      "The 'usePinInputContext' hook must be used within a '<PinInput />'"
    );
  }

  return context;
};

interface RootProps extends ComponentPropsWithRef<"div"> {
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Root = ({
  className,
  size = "md",
  disabled = false,
  ...props
}: RootProps) => {
  const id = useId();

  return (
    <PinInputContext.Provider value={{ size, disabled, id }}>
      {/* biome-ignore lint/a11y/useSemanticElements: Using div with role="group" for flexible styling instead of fieldset */}
      <div
        className={cx("flex h-max flex-col gap-1.5", className)}
        role="group"
        {...props}
      />
    </PinInputContext.Provider>
  );
};
Root.displayName = "Root";

type GroupProps = ComponentPropsWithRef<typeof OTPInput> & {
  width?: number;
  inputClassName?: string;
};

const Group = ({
  inputClassName,
  containerClassName,
  width,
  maxLength = 4,
  ...props
}: GroupProps) => {
  const { id, size, disabled } = usePinInputContext();

  const heights = {
    sm: "h-16.5",
    md: "h-20.5",
    lg: "h-24.5",
  };

  return (
    <OTPInput
      {...props}
      aria-describedby={`pin-input-description-${id}`}
      aria-label="Enter your pin"
      aria-labelledby={`pin-input-label-${id}`}
      className={cx("w-full! disabled:cursor-not-allowed", inputClassName)}
      containerClassName={cx(
        "flex flex-row gap-3",
        size === "sm" && "gap-2",
        heights[size],
        containerClassName
      )}
      disabled={disabled}
      id={`pin-input-${id}`}
      maxLength={maxLength}
      size={width}
    />
  );
};
Group.displayName = "Group";

const sizes = {
  sm: "size-16 px-2 py-0.5 text-display-lg font-medium",
  md: "size-20 px-2 py-2.5 text-display-lg font-medium",
  lg: "size-24 px-2 py-3 text-display-xl font-medium",
};

const FakeCaret = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <div
      className={cx(
        "pointer-events-none h-[1em] w-0.5 animate-caret-blink bg-fg-brand-primary",
        size === "lg"
          ? "font-medium text-display-xl"
          : "font-medium text-display-lg"
      )}
    />
  );
};

const getSlotContent = (
  slot: { char: string | null; hasFakeCaret: boolean } | undefined,
  size: "sm" | "md" | "lg"
) => {
  if (slot?.char) {
    return slot.char;
  }
  if (slot?.hasFakeCaret) {
    return <FakeCaret size={size} />;
  }
  return 0;
};

const Slot = ({
  index,
  className,
  ...props
}: ComponentPropsWithRef<"div"> & { index: number }) => {
  const { size, disabled } = usePinInputContext();
  const { slots, isFocused } = useContext(OTPInputContext);
  const slot = slots[index];

  return (
    // biome-ignore lint/a11y/useAriaPropsSupportedByRole: aria-label provides context for screen readers on pin digit slots
    <div
      {...props}
      aria-label={`Enter digit ${index + 1} of ${slots.length}`}
      className={cx(
        "relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder_subtle shadow-xs ring-1 ring-primary ring-inset transition-[box-shadow,background-color] duration-100 ease-linear",
        sizes[size],
        isFocused &&
          slot?.isActive &&
          "outline-2 outline-brand outline-offset-2 ring-2 ring-brand",
        slot?.char && "text-brand-tertiary_alt ring-2 ring-brand",
        disabled && "bg-disabled_subtle text-fg-disabled_subtle ring-disabled",
        className
      )}
    >
      {getSlotContent(slot, size)}
    </div>
  );
};
Slot.displayName = "Slot";

const Separator = (props: ComponentPropsWithRef<"p">) => {
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: Decorative separator between pin digits, not interactive
    // biome-ignore lint/a11y/useSemanticElements: Using styled div for visual separator between pin digits
    <div
      // biome-ignore lint/a11y/useAriaPropsForRole: Decorative visual separator, aria value not required
      role="separator"
      {...props}
      className={cx(
        "text-center font-medium text-display-xl text-placeholder_subtle",
        props.className
      )}
    >
      -
    </div>
  );
};
Separator.displayName = "Separator";

const Label = ({ className, ...props }: ComponentPropsWithRef<"label">) => {
  const { id } = usePinInputContext();

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Label content is passed via children props
    <label
      {...props}
      className={cx("font-medium text-secondary text-sm", className)}
      htmlFor={`pin-input-${id}`}
      id={`pin-input-label-${id}`}
    />
  );
};
Label.displayName = "Label";

const Description = ({ className, ...props }: ComponentPropsWithRef<"p">) => {
  const { id } = usePinInputContext();

  return (
    <p
      {...props}
      className={cx("text-sm text-tertiary", className)}
      id={`pin-input-description-${id}`}
    />
  );
};
Description.displayName = "Description";

const PinInput = Root as typeof Root & {
  Slot: typeof Slot;
  Label: typeof Label;
  Group: typeof Group;
  Separator: typeof Separator;
  Description: typeof Description;
};
PinInput.Slot = Slot;
PinInput.Label = Label;
PinInput.Group = Group;
PinInput.Separator = Separator;
PinInput.Description = Description;

export { PinInput };
