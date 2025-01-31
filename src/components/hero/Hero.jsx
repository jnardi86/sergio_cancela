import React from "react";
import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";

const Hero = () => {
  return (
    <section>
      {/* Mostrar HeroMobile en móviles y tablets (hasta 1023px) */}
      <div className="block lg:hidden">
        <HeroMobile />
      </div>
      
      {/* Mostrar HeroDesktop en pantallas grandes (1024px en adelante) */}
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </section>
  );
};

export default Hero;
