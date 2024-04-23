"use client";
import React from "react";
import clsx from "clsx";

export const Card = () => {
    return (
        <div className={clsx("flex flex-col w-72 h-[28rem] border-solid border-2 rounded border-light-purple bg-light-card ")}>
            <div>imagem</div>
            <div className={clsx("flex flex-row w-full justify-between")}>
                <div className={clsx("flex flex-col")}>
                    <div>item</div>
                    <div>item</div>
                </div>
                <div>item</div>
            </div>
        </div>
    );
};


