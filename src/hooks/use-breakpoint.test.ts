import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useBreakpoint } from "./use-breakpoint";

describe("useBreakpoint", () => {
  let mockMatchMedia: ReturnType<typeof vi.fn>;
  let mockMediaQueryList: {
    matches: boolean;
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
    media: string;
  };
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    mockMediaQueryList = {
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      media: "",
    };

    mockMatchMedia = vi.fn().mockReturnValue(mockMediaQueryList);
    originalMatchMedia = window.matchMedia;
    window.matchMedia = mockMatchMedia as unknown as typeof window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    vi.restoreAllMocks();
  });

  it("should return false when breakpoint does not match", () => {
    mockMediaQueryList.matches = false;
    const { result } = renderHook(() => useBreakpoint("md"));

    expect(result.current).toBe(false);
    expect(mockMatchMedia).toHaveBeenCalledWith("(min-width: 768px)");
  });

  it("should return true when breakpoint matches", () => {
    mockMediaQueryList.matches = true;
    const { result } = renderHook(() => useBreakpoint("lg"));

    expect(result.current).toBe(true);
    expect(mockMatchMedia).toHaveBeenCalledWith("(min-width: 1024px)");
  });

  it("should handle all breakpoint sizes", () => {
    const breakpoints = {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    };

    for (const [size, width] of Object.entries(breakpoints)) {
      renderHook(() =>
        useBreakpoint(size as "sm" | "md" | "lg" | "xl" | "2xl")
      );
      expect(mockMatchMedia).toHaveBeenCalledWith(`(min-width: ${width})`);
    }
  });

  it("should add event listener on mount", () => {
    renderHook(() => useBreakpoint("md"));

    expect(mockMediaQueryList.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("should remove event listener on unmount", () => {
    const { unmount } = renderHook(() => useBreakpoint("md"));

    unmount();

    expect(mockMediaQueryList.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("should update when breakpoint changes", () => {
    // biome-ignore lint/suspicious/noEmptyBlockStatements: Placeholder that gets assigned in mock
    let changeHandler: (event: { matches: boolean }) => void = () => {};

    mockMediaQueryList.addEventListener.mockImplementation(
      (event: string, handler: (event: { matches: boolean }) => void) => {
        if (event === "change") {
          changeHandler = handler;
        }
      }
    );

    const { result } = renderHook(() => useBreakpoint("md"));

    expect(result.current).toBe(false);

    act(() => {
      changeHandler({ matches: true });
    });

    expect(result.current).toBe(true);
  });
});
