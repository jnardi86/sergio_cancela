import React from "react";
import { Link } from "react-scroll";

const NavbarDesktop = () => {
  return (
    <nav className="hidden lg:flex items-center justify-between w-full h-[76px] bg-white shadow-customDrop px-28">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="images/logo_desktop.png"
          alt="Sergio A. Cancela"
          className="w-[141.76px] h-[40px]"
        />
      </div>
      <div className="flex gap-6">
        {/* Menú */}
        <ul className="flex items-center gap-6 font-montserrat text-bodyLink font-medium text-primaryText">
          <li>
            <Link to="inicio" smooth={true} duration={500} className="cursor-pointer hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="aboutUs" smooth={true} duration={500} className="cursor-pointer hover:text-secondary">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="maquinaria" smooth={true} duration={500} className="cursor-pointer hover:text-secondary">
              Maquinaria
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-secondary">
              Servicios
            </Link>
          </li>
        </ul>

        {/* Botón de contacto */}
        <Link
          to="contactForm"
          smooth={true}
          duration={500}
          className="px-5 py-[10px] bg-secondary text-lightBg rounded-lg font-montserrat font-semibold text-bodyButton shadow-customDrop cursor-pointer hover:bg-lightBg hover:text-secondaryText hover:border-secondary"
        >
          CONTACTO
        </Link>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
