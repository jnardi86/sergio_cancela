const MenuIcon = ({ width = "24", height = "24", fill = "#344051" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_130_53625"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="24"
        >
          <rect x="0.666504" width="24" height="24" fill="white" />
        </mask>
        <g mask="url(#mask0_130_53625)">
          <path
            d="M3.6665 18V16H21.6665V18H3.6665ZM3.6665 13V11H21.6665V13H3.6665ZM3.6665 8V6H21.6665V8H3.6665Z"
            fill={fill}
          />
        </g>
      </svg>
    );
  };
  
  export default MenuIcon;
  