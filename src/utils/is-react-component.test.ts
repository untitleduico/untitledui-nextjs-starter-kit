import { Component, forwardRef } from "react";
import { describe, expect, it } from "vitest";
import {
  isClassComponent,
  isForwardRefComponent,
  isFunctionComponent,
  isReactComponent,
} from "./is-react-component";

describe("isFunctionComponent", () => {
  it("should return true for function components", () => {
    const FunctionComponent = () => null;
    expect(isFunctionComponent(FunctionComponent)).toBe(true);
  });

  it("should return true for arrow functions", () => {
    const ArrowComponent = () => null;
    expect(isFunctionComponent(ArrowComponent)).toBe(true);
  });

  it("should return false for non-function values", () => {
    expect(isFunctionComponent(null)).toBe(false);
    expect(isFunctionComponent(undefined)).toBe(false);
    expect(isFunctionComponent("string")).toBe(false);
    expect(isFunctionComponent(123)).toBe(false);
    expect(isFunctionComponent({})).toBe(false);
    expect(isFunctionComponent([])).toBe(false);
  });
});

describe("isClassComponent", () => {
  it("should return true for class components with isReactComponent", () => {
    // biome-ignore lint/style/useReactFunctionComponents: Testing class component detection
    class ClassComponent extends Component {
      render() {
        return null;
      }
    }
    expect(isClassComponent(ClassComponent)).toBe(true);
  });

  it("should return false for function components", () => {
    const FunctionComponent = () => null;
    expect(isClassComponent(FunctionComponent)).toBe(false);
  });

  it("should return false for non-component values", () => {
    expect(isClassComponent(null)).toBe(false);
    expect(isClassComponent(undefined)).toBe(false);
    expect(isClassComponent("string")).toBe(false);
    expect(isClassComponent({})).toBe(false);
  });
});

describe("isForwardRefComponent", () => {
  it("should return true for forwardRef components", () => {
    const ForwardRefComponent = forwardRef(() => null);
    expect(isForwardRefComponent(ForwardRefComponent)).toBe(true);
  });

  it("should return false for function components", () => {
    const FunctionComponent = () => null;
    expect(isForwardRefComponent(FunctionComponent)).toBe(false);
  });

  it("should return false for non-component values", () => {
    expect(isForwardRefComponent(null)).toBe(false);
    expect(isForwardRefComponent(undefined)).toBe(false);
    expect(isForwardRefComponent("string")).toBe(false);
    expect(isForwardRefComponent({})).toBe(false);
  });
});

describe("isReactComponent", () => {
  it("should return true for function components", () => {
    const FunctionComponent = () => null;
    expect(isReactComponent(FunctionComponent)).toBe(true);
  });

  it("should return true for class components", () => {
    // biome-ignore lint/style/useReactFunctionComponents: Testing class component detection
    class ClassComponent extends Component {
      render() {
        return null;
      }
    }
    expect(isReactComponent(ClassComponent)).toBe(true);
  });

  it("should return true for forwardRef components", () => {
    const ForwardRefComponent = forwardRef(() => null);
    expect(isReactComponent(ForwardRefComponent)).toBe(true);
  });

  it("should return false for non-component values", () => {
    expect(isReactComponent(null)).toBe(false);
    expect(isReactComponent(undefined)).toBe(false);
    expect(isReactComponent("string")).toBe(false);
    expect(isReactComponent(123)).toBe(false);
    expect(isReactComponent({})).toBe(false);
    expect(isReactComponent([])).toBe(false);
  });

  it("should return false for React elements", () => {
    const element = { $$typeof: Symbol.for("react.element"), type: "div" };
    expect(isReactComponent(element)).toBe(false);
  });
});
