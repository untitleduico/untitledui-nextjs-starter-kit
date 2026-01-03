"use client";

import {
  type CalendarDate,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { Fragment, useContext, useState } from "react";
import type {
  CalendarProps as AriaCalendarProps,
  DateValue,
} from "react-aria-components";
import {
  Calendar as AriaCalendar,
  CalendarContext as AriaCalendarContext,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarStateContext as AriaCalendarStateContext,
  Heading as AriaHeading,
  useSlottedContext,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { CalendarCell } from "./cell";
import { DateInput } from "./date-input";

export const CalendarContextProvider = ({ children }: PropsWithChildren) => {
  const [value, onChange] = useState<DateValue | null>(null);
  const [focusedValue, onFocusChange] = useState<DateValue | undefined>();

  return (
    <AriaCalendarContext.Provider
      value={{ value, onChange, focusedValue, onFocusChange }}
    >
      {children}
    </AriaCalendarContext.Provider>
  );
};

const PresetButton = ({
  value,
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { value: CalendarDate }) => {
  const context = useContext(AriaCalendarStateContext);

  if (!context) {
    throw new Error("Preset must be used within a Calendar component");
  }

  const handleClick = () => {
    context.setValue(value);
    context.setFocusedDate(value);
  };

  return (
    <Button
      {...props}
      // It's important to give `null` explicitly to the `slot` prop
      // otherwise the button will throw an error due to not using one of
      // the required slots inside the Calendar component.
      // Passing `null` will tell the button to not use a slot context.
      color="secondary"
      onClick={handleClick}
      size="md"
      slot={null}
    >
      {children}
    </Button>
  );
};

interface CalendarProps extends AriaCalendarProps<DateValue> {
  /** The dates to highlight. */
  highlightedDates?: DateValue[];
}

export const Calendar = ({
  highlightedDates,
  className,
  ...props
}: CalendarProps) => {
  const context = useSlottedContext(AriaCalendarContext)!;

  const ContextWrapper = context ? Fragment : CalendarContextProvider;

  return (
    <ContextWrapper>
      <AriaCalendar
        {...props}
        className={(state) =>
          cx(
            "flex flex-col gap-3",
            typeof className === "function" ? className(state) : className
          )
        }
      >
        <header className="flex items-center justify-between">
          <Button
            className="size-8"
            color="tertiary"
            iconLeading={ChevronLeft}
            size="sm"
            slot="previous"
          />
          <AriaHeading className="font-semibold text-fg-secondary text-sm" />
          <Button
            className="size-8"
            color="tertiary"
            iconLeading={ChevronRight}
            size="sm"
            slot="next"
          />
        </header>

        <div className="flex gap-3">
          <DateInput className="flex-1" />
          <PresetButton value={today(getLocalTimeZone())}>Today</PresetButton>
        </div>

        <AriaCalendarGrid className="w-max" weekdayStyle="short">
          <AriaCalendarGridHeader className="border-transparent border-b-4">
            {(day) => (
              <AriaCalendarHeaderCell className="p-0">
                <div className="flex size-10 items-center justify-center font-medium text-secondary text-sm">
                  {day.slice(0, 2)}
                </div>
              </AriaCalendarHeaderCell>
            )}
          </AriaCalendarGridHeader>
          <AriaCalendarGridBody className="[&_td]:p-0 [&_tr:last-of-type]:border-none [&_tr]:border-transparent [&_tr]:border-b-4">
            {(date) => (
              <CalendarCell
                date={date}
                isHighlighted={highlightedDates?.some(
                  (highlightedDate) => date.compare(highlightedDate) === 0
                )}
              />
            )}
          </AriaCalendarGridBody>
        </AriaCalendarGrid>
      </AriaCalendar>
    </ContextWrapper>
  );
};
