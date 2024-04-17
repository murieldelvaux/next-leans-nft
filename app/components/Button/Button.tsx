"use client";
import React from "react";
import clsx from "clsx";
import { ButtonProps } from "./Button.types";

export const Button = ({
  buttonContent,
  icon,
  text,
  colorType,
  fullWidth = false
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        ` ${buttonContent === "iconOnly" ? "px-2" : "px-4"} py-2 rounded ${colorType === "solid"
          ? "bg-dark-purple  hover:bg-dark-purple-dark"
          : "bg-dark-purple-40 hover:bg-dark-purple-60"
        } text-white ${colorType === "transparent"
          ? "border-2 border-dark-purple"
          : "border-none"
        } ${fullWidth ? "w-full" : "w-fit"}`
      )}
    >
      <div className="flex items-center gap-x-2 text-center">
        {(buttonContent === "iconOnly" || buttonContent === "textAndIcon") && (
          <>{icon}</>
        )}
        {buttonContent !== "iconOnly" && (
          <p className="font-montserrat font-semibold text-base">
            {text?.toUpperCase()}
          </p>
        )}
      </div>
    </button>
  );
};


