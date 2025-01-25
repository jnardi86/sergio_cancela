import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
