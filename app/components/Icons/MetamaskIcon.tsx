"use client";
import React, { SVGProps } from "react";

export const MetamaskIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "20"}
      height={props.height ?? "20"}
      viewBox={props.viewBox ?? "0 0 20 20"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={props.width ?? "20"}
        height={props.height ?? "20"}
        fill="url(#pattern0_96_536)"
      />
      <defs>
        <pattern id="pattern0_96_536" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_96_536" transform="scale(0.01)" />
        </pattern>
        <image id="image0_96_536" width="100" height="100" href="data:image/png;base64,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" />
      </defs>
    </svg>
  );
};


