import React, { useState, useEffect } from "react";
import PhoneIcon from "./icons/PhoneIcon";
import MailIcon from "./icons/MailIcon";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);

    const isValid =
      updatedFormData.name.trim() !== "" &&
      updatedFormData.email.trim() !== "" &&
      updatedFormData.message.trim() !== "";
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Consulta enviada!",
      text: "Hemos recibido tu consulta. Nos pondremos en contacto contigo en breve.",
      icon: "success",
      iconColor: "#0066cb",
      confirmButtonText: "Aceptar",
      customClass: {
        popup: "bg-lightBg rounded-2xl shadow-lg",
        title: "text-h3 text-primaryText font-montserrat font-bold",
        content: "text-secondaryText font-montserrat text-body",
        confirmButton:
          "bg-paragraphText text-lightBg font-montserrat text-link font-semibold rounded-lg py-2 px-4 hover:bg-blue-700",
      },
    });

    setFormData({ name: "", email: "", message: "" });
    setIsFormValid(false);
  };

  return (
    <section
      id="contactForm"
      className="relative bg-cover bg-center py-12 px-4 flex items-center justify-center"
    >
      {/* Imagen de fondo para mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url('images/form_bg_mobile.png')` }}
      ></div>

      {/* Imagen de fondo para desktop */}
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center"
        style={{ backgroundImage: `url('images/form_bg_desktop.png')` }}
      ></div>

      {/* Contenedor Principal */}
      <div className="relative bg-neutral rounded-2xl shadow-lg p-6 border border-neutral w-full max-w-[900px] mx-auto md:w-96 lg:w-3/4 lg:flex lg:p-12">
        
        {/* Columna izquierda - Datos de contacto */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-primaryText font-montserrat text-h2 font-bold mb-6">
            Contactanos
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <MailIcon width="24" height="24" />
              </div>
              <div className="ml-3">
                <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">
                  Correo:
                </p>
                <p className="text-primaryText font-montserrat text-bodyInput">
                  sergiocancela@textil.com.ar
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <PhoneIcon width="24" height="24" />
              </div>
              <div className="ml-3">
                <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">
                  Teléfono:
                </p>
                <p className="text-primaryText font-montserrat text-bodyInput">
                  +54 11 1234-5678
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <PhoneIcon width="24" height="24" />
              </div>
              <div className="ml-3">
                <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">
                  WhatsApp:
                </p>
                <p className="text-primaryText font-montserrat text-bodyInput">
                  +54 11 1234-5678
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-bodyInput mb-1">
                Tu nombre <span className="text-stateError">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nombre completo"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-bodyInput mb-1">
                Tu correo <span className="text-stateError">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-bodyInput mb-1">
                Mensaje <span className="text-stateError">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="¿En qué te podemos ayudar?"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full font-semibold py-2 rounded-lg shadow-md ${
                isFormValid
                  ? "bg-paragraphText text-lightBg hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
