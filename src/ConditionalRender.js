import React from "react";

export const ConditionalRender = ({
  children,
  condition,
  fallbackComponent,
}) => {
  if (condition) {
    return children;
  }

  return fallbackComponent ? fallbackComponent() : null;
};
