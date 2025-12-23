"use client";

import type { CalendarDate } from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { Fragment, useContext, useState } from "react";
import { useDateFormatter } from "react-aria";
import type {
  RangeCalendarProps as AriaRangeCalendarProps,
  DateValue,
} from "react-aria-components";
import {
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarContext,
  RangeCalendarStateContext,
  useSlottedContext,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { CalendarCell } from "./cell";
import { DateInput } from "./date-input";

export const RangeCalendarContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [value, onChange] = useState<{
    start: DateValue;
    end: DateValue;
  } | null>(null);
  const [focusedValue, onFocusChange] = useState<DateValue | undefined>();

  return (
    <RangeCalendarContext.Provider
      value={{ value, onChange, focusedValue, onFocusChange }}
    >
      {children}
    </RangeCalendarContext.Provider>
  );
};

const RangeCalendarTitle = ({ part }: { part: "start" | "end" }) => {
  const context = useContext(RangeCalendarStateContext);

  if (!context) {
    throw new Error(
      "<RangeCalendarTitle /> must be used within a <RangeCalendar /> component."
    );
  }

  const formatter = useDateFormatter({
    month: "long",
    year: "numeric",
    calendar: context.visibleRange.start.calendar.identifier,
    timeZone: context.timeZone,
  });

  return part === "start"
    ? formatter.format(context.visibleRange.start.toDate(context.timeZone))
    : formatter.format(context.visibleRange.end.toDate(context.timeZone));
};

const MobilePresetButton = ({
  value,
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  value: { start: DateValue; end: DateValue };
}) => {
  const context = useContext(RangeCalendarStateContext);

  return (
    <Button
      {...props}
      color="link-color"
      onClick={() => {
        context?.setValue(value);
        context?.setFocusedDate(value.start as CalendarDate);
      }}
      size="sm"
      slot={null}
    >
      {children}
    </Button>
  );
};

interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
  /** The dates to highlight. */
  highlightedDates?: DateValue[];
  /** The date presets to display. */
  presets?: Record<
    string,
    { label: string; value: { start: DateValue; end: DateValue } }
  >;
}

export const RangeCalendar = ({ presets, ...props }: RangeCalendarProps) => {
  const isDesktop = useBreakpoint("md");
  const context = useSlottedContext(RangeCalendarContext);

  const ContextWrapper = context ? Fragment : RangeCalendarContextProvider;

  return (
    <ContextWrapper>
      <AriaRangeCalendar
        className="flex items-start"
        visibleDuration={{
          months: isDesktop ? 2 : 1,
        }}
        {...props}
      >
        <div className="flex flex-col gap-3 px-6 py-5">
          <header className="relative flex items-center justify-between md:justify-start">
            <Button
              className="size-8"
              color="tertiary"
              iconLeading={ChevronLeft}
              size="sm"
              slot="previous"
            />

            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-fg-secondary text-sm">
              <RangeCalendarTitle part="start" />
            </h2>

            <Button
              className="size-8 md:hidden"
              color="tertiary"
              iconLeading={ChevronRight}
              size="sm"
              slot="next"
            />
          </header>

          {!isDesktop && (
            <div className="flex items-center gap-2 md:hidden">
              <DateInput className="flex-1" slot="start" />
              <div className="text-md text-quaternary">–</div>
              <DateInput className="flex-1" slot="end" />
            </div>
          )}

          {!isDesktop && presets && (
            <div className="mt-1 flex justify-between gap-3 px-2 md:hidden">
              {Object.values(presets).map((preset) => (
                <MobilePresetButton key={preset.label} value={preset.value}>
                  {preset.label}
                </MobilePresetButton>
              ))}
            </div>
          )}

          <AriaCalendarGrid className="w-max" weekdayStyle="short">
            <AriaCalendarGridHeader>
              {(day) => (
                <AriaCalendarHeaderCell className="border-transparent border-b-4 p-0">
                  <div className="flex size-10 items-center justify-center font-medium text-secondary text-sm">
                    {day.slice(0, 2)}
                  </div>
                </AriaCalendarHeaderCell>
              )}
            </AriaCalendarGridHeader>
            <AriaCalendarGridBody className="[&_td]:p-0 [&_tr:last-of-type]:border-none [&_tr]:border-transparent [&_tr]:border-b-4">
              {(date) => <CalendarCell date={date} />}
            </AriaCalendarGridBody>
          </AriaCalendarGrid>
        </div>

        {isDesktop && (
          <div className="flex flex-col gap-3 border-secondary border-l px-6 py-5">
            <header className="relative flex items-center justify-end">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-fg-secondary text-sm">
                <RangeCalendarTitle part="end" />
              </h2>

              <Button
                className="size-8"
                color="tertiary"
                iconLeading={ChevronRight}
                size="sm"
                slot="next"
              />
            </header>

            <AriaCalendarGrid
              className="w-max"
              offset={{ months: 1 }}
              weekdayStyle="short"
            >
              <AriaCalendarGridHeader>
                {(day) => (
                  <AriaCalendarHeaderCell className="border-transparent border-b-4 p-0">
                    <div className="flex size-10 items-center justify-center font-medium text-secondary text-sm">
                      {day.slice(0, 2)}
                    </div>
                  </AriaCalendarHeaderCell>
                )}
              </AriaCalendarGridHeader>
              <AriaCalendarGridBody className="[&_td]:p-0 [&_tr:last-of-type]:border-none [&_tr]:border-transparent [&_tr]:border-b-4">
                {(date) => <CalendarCell date={date} />}
              </AriaCalendarGridBody>
            </AriaCalendarGrid>
          </div>
        )}
      </AriaRangeCalendar>
    </ContextWrapper>
  );
};
