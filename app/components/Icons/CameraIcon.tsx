"use client";
import React, { SVGProps } from "react";

export const CameraIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
        fill="url(#pattern0_92_13)"
      />
      <defs>
        <pattern id="pattern0_92_13" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_92_13" transform="scale(0.01)" />
        </pattern>
        <image id="image0_92_13" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFO0lEQVR4nO2cTWhdRRTHb4haBfslWmtRq1hBV9IGdeHGjdBUa1vbfFCXumqxLqS4UXAnfuImrRGLBesmSEhp08SUWHHpB1IVwdYuSrHpqy6sjQtb6U+GnECM786de9+7d+bOOz+4EF6SOefMn5k3c+6ZSRJFURRFURRFURRFURRFUZSYAB4FXgUOAiNteg5Km4/4jq82AGuBLymfL4C7fMcbNMCDQIPqmAEeSGIEuAl4DOhb8PQCtzv+//XAN1TP18Z2EuF8fzYl4L+Blxza2IU/diWRjYw0Mea5BjxuaWMJcA5/GNtLkhiQacqF9yxt7ME/e6rtuUAB7gX+9K0GMAusSzoZ4B7gB8Lhe7PsTjoN4GbgBeAi4dEAdhsfk5ABbgGeB4Za2CmPAt/K9BA6s+LraAvxmr56DljZbjHMl+4l3z1UY/4wo65dYrzjO5qIeLNVMbYRLpeBk8BxYEye4/KZ+V2oPN2KICGtgM4Dw8CAS1LQ/A0wKP9jclahcLKoGPf79py5Hf4RyYl1FwpkLpbrgE3AUWnTN/cVCcJ0gk+OAQ8VFcES13pg0nNsG4s4brK1vqambe0Wokl821uYyi5JMvQOeXbnzDb01UWQz02ApSjQPMbbCo6W3iZtPZFjOqyFIB+Zub5dnZ0jzm7g/Rx+/mhp66dYBHk9p2/LgCeBl4F9wCfy7JPPzO+W5WivC3jD0ddJSzufxSDI/hwrpUFgCvjHod2rMh0NuKzQRJQPHNq9ANyQ8k6nUXdBphw7awdwpgU7vwDPOE5f0w7tvW0EXCTmuzn8CVIQs5pa5ZDQHGujzdGsRB+wWkZBFieAF+UxFSzUXRDr0hZY1+KoSON01sZMRmSZBCfIuIMYMyWPzixRJjtFkGu2HThz01QZI6PZSFlh8WNDiWmWoAQ5kmF3jOr4NMOX8U4QpNeDTRtbLf48ReSCnE/bjcs+4wzVcypt6S3VlI2YBRm22BvEH/0Wvz6MWZABi70p/DFh8WtnzILcmWJruWM6pCxMmmVpim93xyrI5YXphkW2TDLQN00XG5IWmY1RkO8stkyG1jd7Lf6ZwonoBJm22NqPf4Ys/pkXZ9EJMmaxdQj/fGzx73CbbakgDnScIHWesk7EKIh+qddo2WuK2AixVirmZS9pJaBStHAVf1yxbAzNuXliFWSwDRUbZXDM4teznZpcHMAfqR0EHIhZkBlL+r1b3uJVzc8Z6feLMQti2JRRbxvMeQ1gc0k2gxLkaIbdUapjJMOXiU4QxBQOrLfYXVnR1GWmquUWP3pKtB2UINb6WIMp0ZHXvWXxq7mwILFQ8guz4AQxbHcQ5XRJIyNLjH7KJUhBzIprdYYPK0ypThttjtimKbG5poI7u4IUBClsdim23irVIa2MiszTr1L5krdONypBkCMAXQ7+dMtUMuGYZrki5xT7chxHKGMTWDtBkMMyXTl8WyqHUvfK9RWH5BmSzzbmuatExHirwniDF8T3kbbhimOthSDIi6A1pfR88xhXeaoHq40gyGGZHaUo8N/4+iu+AbW2gsxj0vEbShCiR+5E8UktBZlPs4xLFXrh7xfJ2m6WVVcI1FaQhTSk8HmnvMXrylg1rZWXSwcCvLmukCBbCJtZuSNxWsp0DsvP5rO/CJstRQR52LfXEdNTRBCTRvjdt+cR8lvhq6aA13x7HyGvFBJjwTXiPi7Ij5WvgBsLCyKi3FpCKWUnMm36siUxFi0j+2Ud73LthDLHBdlH9eVJniqKoiiKoiiKoiiKoiiKoiiKoiiKoiiKkvyPfwFhLR4jKW4NJwAAAABJRU5ErkJggg==" />
      </defs>
    </svg>
  );
};


