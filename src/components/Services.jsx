import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-lightBg py-8 px-4">
      {/* Encabezado */}
      <div className="w-[384] mb-6 px-4">
          <p className="text-secondary text-h3 font-medium uppercase tracking-wide mb-6">
            Servicios
          </p>
          <h2 className="text-primaryText text-h2 font-bold mb-6">
            Un servicio de tejido hecho a tu medida
          </h2>
          <p className="text-primary text-h4 font-bold mb-6">
            Transformamos tus diseños en tejidos
          </p>
          {/* Descripción */}
          <p className="text-paragraphText text-body font-normal mb-6">
            Nos enfocamos en dar vida a tus diseños a través de nuestro servicio de tejido a fasón.
            Trabajamos con dedicación y experiencia para crear tejidos que reflejen tus necesidades,
            cuidando cada detalle para garantizar un resultado de calidad.
          </p>
      </div>
      {/* Contenedor de la imagen */}
      <div className="bg-neutral p-8">
        <div className="overflow-hidden shadow-md">
          <img
            src="images/services_mobile.png"
            alt="Servicio de tejido"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
