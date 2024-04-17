"use client";
import React, { SVGProps } from "react";

export const WalletIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={props.width ?? "20"}
            height={props.height ?? "20"}
            viewBox={props.viewBox ?? "0 0 20 20"}
            fill="url(#pattern0_114_6)"
            {...props}
        >
            <rect
                width={props.width}
                height={props.height}
                fill="url(#pattern0_114_4)"
            />
            <defs>
                <pattern id="pattern0_114_6" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_114_6" transform="matrix(0.0166667 0 0 0.02 0.0833333 0)" />
                </pattern>
                <image
                    id="image0_114_6"
                    width={props.width}
                    height={props.height}
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR4nO3Zz4tNYRzH8eNHaUq6qFHYWKGUBaUsxJaVhYXSuAvNglA2xGAlNhbKxtaCnR8NNaWMv4KVmMUsLAyxkAkvnXrU0xU998y5Z86p513P5iy+38/7PN/73HvOLYpMJpPJDAFWYR8u4ynu41DRBbATZ/EEn/3NLxwv2ga24GS42/PSeNeG4D0cxV28SQj9Ha9wc+D62qaDr8YeXMQLLCaEf4t7OIZ10Q2I6Y06+MqB4N+kBS9HaxKb/1G3N3IRbMcZPMJCQvAPeIhT2JbYYwy3ojVWp8AEXicE/4rnuIDdWFG0BdxIEIhFFmpe83iM/UuR2BvO8zbwoxzRqiJ3tItF7KgiMhMVeY/D4aRqch3BXJTjdhWR2ajAuWKZwPkox8xSRfojSZmWox/lmK1SIIvUibwjgTxaNSOP1jKMVngsKL/8TmB9Z49fPIh6zWFj50TC8/wgp7sosiH8uo2Z6JxI6HUJP0Ovl1jTSZHQbyt2lR/8gevdEvlPjn4WKck7UjPyaAXyaLVwtJ5FBa7UHXCIHFNRjukqBa5HBb6EgpMNr6nQ+w9Xq4hswift4SPGhxYJMgcT37w3IXGgkkQkM45r5XyG/0KaXNOhd7WdyGQymaKt/Aa2gzEO/NsJdwAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    );
};


