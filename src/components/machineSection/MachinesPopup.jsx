import React, { useEffect } from "react";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import CloseIcon from "../icons/CloseIcon";

const MachinesPopup = ({ togglePopup }) => {
  // Bloquear el scroll del body cuando el popup está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restaurar el scroll al cerrar
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primaryText bg-opacity-50 z-50 min-h-screen px-4">
      <div className="bg-lightBg rounded-2xl shadow-lg p-6 w-full max-w-[320px] lg:max-w-[450px] relative">
        {/* Botón de cierre */}
        <button
          onClick={togglePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <CloseIcon width="16" height="16" fill="#344051" />
        </button>
        {/* Contenido del Popup */}
        <h2 className="font-montserrat text-h2 text-primaryText font-bold mb-2 text-center">
          Contactanos
        </h2>
        <p className="font-montserrat text-body text-secondaryText mb-4 text-center">
          Podés enviarnos tu consulta en cualquier momento.
        </p>
        <hr className="border-neutral mb-4" />
        <ul className="space-y-6">
          <li className="flex items-start gap-[10px]">
            <div className="w-12 h-12 p-2 rounded-full bg-neutral flex items-center justify-center">
              <MailIcon width="24" height="24" fill="#0066CB" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat text-body text-secondaryText font-semibold">
                Correo:
              </span>
              <span className="font-montserrat text-bodyButton text-secondaryText">
                sergiocancela@textil.com.ar
              </span>
            </div>
          </li>
          <li className="flex items-start gap-[10px]">
            <div className="w-12 h-12 p-2 rounded-full bg-neutral flex items-center justify-center">
              <PhoneIcon width="24" height="24" fill="#0066CB" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat text-body text-secondaryText font-semibold">
                Teléfono:
              </span>
              <span className="font-montserrat text-bodyButton text-secondaryText">
                +54 11 1234-5678
              </span>
            </div>
          </li>
          <li className="flex items-start gap-[10px]">
            <div className="w-12 h-12 p-2 rounded-full bg-neutral flex items-center justify-center">
              <PhoneIcon width="24" height="24" fill="#0066CB" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat text-body text-secondaryText font-semibold">
                WhatsApp:
              </span>
              <span className="font-montserrat text-bodyButton text-secondaryText">
                +54 11 1234-5678
              </span>
            </div>
          </li>
        </ul>
        <hr className="border-neutral my-4" />
      </div>
    </div>
  );
};

export default MachinesPopup;
