import React from "react";

export const Conditional = ({ children, condition, fallback }) => {
  if (condition) {
    return children;
  }

  return fallback ? fallback() : null;
};
