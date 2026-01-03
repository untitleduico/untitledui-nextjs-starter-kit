"use client";

import {
  endOfMonth,
  endOfWeek,
  getLocalTimeZone,
  startOfMonth,
  startOfWeek,
  today,
} from "@internationalized/date";
import { useControlledState } from "@react-stately/utils";
import { Calendar as CalendarIcon } from "@untitledui/icons";
import { useMemo, useState } from "react";
import { useDateFormatter } from "react-aria";
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
} from "react-aria-components";
import {
  DateRangePicker as AriaDateRangePicker,
  Dialog as AriaDialog,
  Group as AriaGroup,
  Popover as AriaPopover,
  useLocale,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { DateInput } from "./date-input";
import { RangeCalendar } from "./range-calendar";
import { RangePresetButton } from "./range-preset";

const now = today(getLocalTimeZone());

const highlightedDates = [today(getLocalTimeZone())];

interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
  /** The function to call when the apply button is clicked. */
  onApply?: () => void;
  /** The function to call when the cancel button is clicked. */
  onCancel?: () => void;
}

export const DateRangePicker = ({
  value: valueProp,
  defaultValue,
  onChange,
  onApply,
  onCancel,
  ...props
}: DateRangePickerProps) => {
  const { locale } = useLocale();
  const formatter = useDateFormatter({
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const [value, setValue] = useControlledState(
    valueProp,
    defaultValue || null,
    onChange
  );
  const [focusedValue, setFocusedValue] = useState<DateValue | null>(null);

  const formattedStartDate = value?.start
    ? formatter.format(value.start.toDate(getLocalTimeZone()))
    : "Select date";
  const formattedEndDate = value?.end
    ? formatter.format(value.end.toDate(getLocalTimeZone()))
    : "Select date";

  const presets = useMemo(
    () => ({
      today: { label: "Today", value: { start: now, end: now } },
      yesterday: {
        label: "Yesterday",
        value: {
          start: now.subtract({ days: 1 }),
          end: now.subtract({ days: 1 }),
        },
      },
      thisWeek: {
        label: "This week",
        value: { start: startOfWeek(now, locale), end: endOfWeek(now, locale) },
      },
      lastWeek: {
        label: "Last week",
        value: {
          start: startOfWeek(now, locale).subtract({ weeks: 1 }),
          end: endOfWeek(now, locale).subtract({ weeks: 1 }),
        },
      },
      thisMonth: {
        label: "This month",
        value: { start: startOfMonth(now), end: endOfMonth(now) },
      },
      lastMonth: {
        label: "Last month",
        value: {
          start: startOfMonth(now).subtract({ months: 1 }),
          end: endOfMonth(now).subtract({ months: 1 }),
        },
      },
      thisYear: {
        label: "This year",
        value: {
          start: startOfMonth(now.set({ month: 1 })),
          end: endOfMonth(now.set({ month: 12 })),
        },
      },
      lastYear: {
        label: "Last year",
        value: {
          start: startOfMonth(now.set({ month: 1 }).subtract({ years: 1 })),
          end: endOfMonth(now.set({ month: 12 }).subtract({ years: 1 })),
        },
      },
      allTime: {
        label: "All time",
        value: {
          start: now.set({ year: 2000, month: 1, day: 1 }),
          end: now,
        },
      },
    }),
    [locale]
  );

  return (
    <AriaDateRangePicker
      aria-label="Date range picker"
      shouldCloseOnSelect={false}
      {...props}
      onChange={setValue}
      value={value}
    >
      <AriaGroup>
        <Button color="secondary" iconLeading={CalendarIcon} size="md">
          {value ? (
            `${formattedStartDate} – ${formattedEndDate}`
          ) : (
            <span className="text-placeholder">Select dates</span>
          )}
        </Button>
      </AriaGroup>
      <AriaPopover
        className={({ isEntering, isExiting }) =>
          cx(
            "origin-(--trigger-anchor-point) will-change-transform",
            isEntering &&
              "fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5 animate-in duration-150 ease-out",
            isExiting &&
              "fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5 animate-out duration-100 ease-in"
          )
        }
        offset={8}
        placement="bottom right"
      >
        <AriaDialog className="flex rounded-2xl bg-primary shadow-xl ring ring-secondary_alt focus:outline-hidden">
          {({ close }) => (
            <>
              <div className="hidden w-38 flex-col gap-0.5 border-secondary border-r border-solid p-3 lg:flex">
                {Object.values(presets).map((preset) => (
                  <RangePresetButton
                    key={preset.label}
                    onClick={() => {
                      setValue(preset.value);
                      setFocusedValue(preset.value.start);
                    }}
                    value={preset.value}
                  >
                    {preset.label}
                  </RangePresetButton>
                ))}
              </div>
              <div className="flex flex-col">
                <RangeCalendar
                  focusedValue={focusedValue}
                  highlightedDates={highlightedDates}
                  onFocusChange={setFocusedValue}
                  presets={{
                    lastWeek: presets.lastWeek,
                    lastMonth: presets.lastMonth,
                    lastYear: presets.lastYear,
                  }}
                />
                <div className="flex justify-between gap-3 border-secondary border-t p-4">
                  <div className="hidden items-center gap-3 md:flex">
                    <DateInput className="w-36" slot="start" />
                    <div className="text-md text-quaternary">–</div>
                    <DateInput className="w-36" slot="end" />
                  </div>
                  <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto">
                    <Button
                      color="secondary"
                      onClick={() => {
                        onCancel?.();
                        close();
                      }}
                      size="md"
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => {
                        onApply?.();
                        close();
                      }}
                      size="md"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </AriaDialog>
      </AriaPopover>
    </AriaDateRangePicker>
  );
};
