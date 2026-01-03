"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import {
  ButtonGroup,
  ButtonGroupItem,
} from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";
import type { PaginationRootProps } from "./pagination-base";
import { Pagination } from "./pagination-base";

interface PaginationProps
  extends Partial<Omit<PaginationRootProps, "children">> {
  /** Whether the pagination buttons are rounded. */
  rounded?: boolean;
}

const PaginationItem = ({
  value,
  rounded,
  isCurrent,
}: {
  value: number;
  rounded?: boolean;
  isCurrent: boolean;
}) => {
  return (
    <Pagination.Item
      className={({ isSelected }) =>
        cx(
          "flex size-10 cursor-pointer items-center justify-center p-3 font-medium text-quaternary text-sm outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary focus-visible:z-10 focus-visible:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2",
          rounded ? "rounded-full" : "rounded-lg",
          isSelected && "bg-primary_hover text-secondary"
        )
      }
      isCurrent={isCurrent}
      value={value}
    >
      {value}
    </Pagination.Item>
  );
};

interface MobilePaginationProps {
  /** The current page. */
  page?: number;
  /** The total number of pages. */
  total?: number;
  /** The class name of the pagination component. */
  className?: string;
  /** The function to call when the page changes. */
  onPageChange?: (page: number) => void;
}

const MobilePagination = ({
  page = 1,
  total = 10,
  className,
  onPageChange,
}: MobilePaginationProps) => {
  return (
    <nav
      aria-label="Pagination"
      className={cx("flex items-center justify-between md:hidden", className)}
    >
      <Button
        aria-label="Go to previous page"
        color="secondary"
        iconLeading={ArrowLeft}
        onClick={() => onPageChange?.(Math.max(0, page - 1))}
        size="sm"
      />

      <span className="text-fg-secondary text-sm">
        Page <span className="font-medium">{page}</span> of{" "}
        <span className="font-medium">{total}</span>
      </span>

      <Button
        aria-label="Go to next page"
        color="secondary"
        iconLeading={ArrowRight}
        onClick={() => onPageChange?.(Math.min(total, page + 1))}
        size="sm"
      />
    </nav>
  );
};

export const PaginationPageDefault = ({
  rounded,
  page = 1,
  total = 10,
  className,
  ...props
}: PaginationProps) => {
  const isDesktop = useBreakpoint("md");

  return (
    <Pagination.Root
      {...props}
      className={cx(
        "flex w-full items-center justify-between gap-3 border-secondary border-t pt-4 md:pt-5",
        className
      )}
      page={page}
      total={total}
    >
      <div className="hidden flex-1 justify-start md:flex">
        <Pagination.PrevTrigger asChild>
          <Button color="link-gray" iconLeading={ArrowLeft} size="sm">
            {isDesktop ? "Previous" : undefined}{" "}
          </Button>
        </Pagination.PrevTrigger>
      </div>

      <Pagination.PrevTrigger asChild className="md:hidden">
        <Button color="secondary" iconLeading={ArrowLeft} size="sm">
          {isDesktop ? "Previous" : undefined}
        </Button>
      </Pagination.PrevTrigger>

      <Pagination.Context>
        {({ pages, currentPage, total }) => (
          <>
            <div className="hidden justify-center gap-0.5 md:flex">
              {pages.map((page, index) =>
                page.type === "page" ? (
                  <PaginationItem key={index} rounded={rounded} {...page} />
                ) : (
                  <Pagination.Ellipsis
                    className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                    key={index}
                  >
                    &#8230;
                  </Pagination.Ellipsis>
                )
              )}
            </div>

            <div className="flex justify-center whitespace-pre text-fg-secondary text-sm md:hidden">
              Page <span className="font-medium">{currentPage}</span> of{" "}
              <span className="font-medium">{total}</span>
            </div>
          </>
        )}
      </Pagination.Context>

      <div className="hidden flex-1 justify-end md:flex">
        <Pagination.NextTrigger asChild>
          <Button color="link-gray" iconTrailing={ArrowRight} size="sm">
            {isDesktop ? "Next" : undefined}
          </Button>
        </Pagination.NextTrigger>
      </div>
      <Pagination.NextTrigger asChild className="md:hidden">
        <Button color="secondary" iconTrailing={ArrowRight} size="sm">
          {isDesktop ? "Next" : undefined}
        </Button>
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
};

export const PaginationPageMinimalCenter = ({
  rounded,
  page = 1,
  total = 10,
  className,
  ...props
}: PaginationProps) => {
  const isDesktop = useBreakpoint("md");

  return (
    <Pagination.Root
      {...props}
      className={cx(
        "flex w-full items-center justify-between gap-3 border-secondary border-t pt-4 md:pt-5",
        className
      )}
      page={page}
      total={total}
    >
      <div className="flex flex-1 justify-start">
        <Pagination.PrevTrigger asChild>
          <Button color="secondary" iconLeading={ArrowLeft} size="sm">
            {isDesktop ? "Previous" : undefined}
          </Button>
        </Pagination.PrevTrigger>
      </div>

      <Pagination.Context>
        {({ pages, currentPage, total }) => (
          <>
            <div className="hidden justify-center gap-0.5 md:flex">
              {pages.map((page, index) =>
                page.type === "page" ? (
                  <PaginationItem key={index} rounded={rounded} {...page} />
                ) : (
                  <Pagination.Ellipsis
                    className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                    key={index}
                  >
                    &#8230;
                  </Pagination.Ellipsis>
                )
              )}
            </div>

            <div className="flex justify-center whitespace-pre text-fg-secondary text-sm md:hidden">
              Page <span className="font-medium">{currentPage}</span> of{" "}
              <span className="font-medium">{total}</span>
            </div>
          </>
        )}
      </Pagination.Context>

      <div className="flex flex-1 justify-end">
        <Pagination.NextTrigger asChild>
          <Button color="secondary" iconTrailing={ArrowRight} size="sm">
            {isDesktop ? "Next" : undefined}
          </Button>
        </Pagination.NextTrigger>
      </div>
    </Pagination.Root>
  );
};

export const PaginationCardDefault = ({
  rounded,
  page = 1,
  total = 10,
  ...props
}: PaginationProps) => {
  const isDesktop = useBreakpoint("md");

  return (
    <Pagination.Root
      {...props}
      className="flex w-full items-center justify-between gap-3 border-secondary border-t px-4 py-3 md:px-6 md:pt-3 md:pb-4"
      page={page}
      total={total}
    >
      <div className="flex flex-1 justify-start">
        <Pagination.PrevTrigger asChild>
          <Button color="secondary" iconLeading={ArrowLeft} size="sm">
            {isDesktop ? "Previous" : undefined}
          </Button>
        </Pagination.PrevTrigger>
      </div>

      <Pagination.Context>
        {({ pages, currentPage, total }) => (
          <>
            <div className="hidden justify-center gap-0.5 md:flex">
              {pages.map((page, index) =>
                page.type === "page" ? (
                  <PaginationItem key={index} rounded={rounded} {...page} />
                ) : (
                  <Pagination.Ellipsis
                    className="flex size-10 shrink-0 items-center justify-center text-tertiary"
                    key={index}
                  >
                    &#8230;
                  </Pagination.Ellipsis>
                )
              )}
            </div>

            <div className="flex justify-center whitespace-pre text-fg-secondary text-sm md:hidden">
              Page <span className="font-medium">{currentPage}</span> of{" "}
              <span className="font-medium">{total}</span>
            </div>
          </>
        )}
      </Pagination.Context>

      <div className="flex flex-1 justify-end">
        <Pagination.NextTrigger asChild>
          <Button color="secondary" iconTrailing={ArrowRight} size="sm">
            {isDesktop ? "Next" : undefined}
          </Button>
        </Pagination.NextTrigger>
      </div>
    </Pagination.Root>
  );
};

interface PaginationCardMinimalProps {
  /** The current page. */
  page?: number;
  /** The total number of pages. */
  total?: number;
  /** The alignment of the pagination. */
  align?: "left" | "center" | "right";
  /** The class name of the pagination component. */
  className?: string;
  /** The function to call when the page changes. */
  onPageChange?: (page: number) => void;
}

export const PaginationCardMinimal = ({
  page = 1,
  total = 10,
  align = "left",
  onPageChange,
  className,
}: PaginationCardMinimalProps) => {
  return (
    <div
      className={cx(
        "border-secondary border-t px-4 py-3 md:px-6 md:pt-3 md:pb-4",
        className
      )}
    >
      <MobilePagination onPageChange={onPageChange} page={page} total={total} />

      <nav
        aria-label="Pagination"
        className={cx(
          "hidden items-center gap-3 md:flex",
          align === "center" && "justify-between"
        )}
      >
        <div className={cx(align === "center" && "flex flex-1 justify-start")}>
          <Button
            color="secondary"
            isDisabled={page === 1}
            onClick={() => onPageChange?.(Math.max(0, page - 1))}
            size="sm"
          >
            Previous
          </Button>
        </div>

        <span
          className={cx(
            "font-medium text-fg-secondary text-sm",
            align === "right" && "order-first mr-auto",
            align === "left" && "order-last ml-auto"
          )}
        >
          Page {page} of {total}
        </span>

        <div className={cx(align === "center" && "flex flex-1 justify-end")}>
          <Button
            color="secondary"
            isDisabled={page === total}
            onClick={() => onPageChange?.(Math.min(total, page + 1))}
            size="sm"
          >
            Next
          </Button>
        </div>
      </nav>
    </div>
  );
};

interface PaginationButtonGroupProps
  extends Partial<Omit<PaginationRootProps, "children">> {
  /** The alignment of the pagination. */
  align?: "left" | "center" | "right";
}

export const PaginationButtonGroup = ({
  align = "left",
  page = 1,
  total = 10,
  ...props
}: PaginationButtonGroupProps) => {
  const isDesktop = useBreakpoint("md");

  return (
    <div
      className={cx(
        "flex border-secondary border-t px-4 py-3 md:px-6 md:pt-3 md:pb-4",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end"
      )}
    >
      <Pagination.Root {...props} page={page} total={total}>
        <Pagination.Context>
          {({ pages }) => (
            <ButtonGroup size="md">
              <Pagination.PrevTrigger asChild>
                <ButtonGroupItem iconLeading={ArrowLeft}>
                  {isDesktop ? "Previous" : undefined}
                </ButtonGroupItem>
              </Pagination.PrevTrigger>

              {pages.map((page, index) =>
                page.type === "page" ? (
                  <Pagination.Item key={index} {...page} asChild>
                    <ButtonGroupItem
                      className="size-10 items-center justify-center"
                      isSelected={page.isCurrent}
                    >
                      {page.value}
                    </ButtonGroupItem>
                  </Pagination.Item>
                ) : (
                  <Pagination.Ellipsis key={index}>
                    <ButtonGroupItem className="pointer-events-none size-10 items-center justify-center rounded-none!">
                      &#8230;
                    </ButtonGroupItem>
                  </Pagination.Ellipsis>
                )
              )}

              <Pagination.NextTrigger asChild>
                <ButtonGroupItem iconTrailing={ArrowRight}>
                  {isDesktop ? "Next" : undefined}
                </ButtonGroupItem>
              </Pagination.NextTrigger>
            </ButtonGroup>
          )}
        </Pagination.Context>
      </Pagination.Root>
    </div>
  );
};
