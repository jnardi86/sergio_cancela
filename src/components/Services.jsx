import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-lightBg py-8 px-4 lg:flex lg:items-center lg:justify-between lg:max-w-[1215px] lg:mx-auto lg:py-16 lg:px-12 xl:px-16"
    >
      {/* Texto */}
      <div className="w-full lg:w-1/2 lg:px-8 lg:order-2">
        <p className="font-montserrat text-secondary text-h3 font-medium uppercase tracking-wide mb-6">
          Servicios
        </p>
        <h2 className="font-montserrat text-primaryText text-h2 font-bold mb-6 uppercase">
          Un servicio de tejido hecho a tu medida
        </h2>
        <p className="font-montserrat text-primary text-h4 font-bold mb-6">
          Transformamos tus diseños en tejidos
        </p>
        {/* Descripción */}
        <p className="font-montserrat text-paragraphText text-body font-normal mb-6 lg:w-96">
          Nos enfocamos en dar vida a tus diseños a través de nuestro servicio de tejido a fasón.
          Trabajamos con dedicación y experiencia para crear tejidos que reflejen tus necesidades,
          cuidando cada detalle para garantizar un resultado de calidad.
        </p>
      </div>
      {/* Contenedor de la imagen */}
      <div className="lg:w-1/2 flex justify-center lg:order-1">
        <div className="bg-neutral p-8">
          <div className="overflow-hidden">
            <picture>
              {/* Imagen para desktop */}
              <source srcSet="images/services_desktop.png" media="(min-width: 1024px)" />
              {/* Imagen para mobile (por defecto) */}
              <img
                src="images/services_mobile.png"
                alt="Servicio de tejido"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
