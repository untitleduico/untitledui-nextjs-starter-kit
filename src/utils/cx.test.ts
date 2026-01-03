import { describe, expect, it } from "vitest";
import { cx, sortCx } from "./cx";

describe("cx", () => {
  it("merges class names", () => {
    const result = cx("text-sm", "font-bold");
    expect(result).toBe("text-sm font-bold");
  });

  it("handles undefined and null values", () => {
    const result = cx("text-sm", undefined, null, "font-bold");
    expect(result).toBe("text-sm font-bold");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const isDisabled = false;

    const result = cx("base", isActive && "active", isDisabled && "disabled");
    expect(result).toBe("base active");
  });

  it("merges conflicting Tailwind classes correctly", () => {
    const result = cx("text-sm", "text-lg");
    expect(result).toBe("text-lg");
  });

  it("merges custom display text classes", () => {
    const result = cx("text-display-sm", "text-display-lg");
    expect(result).toBe("text-display-lg");
  });

  it("handles empty strings", () => {
    const result = cx("text-sm", "", "font-bold");
    expect(result).toBe("text-sm font-bold");
  });
});

describe("sortCx", () => {
  it("returns the same object passed to it", () => {
    const styles = {
      common: { root: "flex items-center" },
      sizes: { sm: { root: "text-sm" }, lg: { root: "text-lg" } },
    };

    const result = sortCx(styles);
    expect(result).toBe(styles);
  });

  it("preserves nested structure", () => {
    const styles = {
      colors: {
        primary: { root: "bg-blue-500", text: "text-white" },
        secondary: { root: "bg-gray-500", text: "text-black" },
      },
    };

    const result = sortCx(styles);
    expect(result.colors.primary.root).toBe("bg-blue-500");
    expect(result.colors.secondary.text).toBe("text-black");
  });
});
