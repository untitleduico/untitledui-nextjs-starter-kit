import { describe, expect, it } from "vitest";
import { cx, sortCx } from "./cx";

describe("cx (tailwind-merge)", () => {
  it("should merge simple class strings", () => {
    const result = cx("text-red-500", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conflicting classes by keeping the last one", () => {
    const result = cx("text-red-500", "text-blue-500");
    expect(result).toBe("text-blue-500");
  });

  it("should handle undefined and null values", () => {
    const result = cx("text-red-500", undefined, null, "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("should handle empty strings", () => {
    const result = cx("text-red-500", "", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const isActive = true;
    const isDisabled = false;
    const result = cx(
      "base-class",
      isActive && "active",
      isDisabled && "disabled"
    );
    expect(result).toBe("base-class active");
  });

  it("should handle custom display text sizes", () => {
    const result = cx("text-display-xs", "text-display-2xl");
    expect(result).toBe("text-display-2xl");
  });

  it("should merge padding classes correctly", () => {
    const result = cx("p-4", "px-6");
    expect(result).toBe("p-4 px-6");
  });

  it("should handle margin conflicts", () => {
    const result = cx("m-4", "m-8");
    expect(result).toBe("m-8");
  });

  it("should preserve non-conflicting classes", () => {
    const result = cx("flex", "items-center", "justify-between", "gap-4");
    expect(result).toBe("flex items-center justify-between gap-4");
  });
});

describe("sortCx", () => {
  it("should return the same object passed to it", () => {
    const styles = {
      root: "flex items-center",
      icon: "size-4",
    };
    expect(sortCx(styles)).toEqual(styles);
  });

  it("should handle nested objects", () => {
    const styles = {
      common: {
        root: "flex",
        icon: "size-4",
      },
      sizes: {
        sm: {
          root: "text-sm",
        },
        md: {
          root: "text-md",
        },
      },
    };
    expect(sortCx(styles)).toEqual(styles);
  });

  it("should handle number values", () => {
    const styles = {
      size: 16,
      opacity: 0.5,
    };
    expect(sortCx(styles)).toEqual(styles);
  });
});
