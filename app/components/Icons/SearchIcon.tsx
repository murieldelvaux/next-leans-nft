"use client";
import React, { SVGProps } from "react";

export const SearchIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={props.width ?? "20"}
            height={props.height ?? "20"}
            viewBox={props.viewBox ?? "0 0 20 20"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 4.16667C6.69914 4.16667 4.83366 6.03215 4.83366 8.33333C4.83366 10.6345 6.69914 12.5 9.00033 12.5C10.1512 12.5 11.1917 12.0346 11.9466 11.2796C12.7016 10.5247 13.167 9.48417 13.167 8.33333C13.167 6.03215 11.3015 4.16667 9.00033 4.16667ZM3.16699 8.33333C3.16699 5.11168 5.77867 2.5 9.00033 2.5C12.222 2.5 14.8337 5.11168 14.8337 8.33333C14.8337 9.64325 14.4012 10.8533 13.6722 11.8267L17.9229 16.0774C18.2483 16.4028 18.2483 16.9305 17.9229 17.2559C17.5975 17.5813 17.0698 17.5813 16.7444 17.2559L12.4937 13.0053C11.5202 13.7342 10.3102 14.1667 9.00033 14.1667C5.77867 14.1667 3.16699 11.555 3.16699 8.33333Z" fill="white" />
        </svg>
    );
};


