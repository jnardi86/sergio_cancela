import { useState, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import { Link } from "react-scroll";



const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Bloquear scroll del fondo cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    return (
        <nav className="relative flex items-center justify-between px-4 py-2 bg-white shadow-md border-b border-neutral scroll-smooth">

            {/* Logo */}
            <div className="flex items-center">
                <img src="images/logo_mobile.png" alt="Logo" className="w-9 h-10" />
            </div>

            <div className="flex items-center gap-4">
                {/* Botón de contacto */}
                <Link
                    to="contactForm"
                    smooth={true}
                    duration={1000}
                    className="w-[123px] h-10 px-4 py-2 bg-secondary text-lightBg text-bodyLink text-center font-semibold rounded-lg shadow-md cursor-pointer uppercase">
                    contacto
                </Link>

                {/* Menú hamburguesa */}

                <button
                    onClick={toggleMenu}
                    className="w-9 h-9 flex items-center justify-center border border-neutral rounded-lg"
                >
                    {menuOpen ? (
                        <CloseIcon width="24" height="24" fill="#344051" />
                    ) : (
                        <MenuIcon width="24" height="24" fill="#344051" />
                    )}
                </button>
            </div>

            {/* Menú desplegable */}
            {
                menuOpen && (
                    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-neutral">
                        {/* Botón de cierre */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center"
                        >
                            <CloseIcon width="24" height="24" fill="#344051" />
                        </button>

                        {/* Items del menú */}
                        <ul className="space-y-4 py-4 mt-10 flex flex-col items-center justify-center">
                            <li>
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={1000}
                                    className="font-montserrat text-bodyMobileMenu text-secondaryText px-4 cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="aboutUs"
                                    smooth={true}
                                    duration={1000}
                                    className="font-montserrat text-bodyMobileMenu text-secondaryText px-4 cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="machines"
                                    smooth={true}
                                    duration={1000}
                                    className="font-montserrat text-bodyMobileMenu text-secondaryText px-4 cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    Maquinaria
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="services"
                                    smooth={true}
                                    duration={1000}
                                    className="font-montserrat text-bodyMobileMenu text-secondaryText px-4 cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contactForm"
                                    smooth={true}
                                    duration={1000}
                                    className="font-montserrat text-bodyMobileMenu text-secondaryText px-4 cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            }

        </nav >
    );
};

export default NavbarMobile;
