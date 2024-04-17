"use client";
import React, { SVGProps } from "react";

export const MoonIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={props.width ?? "20"}
            height={props.height ?? "20"}
            viewBox={props.viewBox ?? "0 0 20 20"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                width={props.width}
                height={props.height}
                fill="url(#pattern0_114_4)"
            />
            <defs>
                <pattern id="pattern0_114_4" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_114_4" transform="scale(0.02)" />
                </pattern>
                <image id="image0_114_4" width="50" height="50" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADW0lEQVR4nO2ZSWgUQRSGK2TRuMSoQVDwoIgHBYkICkEQFHHJwZUgiGhQCd48eHGNMeBBUUHEhYgYEFFB40EwCopbQDCC4gJeIiouJK5RE3H7pJxqeSmnJ9PdNZ05zAdzmZ7633vTVfVevVIqR44csQIMBxYB9cBp4BrQaj6XgekqWwEGAzXALeAXqbmvsjSAOuA96dOssglgKfDSx9kPwCVgN7Ae+CyeValsACgGGpI4/8V8PwMoEL8fK37TCRT1bQTqr1PDgBYrgG/ALqDMZ4xeOx7n4/faAhiqF6oVxB1gQi/j9M7lsUFlwXRqsYI4CvRLY+wjMWZePB77AByxgtCLOC/NsV/FuImqryCR3CQNAcYWWGNHZ9ZbH4BBwHPhyG2gMMD4IiuQUaovALYIJ7qBcSE0fgiN8ZnxNAXAQKBDOFEfUueF0Jip4gaothJZaUid60JnnXtPewG4KhzYH0Fnn9A5EVYnFECJNbenRazJPF4D+WG1AgNUCuPt6eaMFH+KLmM8ZoXVCgywSRhucqDXJPTORtVLG6BRGN7pQG+O0PsZW4YHLgrDNQ708oC7sR+uSBxZPZY70pxNT6pd6MYeiNGVBzJ9apzkSjuWqWWd8duE9rMwZU/aAMddLnZLuwLoEvpvgHKXNv4BbHS5/frsYjK3fATmqgwYmi+MdERJiClsLAC+Czu/gYO6L6Acz2VZokx1Jt7TznSrOta8NccHNwEBV3BQNKZhpwy4wP90A+eAlbqlFMXAKiH6KWwZHyBhVgGP8afTHAnKwxysdMHoUZepQITNfGAF8CBFQME3H2CzEOiK9IqD2y4HaoEnViDB0wEwAHgatvngqCnYZuWc0ijbpOSAc4+T2y00jXCclUvAIUtwhzOP/dfKGctmowvh/sBN+83IrrsrSJwo7e1Y33YVu5yv9ywDukoe48RAwsYUq1eseQiMdGVDBmO/mS6zu5RE0B0B7LGqCe9NJL2ucDXNDpP8lmovMDlAEqwwU1Q2uj2O6ZZtRoJI0ty26ySPV+ZepNaUGEuAxcBqYKspPfyu7dqBZRkPIEmTexvwjujoEmS7LlhjDSJJtbzWrJ/erqexSvcbwBpgiMomzIaw0FxbnzKt11ZzTdcMnDTPKjO2kHPkyKFs/gDZFHayaOHw7AAAAABJRU5ErkJggg==" />
            </defs>
        </svg>
    );
};


