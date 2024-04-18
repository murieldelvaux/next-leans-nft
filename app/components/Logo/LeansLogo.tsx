"use client";
import React from "react";
import clsx from "clsx";
import { LeansLogoProps } from "./LeansLogo.styles";
import { CameraIcon } from "../Icons/CameraIcon";
import { Madimi_One } from "next/font/google";


const madimi = Madimi_One({
    style: ['normal'],
    weight: ['400'],
    subsets: ['latin']
})

export const LeansLogo = ({
    withIcon = true
}: LeansLogoProps) => {
    return (
        <div className="flex items-center gap-x-2 text-center">
            {
                withIcon &&
                <div className={clsx("flex items-center w-fit h-fit p-1 bg-dark-purple rounded-full")}>
                    <CameraIcon width="24px" height="24px" viewBox="0 0 24 24" />
                </div>
            }
            <p className={clsx(madimi.className, "text-white text-xl")}>LEANS</p>

        </div>
    );
};


