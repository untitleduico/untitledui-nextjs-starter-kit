import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toggle, ToggleBase } from "./toggle";

describe("ToggleBase", () => {
  describe("rendering", () => {
    it("should render a div element", () => {
      const { container } = render(<ToggleBase />);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("should render the toggle switch circle", () => {
      const { container } = render(<ToggleBase />);
      const circles = container.querySelectorAll("div");
      expect(circles.length).toBe(2); // outer and inner
    });
  });

  describe("sizes", () => {
    it("should render sm size by default", () => {
      const { container } = render(<ToggleBase />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("h-5");
      expect(toggle.className).toContain("w-9");
    });

    it("should render md size", () => {
      const { container } = render(<ToggleBase size="md" />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("h-6");
      expect(toggle.className).toContain("w-11");
    });
  });

  describe("slim variant", () => {
    it("should render slim variant when slim is true", () => {
      const { container } = render(<ToggleBase size="sm" slim />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("h-4");
      expect(toggle.className).toContain("w-8");
    });

    it("should render slim md size", () => {
      const { container } = render(<ToggleBase size="md" slim />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("h-5");
      expect(toggle.className).toContain("w-10");
    });

    it("should have ring styles when slim", () => {
      const { container } = render(<ToggleBase slim />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("ring-1");
      expect(toggle.className).toContain("ring-secondary");
    });
  });

  describe("states", () => {
    it("should show selected state", () => {
      const { container } = render(<ToggleBase isSelected />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("bg-brand-solid");
    });

    it("should show hover state when selected and hovered", () => {
      const { container } = render(<ToggleBase isHovered isSelected />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("bg-brand-solid_hover");
    });

    it("should show disabled state", () => {
      const { container } = render(<ToggleBase isDisabled />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("bg-disabled");
      expect(toggle.className).toContain("cursor-not-allowed");
    });

    it("should show focus ring when focused", () => {
      const { container } = render(<ToggleBase isFocusVisible />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("outline-2");
      expect(toggle.className).toContain("outline-offset-2");
    });

    it("should translate switch when selected", () => {
      const { container } = render(<ToggleBase isSelected size="sm" />);
      // The inner div is the switch circle that translates
      const divs = container.querySelectorAll("div");
      const switchCircle = divs[1]; // Second div is the inner switch circle
      expect(switchCircle?.className).toContain("translate-x-4");
    });
  });

  describe("custom className", () => {
    it("should merge custom className", () => {
      const { container } = render(<ToggleBase className="custom-class" />);
      const toggle = container.firstChild as HTMLElement;
      expect(toggle.className).toContain("custom-class");
    });
  });
});

describe("Toggle", () => {
  describe("rendering", () => {
    it("should render a switch element", () => {
      render(<Toggle />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("should render label when provided", () => {
      render(<Toggle label="Enable notifications" />);
      expect(screen.getByText("Enable notifications")).toBeInTheDocument();
    });

    it("should render hint when provided", () => {
      render(<Toggle hint="This will enable all notifications" />);
      expect(
        screen.getByText("This will enable all notifications")
      ).toBeInTheDocument();
    });

    it("should render both label and hint", () => {
      render(<Toggle hint="Helper text" label="Label" />);
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("should render sm size by default", () => {
      render(<Toggle label="Small" />);
      const label = screen.getByText("Small");
      expect(label.className).toContain("text-sm");
    });

    it("should render md size", () => {
      render(<Toggle label="Medium" size="md" />);
      const label = screen.getByText("Medium");
      expect(label.className).toContain("text-md");
    });

    it("should apply size to hint text", () => {
      render(<Toggle hint="Hint text" size="md" />);
      const hint = screen.getByText("Hint text");
      expect(hint.className).toContain("text-md");
    });
  });

  describe("interactions", () => {
    it("should toggle when clicked", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Toggle onChange={handleChange} />);

      const toggle = screen.getByRole("switch");

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it("should call onChange when toggled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Toggle onChange={handleChange} />);
      await user.click(screen.getByRole("switch"));

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it("should not toggle when disabled", () => {
      render(<Toggle isDisabled />);
      const toggle = screen.getByRole("switch");
      // React Aria marks disabled switches
      expect(toggle).toHaveAttribute("disabled");
    });
  });

  describe("controlled mode", () => {
    it("should call onChange with correct value when isSelected is controlled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Toggle isSelected onChange={handleChange} />);
      const toggle = screen.getByRole("switch");

      await user.click(toggle);
      // When isSelected is true, clicking should call onChange with false
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it("should start selected when defaultSelected is true", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Toggle defaultSelected onChange={handleChange} />);
      const toggle = screen.getByRole("switch");

      await user.click(toggle);
      // When defaultSelected is true, first click should call onChange with false
      expect(handleChange).toHaveBeenCalledWith(false);
    });
  });

  describe("accessibility", () => {
    it("should have accessible role", () => {
      render(<Toggle />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("should be focusable", () => {
      render(<Toggle />);
      const toggle = screen.getByRole("switch");
      toggle.focus();
      expect(document.activeElement).toBe(toggle);
    });

    it("should support aria-label", () => {
      render(<Toggle aria-label="Toggle dark mode" />);
      expect(screen.getByRole("switch")).toHaveAccessibleName(
        "Toggle dark mode"
      );
    });

    it("should be keyboard accessible", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Toggle onChange={handleChange} />);

      const toggle = screen.getByRole("switch");
      toggle.focus();

      await user.keyboard(" ");
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.keyboard(" ");
      expect(handleChange).toHaveBeenCalledWith(false);
    });
  });

  describe("hint click behavior", () => {
    it("should render hint text", () => {
      render(<Toggle hint="Click me" />);
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("should have onClick handler on hint to stop propagation", () => {
      const { container } = render(<Toggle hint="Click me" />);
      const hintSpan = container.querySelector("span.text-tertiary");
      expect(hintSpan).toBeInTheDocument();
    });
  });

  describe("custom className", () => {
    it("should merge custom className", () => {
      const { container } = render(<Toggle className="custom-class" />);
      // className is applied to the AriaSwitch wrapper element
      const wrapper = container.querySelector(".custom-class");
      expect(wrapper).toBeInTheDocument();
    });

    it("should support function className", () => {
      const { container } = render(
        <Toggle className={() => "function-class"} />
      );
      // className is applied to the AriaSwitch wrapper element
      const wrapper = container.querySelector(".function-class");
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe("slim variant", () => {
    it("should render slim variant", () => {
      const { container } = render(<Toggle slim />);
      const toggleBase = container.querySelector(".ring-1");
      expect(toggleBase).toBeInTheDocument();
    });

    it("should add margin top to slim variant", () => {
      const { container } = render(<Toggle slim />);
      const toggleBase = container.querySelector(".mt-0\\.5");
      expect(toggleBase).toBeInTheDocument();
    });
  });
});
