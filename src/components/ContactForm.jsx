import React, { useState } from "react";
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

    // Verificar si todos los campos están llenos
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
        popup: "bg-lightBg rounded-2xl shadow-lg", // Fondo y bordes
        title: "text-h3 text-primaryText font-montserrat font-bold", // Estilo del título
        content: "text-secondaryText font-montserrat text-body", // Estilo del contenido
        confirmButton: "bg-paragraphText text-lightBg font-montserrat text-link font-semibold rounded-lg py-2 px-4 hover:bg-blue-700", // Botón de confirmación
      },
    });

    // Resetear el formulario después de enviarlo
    setFormData({ name: "", email: "", message: "" });
    setIsFormValid(false);
  };

  return (
    <section
      id="contactForm"
      className="relative bg-cover bg-center py-12 px-4"
      style={{
        backgroundImage: `url('images/form_bg_mobile.png')`,
      }}
    >
      {/* Imagen de fondo para desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `url('images/form_bg_desktop.png')`,
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="relative bg-neutral rounded-xl shadow-md p-6 border border-neutral max-w-lg mx-auto lg:max-w-2xl">
        {/* Información de contacto */}
        <h2 className="text-primaryText font-montserrat text-h2 text-center font-bold mb-6">
          Contactanos
        </h2>
        <ul className="space-y-6 mb-6">
          <li className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <MailIcon width="24" height="24" />
            </div>
            <div className="ml-3">
              <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">Correo:</p>
              <p className="text-primaryText font-montserrat text-bodyInput">sergioancela@textil.com.ar</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <PhoneIcon width="24" height="24" />
            </div>
            <div className="ml-3">
              <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">Teléfono:</p>
              <p className="text-primaryText font-montserrat text-bodyInput">+54 11 1234-5678</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <PhoneIcon width="24" height="24" />
            </div>
            <div className="ml-3">
              <p className="text-secondaryText font-montserrat text-bodyLink font-semibold">WhatsApp:</p>
              <p className="text-primaryText font-montserrat text-bodyInput">+54 11 1234-5678</p>
            </div>
          </li>
        </ul>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-montserrat text-paragraphText text-bodyInput mb-1">
              Tu nombre <span className="text-stateError">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre completo"
              className="w-full px-2 py-2 font-montserrat text-bodyInput text-primaryText border border-primaryText rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-montserrat text-paragraphText text-bodyInput mb-1">
              Tu correo <span className="text-stateError">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo electrónico"
              className="w-full px-2 py-2 font-montserrat text-bodyInput text-primaryText border border-primaryText rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-montserrat text-paragraphText text-bodyInput mb-1">
              Mensaje <span className="text-stateError">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="¿En qué te podemos ayudar?"
              className="w-full px-2 py-2 font-montserrat text-bodyInput text-primaryText border border-primaryText rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-montserrat text-bodyButton font-semibold py-2 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-secondary ${isFormValid
                ? "bg-paragraphText text-lightBg hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            ENVIAR CONSULTA
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
