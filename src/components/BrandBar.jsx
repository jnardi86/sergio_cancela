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
      <div className="max-w-screen-2xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-12 gap-4 items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mb-2 text-white md:col-span-3"
          >
            <img src={logo.src} alt={logo.alt} className="object-contain w-16 h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBar;





  