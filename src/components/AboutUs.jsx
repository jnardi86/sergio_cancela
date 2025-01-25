import React from 'react';
import CheckIcon from './icons/CheckIcon';


const AboutUs = () => {
    return (
        <section className="bg-lightBg flex flex-col lg:py-16 lg:px-16 lg:flex-row lg:items-center lg:space-x-8">
            {/* Texto */}
            <div className="mx-4 py-8 px-4 lg:w-1/2">
                <h2 className="font-montserrat text-h2 font-bold text-primaryText mb-4">Sobre Nosotros</h2>
                <p className="font-montserrat text-h4 font-bold text-secondaryText mb-4">
                    Somos una empresa argentina especializada en proveer soluciones integrales para la industria textil.
                </p>
                <p className="font-montserrat text-body text-paragraphText mb-6">
                    Representamos marcas líderes en máquinas textiles y ofrecemos una amplia gama de repuestos
                    esenciales, como platinas, jacks, frisadoras, agujas y mucho más. Con años de experiencia en el
                    sector, nos destacamos por nuestra dedicación a acompañar a nuestros clientes en cada paso de su
                    producción, asegurando calidad, durabilidad y rendimiento en cada producto.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className='w-12 h-12 rounded-full bg-neutral flex items-center justify-center'>
                            <CheckIcon
                                width='27'
                                height='27'
                                fill='#0066CB'
                            />
                        </div>
                        <span className="ml-3 font-montserrat text-h4 text-primaryText font-bold">+20 AÑOS DE EXPERIENCIA</span>
                    </div>
                    <div className="flex items-center">
                        <div className='w-12 h-12 rounded-full bg-neutral flex items-center justify-center'>
                            <CheckIcon
                                width='27'
                                height='27'
                                fill='#0066CB'
                            />
                        </div>
                        <span className="ml-3 font-montserrat text-h4 text-primaryText font-bold">4 FIRMAS REPRESENTADAS</span>
                    </div>
                </div>
            </div>
            {/* Imagen */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                <img
                    src="images/aboutUs_mobile.png"
                    alt="Sobre nosotros"
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default AboutUs;
