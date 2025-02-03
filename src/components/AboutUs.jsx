import React from 'react';
import CheckIcon from './icons/CheckIcon';

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="bg-lightBg flex flex-col lg:flex-row lg:items-center lg:justify-between lg:max-w-[1215px] lg:mx-auto lg:py-16 lg:px-12 xl:px-16 relative"
    >
      {/* Texto */}
      <div className="mx-4 py-8 lg:w-[65%] lg:px-8 lg:bg-neutral xl:px-12 lg:-mr-16 z-0 relative">
        <h2 className="font-montserrat text-h2 font-bold text-primaryText text-start mb-4">
          SOBRE NOSOTROS
        </h2>
        <p className="font-montserrat text-h4 font-bold text-secondaryText mb-4 lg:pr-6 xl:pr-0">
          Somos una empresa argentina especializada en proveer soluciones integrales para la industria textil.
        </p>
        <p className="font-montserrat text-body text-paragraphText mb-6 lg:pr-8 xl:pr-0">
          Representamos marcas líderes en máquinas textiles y ofrecemos una amplia gama de repuestos
          esenciales, como platinas, jacks, frisadoras, agujas y mucho más.
          <span className="block">
            Con años de experiencia en el sector, nos destacamos por nuestra dedicación a acompañar a nuestros clientes en cada paso de su
            producción, asegurando calidad, durabilidad y rendimiento en cada producto.
          </span>
        </p>
        <div className="space-y-4 pl-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-neutral flex items-center justify-center">
              <CheckIcon width="27" height="27" fill="#0066CB" />
            </div>
            <span className="ml-3 font-montserrat text-h4 text-paragraphText font-bold">
              +20 AÑOS DE EXPERIENCIA
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-neutral flex items-center justify-center">
              <CheckIcon width="27" height="27" fill="#0066CB" />
            </div>
            <span className="ml-3 font-montserrat text-h4 text-paragraphText font-bold">
              4 FIRMAS REPRESENTADAS
            </span>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full mt-8 lg:w-[45%] lg:mt-0 lg:max-w-lg xl:max-w-xl relative z-10">
        <img
          src="images/aboutUs_desktop.png"
          alt="Sobre nosotros"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
