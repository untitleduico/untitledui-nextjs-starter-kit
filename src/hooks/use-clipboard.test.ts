import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useClipboard } from "./use-clipboard";

describe("useClipboard", () => {
  const originalClipboard = navigator.clipboard;
  const originalIsSecureContext = window.isSecureContext;
  const mockWriteText = vi.fn();

  beforeEach(() => {
    mockWriteText.mockReset();

    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: mockWriteText,
      },
      writable: true,
      configurable: true,
    });

    Object.defineProperty(window, "isSecureContext", {
      value: true,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: originalClipboard,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(window, "isSecureContext", {
      value: originalIsSecureContext,
      writable: true,
      configurable: true,
    });
    vi.restoreAllMocks();
  });

  it("should initialize with copied as false", () => {
    const { result } = renderHook(() => useClipboard());
    expect(result.current.copied).toBe(false);
  });

  it("should copy text successfully using modern clipboard API", async () => {
    mockWriteText.mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useClipboard());

    let copyResult: { success: boolean; error?: Error } | undefined;
    await act(async () => {
      copyResult = await result.current.copy("test text");
    });

    expect(copyResult?.success).toBe(true);
    expect(result.current.copied).toBe(true);
    expect(mockWriteText).toHaveBeenCalledWith("test text");
  });

  it("should set copied to true after successful copy", async () => {
    mockWriteText.mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useClipboard());

    await act(async () => {
      await result.current.copy("test");
    });

    expect(result.current.copied).toBe(true);
  });
});
