import React from "react";
import { Link } from "react-scroll";
import Arrow from "../icons/Arrow";

const HeroDesktop = () => {
  return (
    <section
      className="w-full h-[680px] mt-[74px] bg-cover"
      style={{ backgroundImage: "url('images/hero_bg_desktop.png')" }}
    >
      <div className="w-[60%] h-full bg-lightBg clip-slanted">
        <div className="flex flex-col items-start py-3 mx-[100px]">
          <div>
            <img src="images/figure_hero_desktop.png" alt="" className="lg:w-72 xl:w-[380px]" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-montserrat md:text-h2 xl:text-h1 font-extrabold text-primaryText mt-2">
              SOLUCIONES
              <span className="text-secondary block">TEXTILES</span>
              <span className="block">PENSADAS PARA</span>
              TU NEGOCIO
            </h1>
            <div className="relative flex flex-col items-start">
              <p className="font-montserrat md:text-bodyLink xl:text-body text-secondaryText font-medium mt-6 pr-32">
                Máquinas y repuestos de calidad, que acompañan cada paso de tu producción.
              </p>
              {/* Botón */}
              <div className="flex items-center justify-center lg:mt-3 xl:mt-6 2xl:mt-10 z-10 cursor-pointer">
                <Link
                  to="machines"
                  smooth={true}
                  duration={1000}
                  className="mt-4 lg:px-4 lg:py-2 xl:px-6 xl:py-3 bg-secondary text-lightBg font-montserrat text-bodyInput font-semibold rounded-lg shadow-md flex items-center gap-4 uppercase"
                >
                  Nuestra Maquinaria
                  <Arrow
                    width="24"
                    height="24"
                    fill="#FAFAFA"
                  />
                </Link>
              </div>
              <div className="absolute lg:top-20 lg:left-6 xl:top-10 xl:left-6">
                <img src="images/figure2_hero_desktop.png" alt="" className="lg:w-80 xl:w-[425px]" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroDesktop;
