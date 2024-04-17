import React, { HTMLAttributes } from "react";

export type ButtonProps = {
  buttonContent?: "default" | "textAndIcon" | "iconOnly";
  icon?: React.ReactNode;
  border?: boolean;
  colorType?: "solid" | "transparent";
  text?: string;
};
