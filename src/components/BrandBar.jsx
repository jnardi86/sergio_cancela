import React from "react";

const BrandBar = () => {
  const logos = [
    { src: "/images/honjungLogo.png", alt: "Logo 1" },
    { src: "/images/samsungLogo.png", alt: "Logo 2" },
    { src: "/images/longXingLogo.png", alt: "Logo 3" },
    { src: "/images/jumbercaLogo.png", alt: "Logo 4" },
  ];

  return (
    <div className="bg-primary py-2">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-6 grid grid-cols-2 md:grid-cols-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center md:col-span-3 lg:col-span-2 
              ${index === 0 ? "lg:col-start-3" : ""}`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-16 h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBar;






  