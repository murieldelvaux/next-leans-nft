"use client";
import React, { SVGProps } from "react";

export const UserIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
                width={props.width}
                height={props.height}
                fill="url(#pattern0_114_9)"
            />
            <defs>
                <pattern id="pattern0_114_9" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_114_9" transform="scale(0.02)" />
                </pattern>
                <image
                    id="image0_114_9"
                    width={props.width ?? "20"}
                    height={props.height ?? "20"}
                    href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};


