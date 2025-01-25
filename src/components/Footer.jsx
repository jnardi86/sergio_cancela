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
            <div className="container mx-auto px-4 grid grid-cols-1 gap-6 md:grid-cols-4">
                {/* Logo y slogan */}
                <div className="mx-4">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="bg-lightBg w-44 h-14 flex items-center justify-center rounded-lg mb-6">
                            <img
                                src="images/logo_footer.png"
                                alt="Logo Sergio A. Cancela"
                                className="w-[141px] h-auto p-2"
                            />
                        </div>

                        <p className="text-left font-montserrat text-lightBg text-bodyLink">
                            Soluciones textiles pensadas para tu negocio.
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <InstagramIcon
                            width="24"
                            height="24"
                        />
                        <FacebookIcon
                            width="24"
                            height="24"
                        />
                        <TwitterIcon
                            width="24"
                            height="24"
                        />
                        <LinkedInIcon
                            width="24"
                            height="24"
                        />
                    </div>
                </div>

                {/* Links de navegación */}
                <div className="px-4">
                    <h4 className="font-montserrat text-h3 text-lightBg font-medium mb-4">Links</h4>
                    <ul className="font-montserrat text-bodyLink font-medium space-y-2">
                        <li className="py-2"><a href="#inicio" className="hover:underline">Inicio</a></li>
                        <li className="py-2"><a href="#nosotros" className="hover:underline">Nosotros</a></li>
                        <li className="py-2"><a href="#maquinaria" className="hover:underline">Maquinaria</a></li>
                        <li className="py-2"><a href="#servicios" className="hover:underline">Servicios</a></li>
                        <li className="py-2"><a href="#contacto" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div className="px-4">
                    <h4 className="font-montserrat text-h3 font-medium mb-4">Contáctanos</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-start gap-2">
                            <MailIcon
                                width="20"
                                height="20"
                                fill="#FFFFFF"
                                className="mr-2"
                            />
                            <p className="font-montserrat font-normal text-bodyFooter text-lightBg">sergioancela@textil.com.ar</p>
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <PhoneIcon
                                width="20"
                                height="20"
                                fill="#FFFFFF"
                                className="mr-2"
                            />
                            <p className="font-montserrat font-normal text-bodyFooter text-lightBg">+54 11 1234-5678</p>
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <LocationIcon
                                width="20"
                                height="20"
                                stroke="#FFFFFF"
                                className="mr-2"
                            />
                            <p className="font-montserrat font-normal text-bodyFooter text-lightBg">Calle (número), (CP) <span className="block">Buenos Aires, Argentina</span></p>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="mt-6 md:mt-0 md:col-span-4 text-start px-4">
                    <hr className="border-solid border-neutral mb-4" />
                    <p className="font-montserrat text-lightBg text-bodyLink">
                        &copy; 2024 Sergio A. Cancela - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
