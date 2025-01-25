import React, { useState, useEffect } from "react";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import CloseIcon from "../icons/CloseIcon";

const MachinesCard = ({ imageSrc, title, subtitle }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Bloquear el scroll del body cuando el popup está abierto
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Limpieza al desmontar el componente o cerrar el popup
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      {/* Tarjeta */}
      <div
        onClick={togglePopup}
        className="cursor-pointer w-[284px] bg-lightBg overflow-hidden rounded-tr-2xl rounded-bl-2xl shadow-customDrop"
      >
        {/* Contenedor de la imagen */}
        <div className="w-full h-[180px] flex items-center justify-center bg-lightBg mb-4 border-solid border-b-2 border-b-neutral">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Contenido de la tarjeta */}
        <div className="p-4 text-center mb-4">
          <h3 className="font-montserrat text-bodyLink font-semibold text-primaryText mb-4">
            {title}
          </h3>
          <p className="font-montserrat text-bodyLink text-secondaryText mt-2">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 pt-6 pb-12 bg-primaryText bg-opacity-50 flex justify-center items-center z-50 min-h-screen">
          <div className="bg-lightBg top-8 rounded-2xl shadow-lg p-6 max-w-[320px] px-2 w-full relative">
            {/* Botón de cierre */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <CloseIcon width="14" height="14" fill="#344051" />
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
                  <span className="font-montserrat bodyButton text-secondaryText">
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
                  <span className="font-montserrat bodyButton text-secondaryText">
                    +54 11 1234-5678
                  </span>
                </div>
              </li>
            </ul>
            <hr className="border-neutral my-4" />
          </div>
        </div>
      )}
    </>
  );
};

export default MachinesCard;
