import React from "react";

const LocationIcon = ({ width = "14", height = "17", stroke = "#0066CB" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.33333 6.83333C9.33333 8.21405 8.21405 9.33333 6.83333 9.33333C5.45262 9.33333 4.33333 8.21405 4.33333 6.83333C4.33333 5.45262 5.45262 4.33333 6.83333 4.33333C8.21405 4.33333 9.33333 5.45262 9.33333 6.83333Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.6667 6.625C12.6667 11.3125 6.83333 16 6.83333 16C6.83333 16 1 11.3125 1 6.625C1 3.5184 3.61167 1 6.83333 1C10.055 1 12.6667 3.5184 12.6667 6.625Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LocationIcon;
