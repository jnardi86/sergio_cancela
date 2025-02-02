import React, { useState } from "react";
import MachinesPopup from "./MachinesPopup";

const MachinesCard = ({ imageSrc, title, subtitle }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      {/* Tarjeta */}
      <div
        onClick={() => window.innerWidth < 1024 && togglePopup()} // Abre popup en mobile
        className="cursor-pointer w-[284px] bg-lightBg overflow-hidden rounded-tr-2xl rounded-bl-2xl shadow-customDrop group lg:hover:bg-neutral lg:transition-colors lg:duration-300 lg:hover:translate-y-2 lg:hover:translate-x-2 lg:transform lg:transition-transform lg:duration-500"
      >
        {/* Contenedor de la imagen */}
        <div className="relative w-full h-auto flex items-center justify-center bg-lightBg mb-4 border-solid border-b-2 border-b-neutral">
          <img
            src={imageSrc}
            alt={title}
            className="w-72 h-52 object-contain"
          />
          {/* Capa transparente que aparece en hover */}
          <div className="absolute inset-0 bg-neutral bg-opacity-50 opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300"></div>
          {/* Botón de "Consultar" SOLO PARA LG */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita que el click en el botón active el evento de la card
              togglePopup();
            }}
            className="absolute bottom-4 bg-secondary font-montserrat text-bodyButton text-lightBg font-semibold px-6 py-2 rounded-lg shadow-md opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 hover:bg-lightBg hover:text-secondary hover:border-solid hover:border-secondary hover:border-2"
          >
            CONSULTAR
          </button>
        </div>
        {/* Contenido de la tarjeta */}
        <div className="p-4 text-center mb-4">
          <h3 className="font-montserrat text-h3 font-semibold text-primaryText text-center mb-4">
            {title}
          </h3>
          <p className="font-montserrat text-bodyLink text-secondaryText text-center mt-2">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen &&  <MachinesPopup togglePopup={togglePopup} />}
      {/* {isPopupOpen && <MachinesPopup togglePopup={togglePopup} />} */}
    </>
  );
};

export default MachinesCard;
