import React from "react";

import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import LocationIcon from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-lightBg">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:max-w-[1215px]">
        
        {/* Logo y Slogan - Ocupa 2 columnas en Desktop */}
        <div className="text-center lg:text-left lg:col-span-2">
          <div className="bg-lightBg w-44 h-14 flex items-center justify-center rounded-lg mx-auto lg:mx-0 mb-6">
            <img
              src="images/logo_footer.png"
              alt="Logo Sergio A. Cancela"
              className="w-[141px] h-auto p-2"
            />
          </div>
          <p className="font-montserrat text-bodyLink">
            <span className="block">Soluciones textiles pensadas</span> para tu negocio.
          </p>
          {/* Redes sociales */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <InstagramIcon width="24" height="24" />
            <FacebookIcon width="24" height="24" />
            <TwitterIcon width="24" height="24" />
            <LinkedInIcon width="24" height="24" />
          </div>
        </div>

        {/* Links de Navegación - Ocupa 1 columna */}
        <div className="text-center lg:pl-24 lg:text-left lg:col-span-1">
          <h4 className="font-montserrat text-h3 font-medium mb-4">Links</h4>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="#maquinaria" className="hover:underline">Maquinaria</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Información de Contacto - Ocupa 1 columna */}
        <div className="text-center lg:text-left lg:col-span-1">
          <h4 className="font-montserrat text-h3 font-medium mb-4">Contáctanos</h4>
          <ul className="space-y-4">
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <MailIcon width="20" height="20" fill="#FFFFFF" />
              <p className="font-montserrat text-bodyLink lg:text-bodyInput xl:text-bodyLink">sergiocancela@textil.com.ar</p>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <PhoneIcon width="20" height="20" fill="#FFFFFF" />
              <p className="font-montserrat text-bodyLink">+54 11 1234-5678</p>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <LocationIcon width="20" height="20" stroke="#FFFFFF" />
              <p className="font-montserrat text-bodyLink">
                Calle (número), (CP) <span className="block">Buenos Aires, Argentina</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center lg:text-left lg:max-w-[1215px] lg:mx-auto">
        <hr className="border-neutral mb-4" />
        <p className="font-montserrat text-bodyLink lg:pl-2 xl:pl-0">
          &copy; 2024 Sergio A. Cancela - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
