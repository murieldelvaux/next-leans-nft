"use client";
import React, { SVGProps } from "react";

export const MoonIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
                fill="url(#pattern0_92_25)"
            />
            <defs>
                <pattern id="pattern0_92_25" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_92_25" transform="scale(0.02)" />
                </pattern>
                <image
                    id="image0_92_25"
                    width={props.width ?? "20"}
                    height={props.height ?? "20"}
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2avW4TQRDHT8oHZyEQFGDeIY0bKgJNIlE5uKHASZfAKyCkCKWkywsEEhKJjgAmBAINDSg8APSEjwcgSITqh0bMKaOV7fN9bM4+3V9ayTrvzP7/t7O7s2MHQYUKFQoD0ABuamsEowpglWOsBqMKKiFDhqGdEeAyMOFbCDAhY6UmGuP8OvAH2AFO+RLCfxHbwF+gmZl4l5k4MqSeA5N5CwEm1XeEo1xnxrwli06cGHmjwANtzQFEdJwxtpOEchIxz5yBXgNhDr5FxAvH9+6gIZx2QPetvbJigBrQAtaBfeCbNvn8SL+rmf6h+kg023mJkQUf4QNwBhgH7gA/iccP4DYwprbiI8KOdxGOmI4SOAucB96RHG/V9jTwHniTR6gmFRPq2xQiXxyCvzSM2sC0traG26HT97P6EF8nK8KIGe8yExvAhT42dWDTsdmTMAuKgq4Ji3sJbJcd2yW/bHsTqTkLeyOFjy1nAwj9sO1PouWsiYspfNSdNTPnh21/ErJwI6xn8PPY+HmYJ8Epk1Z0a7Pa75MhcCvDePPGz74+m43hMJU0ZLphRft9N8+uZBBy1fg50GcrMRxaeQo5MM+mMwi5Zvx8zVNImtBqZxCy4CW0BoWe3Km3XuPHHo5rwUkDuGEIyBZaT+HjkrP9Nv2wjT8Q5RCLsJnCxxNjL5tHYbmWpOIWywls7zu2i37Z9iczpqm4xVa/MNNwsjMR3TSLSRqdNF5ScYtDPbHnTRq/oAv7t9NXbM8VksZzfLH6qBcraS9Jjr3CLlb0vupKmC05G0AvyMJeLOyqy2DFBwm5OUkAdcai4oN8XtMSUVhY8YHu5aDdHMtBtjDnpxyUoUA3A9zVNlN4gY6ylEwLKGI/9VLELtXPCqX6oScpKiHDhjLNSKMUfxioUCEYffwDx7Ux6ELX8wMAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
};


