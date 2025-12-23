import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button, styles } from "./button";

// Mock icon component
const MockIcon = ({ className }: { className?: string }) => (
  <svg className={className} data-testid="mock-icon" />
);

describe("Button", () => {
  describe("rendering", () => {
    it("should render children text", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("should render as a button by default", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render as a link when href is provided", () => {
      render(<Button href="/test">Link</Button>);
      expect(screen.getByRole("link")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
    });

    it("should have type='button' by default for non-link buttons", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("should allow overriding the type attribute", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });
  });

  describe("sizes", () => {
    it("should render with sm size by default", () => {
      render(<Button>Small</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.sizes.sm.root);
    });

    it("should render with md size", () => {
      render(<Button size="md">Medium</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.sizes.md.root);
    });

    it("should render with lg size", () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.sizes.lg.root);
    });

    it("should render with xl size", () => {
      render(<Button size="xl">Extra Large</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.sizes.xl.root);
    });
  });

  describe("colors", () => {
    it("should render with primary color by default", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.colors.primary.root);
    });

    it("should render with secondary color", () => {
      render(<Button color="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.colors.secondary.root);
    });

    it("should render with tertiary color", () => {
      render(<Button color="tertiary">Tertiary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.colors.tertiary.root);
    });

    it("should render with link-gray color", () => {
      render(<Button color="link-gray">Link Gray</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.colors["link-gray"].root);
    });

    it("should render with link-color color", () => {
      render(<Button color="link-color">Link Color</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(styles.colors["link-color"].root);
    });

    it("should render with primary-destructive color", () => {
      render(<Button color="primary-destructive">Destructive</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain(
        styles.colors["primary-destructive"].root
      );
    });
  });

  describe("icons", () => {
    it("should render leading icon component", () => {
      render(<Button iconLeading={MockIcon}>With Icon</Button>);
      expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("should render trailing icon component", () => {
      render(<Button iconTrailing={MockIcon}>With Icon</Button>);
      expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("should render as icon-only button when only icon provided", () => {
      render(<Button iconLeading={MockIcon} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-icon-only", "true");
    });

    it("should not have icon-only attribute when children provided", () => {
      render(<Button iconLeading={MockIcon}>Text</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("data-icon-only");
    });
  });

  describe("states", () => {
    it("should be disabled when isDisabled is true", () => {
      render(<Button isDisabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("should show loading state", () => {
      render(<Button isLoading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-loading", "true");
    });

    it("should show loading spinner when isLoading is true", () => {
      render(<Button isLoading>Loading</Button>);
      const spinner = screen.getByRole("button").querySelector("svg");
      expect(spinner).toHaveAttribute("data-icon", "loading");
    });

    it("should disable interactions when loading", () => {
      render(<Button isLoading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("pointer-events-none");
    });
  });

  describe("link behavior", () => {
    it("should not have href when disabled", () => {
      render(
        <Button href="/test" isDisabled>
          Disabled Link
        </Button>
      );
      expect(screen.getByRole("link")).not.toHaveAttribute("href", "/test");
    });

    it("should disable pointer events when link is loading", () => {
      render(
        <Button href="/test" isLoading>
          Loading Link
        </Button>
      );
      const link = screen.getByRole("link");
      expect(link.className).toContain("pointer-events-none");
    });
  });

  describe("interactions", () => {
    it("should call onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole("button"));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should be disabled when isDisabled is true", () => {
      const handleClick = vi.fn();

      render(
        <Button isDisabled onClick={handleClick}>
          Disabled
        </Button>
      );

      // React Aria Button uses data-disabled attribute
      expect(screen.getByRole("button")).toHaveAttribute("data-disabled");
    });
  });

  describe("custom className", () => {
    it("should merge custom className with default styles", () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("custom-class");
      // Check for key classes from styles.common.root (tailwind-merge may reorder)
      expect(button.className).toContain("group");
      expect(button.className).toContain("relative");
      expect(button.className).toContain("inline-flex");
    });
  });

  describe("accessibility", () => {
    it("should support aria-label", () => {
      render(<Button aria-label="Close dialog">X</Button>);
      expect(screen.getByRole("button")).toHaveAccessibleName("Close dialog");
    });

    it("should support aria-describedby", () => {
      render(
        <>
          <Button aria-describedby="hint">Button</Button>
          <span id="hint">This is a hint</span>
        </>
      );
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-describedby",
        "hint"
      );
    });
  });
});

describe("Button styles export", () => {
  it("should export common styles", () => {
    expect(styles.common).toBeDefined();
    expect(styles.common.root).toBeDefined();
    expect(styles.common.icon).toBeDefined();
  });

  it("should export size styles", () => {
    expect(styles.sizes).toBeDefined();
    expect(styles.sizes.sm).toBeDefined();
    expect(styles.sizes.md).toBeDefined();
    expect(styles.sizes.lg).toBeDefined();
    expect(styles.sizes.xl).toBeDefined();
  });

  it("should export color styles", () => {
    expect(styles.colors).toBeDefined();
    expect(styles.colors.primary).toBeDefined();
    expect(styles.colors.secondary).toBeDefined();
    expect(styles.colors.tertiary).toBeDefined();
  });
});
