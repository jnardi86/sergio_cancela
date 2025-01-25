/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#122658",
        secondary: "#0066cb",
        neutral: "#E7E7E6", 
        lightBg: "#FAFAFA",
        primaryText: "#141C24", // Texto principal
        secondaryText: "#344051", // Texto secundario
        paragraphText: "#50504E", // Texto de párrafo
        inputTextDefault: "#D1D1D0", 
        inputTextPressed: "#AEAFAE",
        stateInactive: "#B8B8B8", // Estado inactivo
        stateError: "#F23030", // Color de error
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Fuente principal
      },
      fontSize: {
        h1: ["58px", "60px"], // Heading 1
        h2: ["40px", "60px"], // Heading 2
        h3: ["20px", "28px"], // Heading 3
        h4: ["18px", "21px"], // Heading 4
        body: ["18px", "21px"], // Texto del cuerpo
        bodyLink: ["16px", "24px"], // Texto para enlaces
        bodyLinkHover: ["16px", "24px"], // Texto para enlaces al pasar el mouse
        bodyButton: ["14px", "20px"], // Texto en botones
        bodyInput: ["14px", "20px"], // Texto en inputs
        bodyMobileMenu: ["30px", "45px"], // Texto en menú móvil
        bodyFooter: ["18px", "21px"], // Texto del footer
      },
      boxShadow: {
        customDrop: '0px 4px 4px 0px #AEAEAE',
      },
    },
  },
  plugins: [],
};
