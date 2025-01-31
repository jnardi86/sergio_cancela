import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Mostrar NavbarMobile en móviles y tablets (hasta 1023px) */}
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
      {/* Mostrar NavbarDesktop en pantallas grandes (1024px en adelante) */}
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
    </header>
  );
};

export default Header;


