"use client";
import React from "react";
import { ButtonProps } from "./Button.types";
import clsx from "clsx";

export const Button = ({
  buttonContent,
  icon,
  text,
  colorType,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `px-4 py-2 rounded ${
          colorType === "solid"
            ? "bg-dark-purple  hover:bg-dark-purple-dark"
            : "bg-dark-purple-40 hover:bg-dark-purple-60"
        } text-white ${
          colorType === "transparent"
            ? "border-2 border-dark-purple"
            : "border-none"
        }`
      )}
    >
      <div className="flex items-center space-x-2">
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


