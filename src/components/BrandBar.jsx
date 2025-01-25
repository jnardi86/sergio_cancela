import React from "react";

const BrandBar = () => {
  return (
    <div className="bg-primary py-6">
      <div className="max-w-screen-2xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-12 gap-4 items-center">
        {/* Elementos temporales representando los logos */}
        {["LOGO1", "LOGO2", "LOGO3", "LOGO4"].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-white text-lg font-semibold md:col-span-3"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBar;

