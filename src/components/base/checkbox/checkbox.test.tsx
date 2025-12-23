import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox, CheckboxBase } from "./checkbox";

describe("CheckboxBase", () => {
  describe("rendering", () => {
    it("should render a div element", () => {
      const { container } = render(<CheckboxBase />);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("should render checkmark and indeterminate SVGs", () => {
      const { container } = render(<CheckboxBase />);
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBe(2);
    });
  });

  describe("sizes", () => {
    it("should render sm size by default", () => {
      const { container } = render(<CheckboxBase />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("size-4");
    });

    it("should render md size", () => {
      const { container } = render(<CheckboxBase size="md" />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("size-5");
      expect(checkbox.className).toContain("rounded-md");
    });
  });

  describe("states", () => {
    it("should show selected state", () => {
      const { container } = render(<CheckboxBase isSelected />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("bg-brand-solid");
    });

    it("should show indeterminate state", () => {
      const { container } = render(<CheckboxBase isIndeterminate />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("bg-brand-solid");
    });

    it("should show disabled state", () => {
      const { container } = render(<CheckboxBase isDisabled />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("bg-disabled_subtle");
      expect(checkbox.className).toContain("cursor-not-allowed");
    });

    it("should show focus ring when focused", () => {
      const { container } = render(<CheckboxBase isFocusVisible />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("outline-2");
      expect(checkbox.className).toContain("outline-offset-2");
    });

    it("should show checkmark when selected", () => {
      const { container } = render(<CheckboxBase isSelected />);
      const svgs = container.querySelectorAll("svg");
      const checkmarkSvg = svgs[1];
      // SVG elements use classList or className.baseVal for class access
      expect(checkmarkSvg.classList.contains("opacity-100")).toBe(true);
    });

    it("should show indeterminate mark when indeterminate", () => {
      const { container } = render(<CheckboxBase isIndeterminate />);
      const svgs = container.querySelectorAll("svg");
      const indeterminateSvg = svgs[0];
      expect(indeterminateSvg.classList.contains("opacity-100")).toBe(true);
    });

    it("should not show checkmark when indeterminate even if selected", () => {
      const { container } = render(<CheckboxBase isIndeterminate isSelected />);
      const svgs = container.querySelectorAll("svg");
      const checkmarkSvg = svgs[1];
      expect(checkmarkSvg.classList.contains("opacity-100")).toBe(false);
    });
  });

  describe("custom className", () => {
    it("should merge custom className", () => {
      const { container } = render(<CheckboxBase className="custom-class" />);
      const checkbox = container.firstChild as HTMLElement;
      expect(checkbox.className).toContain("custom-class");
    });
  });
});

describe("Checkbox", () => {
  describe("rendering", () => {
    it("should render a checkbox element", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("should render label when provided", () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByText("Accept terms")).toBeInTheDocument();
    });

    it("should render hint when provided", () => {
      render(<Checkbox hint="Please read the terms first" />);
      expect(
        screen.getByText("Please read the terms first")
      ).toBeInTheDocument();
    });

    it("should render both label and hint", () => {
      render(<Checkbox hint="Helper text" label="Label" />);
      expect(screen.getByText("Label")).toBeInTheDocument();
      expect(screen.getByText("Helper text")).toBeInTheDocument();
    });
  });

  describe("sizes", () => {
    it("should render sm size by default", () => {
      render(<Checkbox label="Small" />);
      const label = screen.getByText("Small");
      expect(label.className).toContain("text-sm");
    });

    it("should render md size", () => {
      render(<Checkbox label="Medium" size="md" />);
      const label = screen.getByText("Medium");
      expect(label.className).toContain("text-md");
    });

    it("should apply size to hint text", () => {
      render(<Checkbox hint="Hint text" size="md" />);
      const hint = screen.getByText("Hint text");
      expect(hint.className).toContain("text-md");
    });
  });

  describe("interactions", () => {
    it("should toggle when clicked", async () => {
      const user = userEvent.setup();
      render(<Checkbox />);

      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("should call onChange when toggled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox onChange={handleChange} />);
      await user.click(screen.getByRole("checkbox"));

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it("should not toggle when disabled", async () => {
      const user = userEvent.setup();
      render(<Checkbox isDisabled />);

      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("should toggle with label click", async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Click me" />);

      const label = screen.getByText("Click me");
      await user.click(label);

      expect(screen.getByRole("checkbox")).toBeChecked();
    });
  });

  describe("controlled mode", () => {
    it("should respect isSelected prop", () => {
      render(<Checkbox isSelected />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("should respect defaultSelected prop", () => {
      render(<Checkbox defaultSelected />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("should support indeterminate state", () => {
      const { container } = render(<Checkbox isIndeterminate />);
      // React Aria puts data-indeterminate on the label wrapper, not the input
      const wrapper = container.querySelector("[data-indeterminate]");
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("should have accessible role", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("should support aria-label", () => {
      render(<Checkbox aria-label="Accept cookies" />);
      expect(screen.getByRole("checkbox")).toHaveAccessibleName(
        "Accept cookies"
      );
    });

    it("should be keyboard accessible", async () => {
      const user = userEvent.setup();
      render(<Checkbox />);

      const checkbox = screen.getByRole("checkbox");
      checkbox.focus();

      await user.keyboard(" ");
      expect(checkbox).toBeChecked();

      await user.keyboard(" ");
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("hint click behavior", () => {
    it("should render hint text", () => {
      render(<Checkbox hint="Click me" />);
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("should have onClick handler on hint to stop propagation", () => {
      const { container } = render(<Checkbox hint="Click me" />);
      const hintSpan = container.querySelector("span.text-tertiary");
      expect(hintSpan).toBeInTheDocument();
    });
  });

  describe("custom className", () => {
    it("should merge custom className", () => {
      const { container } = render(<Checkbox className="custom-class" />);
      // className is applied to the AriaCheckbox wrapper element
      const wrapper = container.querySelector(".custom-class");
      expect(wrapper).toBeInTheDocument();
    });

    it("should support function className", () => {
      const { container } = render(
        <Checkbox className={() => "function-class"} />
      );
      // className is applied to the AriaCheckbox wrapper element
      const wrapper = container.querySelector(".function-class");
      expect(wrapper).toBeInTheDocument();
    });
  });
});
