"use client";
import React from "react";
import clsx from "clsx";

export const Card = () => {
    return (
        <div className={clsx("flex flex-col justify-center items-center gap-y-6 w-72 h-[28rem] border-solid border-2 rounded border-light-purple bg-light-card")}>
            <div className={clsx("flex w-64 h-80 border-solid border-1 border-light-purple")}>imagem</div>
            <div className={clsx("flex flex-row w-64 justify-between")}>
                <div className={clsx("flex flex-col")}>
                    <div>item</div>
                    <div>item</div>
                </div>
                <div>item</div>
            </div>
        </div>
    );
};


