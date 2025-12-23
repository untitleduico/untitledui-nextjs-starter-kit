import { renderHook } from "@testing-library/react";
import type { RefObject } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useResizeObserver } from "./use-resize-observer";

describe("useResizeObserver", () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let mockResizeObserverCallback: ResizeObserverCallback;
  let originalResizeObserver: typeof ResizeObserver;

  beforeEach(() => {
    mockObserve = vi.fn();
    mockUnobserve = vi.fn();
    mockDisconnect = vi.fn();
    originalResizeObserver = global.ResizeObserver;

    class MockResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        mockResizeObserverCallback = callback;
      }
      observe = mockObserve;
      unobserve = mockUnobserve;
      disconnect = mockDisconnect;
    }

    (
      global as unknown as { ResizeObserver: typeof MockResizeObserver }
    ).ResizeObserver = MockResizeObserver;
  });

  afterEach(() => {
    global.ResizeObserver = originalResizeObserver;
    vi.restoreAllMocks();
  });

  it("should observe element when ref is provided", () => {
    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref, onResize }));

    expect(mockObserve).toHaveBeenCalledWith(element, { box: undefined });
  });

  it("should not observe when ref is undefined", () => {
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref: undefined, onResize }));

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it("should not observe when ref.current is null", () => {
    const ref = { current: null } as unknown as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref, onResize }));

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it("should call onResize when resize is observed", () => {
    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref, onResize }));

    mockResizeObserverCallback(
      [{} as ResizeObserverEntry],
      {} as ResizeObserver
    );

    expect(onResize).toHaveBeenCalled();
  });

  it("should not call onResize when entries are empty", () => {
    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref, onResize }));

    mockResizeObserverCallback([], {} as ResizeObserver);

    expect(onResize).not.toHaveBeenCalled();
  });

  it("should unobserve element on unmount", () => {
    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    const { unmount } = renderHook(() => useResizeObserver({ ref, onResize }));

    unmount();

    expect(mockUnobserve).toHaveBeenCalledWith(element);
  });

  it("should pass box option to observe", () => {
    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    renderHook(() => useResizeObserver({ ref, onResize, box: "border-box" }));

    expect(mockObserve).toHaveBeenCalledWith(element, { box: "border-box" });
  });

  it("should fallback to window resize event when ResizeObserver is not available", () => {
    (
      global as unknown as { ResizeObserver: typeof ResizeObserver | undefined }
    ).ResizeObserver = undefined;

    const windowAddEventListener = vi.spyOn(globalThis, "addEventListener");
    const windowRemoveEventListener = vi.spyOn(
      globalThis,
      "removeEventListener"
    );

    const element = document.createElement("div");
    const ref = { current: element } as RefObject<HTMLDivElement>;
    const onResize = vi.fn();

    const { unmount } = renderHook(() => useResizeObserver({ ref, onResize }));

    expect(windowAddEventListener).toHaveBeenCalledWith(
      "resize",
      onResize,
      false
    );

    unmount();

    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      "resize",
      onResize,
      false
    );
  });
});
