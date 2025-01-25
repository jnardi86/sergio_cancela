import React from "react";
import NavbarMobile from "./NavbarMobile";
import Layout from "../Layout";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <NavbarMobile />
    </header>
  );
};

export default Header;
