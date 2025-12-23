/* We cannot use type `unknown` instead of `any` here because it will break the type assertion `isReactComponent` function is providing. */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";

// biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
type ReactComponent = React.FC<any> | React.ComponentClass<any, any>;

/**
 * Checks if a given value is a function component.
 */
export const isFunctionComponent = (
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
  component: any
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
): component is React.FC<any> => {
  return typeof component === "function";
};

/**
 * Checks if a given value is a class component.
 */
export const isClassComponent = (
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
  component: any
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
): component is React.ComponentClass<any, any> => {
  return Boolean(
    typeof component === "function" &&
      component.prototype &&
      (component.prototype.isReactComponent || component.prototype.render)
  );
};

/**
 * Checks if a given value is a forward ref component.
 */
export const isForwardRefComponent = (
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
  component: any
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
): component is React.ForwardRefExoticComponent<any> => {
  return (
    typeof component === "object" &&
    component !== null &&
    component.$$typeof?.toString() === "Symbol(react.forward_ref)"
  );
};

/**
 * Checks if a given value is a valid React component.
 */
export const isReactComponent = (
  // biome-ignore lint/suspicious/noExplicitAny: Required for type predicate compatibility
  component: any
): component is ReactComponent => {
  return (
    isFunctionComponent(component) ||
    isForwardRefComponent(component) ||
    isClassComponent(component)
  );
};
