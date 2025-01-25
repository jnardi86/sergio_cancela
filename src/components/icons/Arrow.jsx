import React from "react";

const Arrow = ({ width = "25", height = "24", fill = "#0066CB" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_130_53621"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="24"
            >
                <rect x="0.666504" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_130_53621)">
                <path
                    d="M16.8415 13H4.6665V11H16.8415L11.2415 5.4L12.6665 4L20.6665 12L12.6665 20L11.2415 18.6L16.8415 13Z"
                    fill={fill}
                />
            </g>
        </svg>
    );
};

export default Arrow;
