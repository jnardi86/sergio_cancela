import React from "react";
import MachinesCard from "./MachinesCard";

const MachinesSection = () => {
    const machines = [
        {
            imageSrc: "images/img_card_rectilineas.png",
            title: "Rectilíneas",
            subtitle: "Long Xing",
        },
        {
            imageSrc: "images/img_card_circulares1.png",
            title: "Circulares",
            subtitle: "Hongjun",
        },
        {
            imageSrc: "images/img_card_circulares2.png",
            title: "Circulares",
            subtitle: "Jumberca",
        },
        {
            imageSrc: "images/img_card_samsung.png",
            title: "Agujas",
            subtitle: "Samsung",
        },
    ];

    return (
        <section className="bg-neutral py-8  px-4">
            <p className=" font-montserrat text-body text-secondary font-thin mb-2 text-center">
                Maquinaria
            </p>
            <h2 className="font-montserrat text-h2 text-primaryText font-bold text-center mb-4">
                Firmas que representamos
            </h2>
            <p className="font-montserrat text-bodyLink text-secondaryText text-center mb-8">
                Trabajamos junto a marcas líderes en la industria textil para ofrecer
                máquinas y repuestos de la más alta calidad.
            </p>
            <div className="flex flex-col justify-center items-center gap-4">
                {machines.map((machine, index) => (
                    <MachinesCard
                        key={index}
                        imageSrc={machine.imageSrc}
                        title={machine.title}
                        subtitle={machine.subtitle}
                    />
                ))}
            </div>
        </section>
    );
};

export default MachinesSection;
