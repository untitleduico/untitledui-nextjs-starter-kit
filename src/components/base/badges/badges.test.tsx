import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import {
  Badge,
  BadgeIcon,
  BadgeWithButton,
  BadgeWithDot,
  BadgeWithIcon,
  filledColors,
} from "./badges";

// Mock icon component
const MockIcon = ({ className }: { className?: string }) => (
  <svg className={className} data-testid="mock-icon" />
);

describe("Badge", () => {
  describe("rendering", () => {
    it("should render children text", () => {
      render(<Badge>Label</Badge>);
      expect(screen.getByText("Label")).toBeInTheDocument();
    });

    it("should render as a span element", () => {
      render(<Badge>Label</Badge>);
      const badge = screen.getByText("Label");
      expect(badge.tagName).toBe("SPAN");
    });
  });

  describe("types", () => {
    it("should render pill-color type by default", () => {
      render(<Badge>Pill</Badge>);
      const badge = screen.getByText("Pill");
      expect(badge.className).toContain("rounded-full");
    });

    it("should render color type (badge style)", () => {
      render(<Badge type="color">Badge</Badge>);
      const badge = screen.getByText("Badge");
      expect(badge.className).toContain("rounded-md");
      expect(badge.className).not.toContain("shadow-xs");
    });

    it("should render modern type (badge style with shadow)", () => {
      render(<Badge type="modern">Modern</Badge>);
      const badge = screen.getByText("Modern");
      expect(badge.className).toContain("shadow-xs");
    });
  });

  describe("sizes", () => {
    it("should render md size by default", () => {
      render(<Badge>Medium</Badge>);
      const badge = screen.getByText("Medium");
      expect(badge.className).toContain("text-sm");
    });

    it("should render sm size", () => {
      render(<Badge size="sm">Small</Badge>);
      const badge = screen.getByText("Small");
      expect(badge.className).toContain("text-xs");
    });

    it("should render lg size", () => {
      render(<Badge size="lg">Large</Badge>);
      const badge = screen.getByText("Large");
      expect(badge.className).toContain("py-1");
    });
  });

  describe("colors", () => {
    it("should render gray color by default", () => {
      render(<Badge>Gray</Badge>);
      const badge = screen.getByText("Gray");
      expect(badge.className).toContain(filledColors.gray.root);
    });

    it("should render brand color", () => {
      render(<Badge color="brand">Brand</Badge>);
      const badge = screen.getByText("Brand");
      expect(badge.className).toContain(filledColors.brand.root);
    });

    it("should render error color", () => {
      render(<Badge color="error">Error</Badge>);
      const badge = screen.getByText("Error");
      expect(badge.className).toContain(filledColors.error.root);
    });

    it("should render success color", () => {
      render(<Badge color="success">Success</Badge>);
      const badge = screen.getByText("Success");
      expect(badge.className).toContain(filledColors.success.root);
    });

    it("should render warning color", () => {
      render(<Badge color="warning">Warning</Badge>);
      const badge = screen.getByText("Warning");
      expect(badge.className).toContain(filledColors.warning.root);
    });
  });

  describe("custom className", () => {
    it("should merge custom className", () => {
      render(<Badge className="custom-class">Custom</Badge>);
      const badge = screen.getByText("Custom");
      expect(badge.className).toContain("custom-class");
    });
  });
});

describe("BadgeWithDot", () => {
  it("should render children text", () => {
    render(<BadgeWithDot>Label</BadgeWithDot>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("should render a dot indicator", () => {
    const { container } = render(<BadgeWithDot>With Dot</BadgeWithDot>);
    const dot = container.querySelector("svg");
    expect(dot).toBeInTheDocument();
  });

  it("should apply color to dot", () => {
    render(<BadgeWithDot color="brand">Brand</BadgeWithDot>);
    const badge = screen.getByText("Brand").closest("span");
    expect(badge?.className).toContain(filledColors.brand.root);
  });

  it("should support different sizes", () => {
    render(<BadgeWithDot size="lg">Large</BadgeWithDot>);
    const badge = screen.getByText("Large").closest("span");
    expect(badge?.className).toContain("py-1");
  });
});

describe("BadgeWithIcon", () => {
  it("should render children text", () => {
    render(<BadgeWithIcon iconLeading={MockIcon}>With Icon</BadgeWithIcon>);
    expect(screen.getByText("With Icon")).toBeInTheDocument();
  });

  it("should render leading icon", () => {
    render(<BadgeWithIcon iconLeading={MockIcon}>Leading</BadgeWithIcon>);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should render trailing icon", () => {
    render(<BadgeWithIcon iconTrailing={MockIcon}>Trailing</BadgeWithIcon>);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should apply icon styles from color", () => {
    render(<BadgeWithIcon iconLeading={MockIcon}>Icon</BadgeWithIcon>);
    const icon = screen.getByTestId("mock-icon");
    // SVG elements use classList
    expect(
      icon.classList.contains("size-3") || icon.classList.contains("stroke-3")
    ).toBe(true);
  });

  it("should support different colors", () => {
    render(
      <BadgeWithIcon color="error" iconLeading={MockIcon}>
        Error
      </BadgeWithIcon>
    );
    const badge = screen.getByText("Error").closest("span");
    expect(badge?.className).toContain(filledColors.error.root);
  });
});

describe("BadgeWithButton", () => {
  it("should render children text", () => {
    render(<BadgeWithButton>Removable</BadgeWithButton>);
    expect(screen.getByText("Removable")).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<BadgeWithButton>With Button</BadgeWithButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call onButtonClick when button is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <BadgeWithButton onButtonClick={handleClick}>Click Me</BadgeWithButton>
    );
    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should have accessible button label", () => {
    render(
      <BadgeWithButton buttonLabel="Remove badge">Labeled</BadgeWithButton>
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Remove badge"
    );
  });

  it("should render custom icon", () => {
    render(<BadgeWithButton icon={MockIcon}>Custom Icon</BadgeWithButton>);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should have type='button' on the button", () => {
    render(<BadgeWithButton>Button Type</BadgeWithButton>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });
});

describe("BadgeIcon", () => {
  it("should render icon", () => {
    render(<BadgeIcon icon={MockIcon} />);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should apply size styles", () => {
    const { container } = render(<BadgeIcon icon={MockIcon} size="lg" />);
    const badge = container.querySelector("span");
    expect(badge?.className).toContain("p-2");
  });

  it("should apply color styles", () => {
    const { container } = render(<BadgeIcon color="brand" icon={MockIcon} />);
    const badge = container.querySelector("span");
    expect(badge?.className).toContain(filledColors.brand.root);
  });

  it("should apply icon styling", () => {
    render(<BadgeIcon icon={MockIcon} />);
    const icon = screen.getByTestId("mock-icon");
    // SVG elements use classList - check for icon size classes
    const hasIconStyles =
      icon.classList.contains("size-3") ||
      icon.classList.contains("size-4") ||
      icon.classList.contains("stroke-3");
    expect(hasIconStyles).toBe(true);
  });
});

describe("filledColors export", () => {
  it("should export all color configurations", () => {
    expect(filledColors.gray).toBeDefined();
    expect(filledColors.brand).toBeDefined();
    expect(filledColors.error).toBeDefined();
    expect(filledColors.warning).toBeDefined();
    expect(filledColors.success).toBeDefined();
    expect(filledColors["gray-blue"]).toBeDefined();
    expect(filledColors["blue-light"]).toBeDefined();
    expect(filledColors.blue).toBeDefined();
    expect(filledColors.indigo).toBeDefined();
    expect(filledColors.purple).toBeDefined();
    expect(filledColors.pink).toBeDefined();
    expect(filledColors.orange).toBeDefined();
  });

  it("should have root, addon, and addonButton for each color", () => {
    for (const color of Object.values(filledColors)) {
      expect(color.root).toBeDefined();
      expect(color.addon).toBeDefined();
      expect(color.addonButton).toBeDefined();
    }
  });
});
