const CloseIcon = ({ width = "24", height = "24", fill = "#344051" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_130_53635"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="24"
        >
          <rect x="0.666504" width="24" height="24" fill="white" />
        </mask>
        <g mask="url(#mask0_130_53635)">
          <path
            d="M7.0665 19L5.6665 17.6L11.2665 12L5.6665 6.4L7.0665 5L12.6665 10.6L18.2665 5L19.6665 6.4L14.0665 12L19.6665 17.6L18.2665 19L12.6665 13.4L7.0665 19Z"
            fill={fill}
          />
        </g>
      </svg>
    );
  };
  
  export default CloseIcon;
  