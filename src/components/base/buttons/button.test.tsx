import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders with text content", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when isDisabled is true", () => {
    render(<Button isDisabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not trigger click when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button isDisabled onClick={handleClick}>
        Disabled
      </Button>
    );

    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Go to test</Button>);
    expect(screen.getByRole("link", { name: "Go to test" })).toHaveAttribute(
      "href",
      "/test"
    );
  });

  it("shows loading indicator when isLoading is true", () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-loading", "true");
  });

  it("applies size variants correctly", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-sm");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-md");
  });

  it("applies color variants correctly", () => {
    const { rerender } = render(<Button color="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-brand-solid");

    rerender(<Button color="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");
  });

  it("renders leading icon when provided", () => {
    const TestIcon = ({ className }: { className?: string }) => (
      <svg className={className} data-testid="leading-icon" />
    );

    render(<Button iconLeading={TestIcon}>With Icon</Button>);
    expect(screen.getByTestId("leading-icon")).toBeInTheDocument();
  });

  it("renders trailing icon when provided", () => {
    const TestIcon = ({ className }: { className?: string }) => (
      <svg className={className} data-testid="trailing-icon" />
    );

    render(<Button iconTrailing={TestIcon}>With Icon</Button>);
    expect(screen.getByTestId("trailing-icon")).toBeInTheDocument();
  });
});
