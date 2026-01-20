import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useForm } from "../../hooks/useForm";
import SuccessModal from "../ui/SuccessModal";
import { CONTACT_INFO, BUSINESS_HOURS } from "../../utils/constants";

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    formData,
    formErrors,
    isSubmitting,
    handleChange,
    validate,
    resetForm,
    submitForm,
  } = useForm({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (validate()) {
      const result = await submitForm();

      if (result.success) {
        setShowSuccessModal(true);
        resetForm();

        setTimeout(() => {
          setShowSuccessModal(false);
        }, 4000);
      } else {
        setErrorMessage(
          result.error ||
            "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
        );
      }
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600">Estamos listos para ayudarte</p>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                    formErrors.nombre ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="Juan Pérez"
                />
                {formErrors.nombre && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.nombre}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="juan@ejemplo.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  disabled={isSubmitting}
                  value={formData.telefono}
                  onChange={(e) => handleChange("telefono", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
                    formErrors.telefono ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="+51 999 999 999"
                />
                {formErrors.telefono && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.telefono}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  disabled={isSubmitting}
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  rows="4"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none transition ${
                    formErrors.mensaje ? "border-red-500" : "border-gray-300"
                  } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
                {formErrors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.mensaje}
                  </p>
                )}
              </div>

              <Motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-500 text-white hover:bg-primary-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Motion.button>
            </form>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    {CONTACT_INFO.phones.map((phone, index) => (
                      <p key={index}>{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    {CONTACT_INFO.emails.map((email, index) => (
                      <p key={index}>{email}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p>{CONTACT_INFO.address.street}</p>
                    <p>{CONTACT_INFO.address.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-2 border-primary-200 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Horario de Atención
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">
                    {BUSINESS_HOURS.weekdays.label}:
                  </span>{" "}
                  {BUSINESS_HOURS.weekdays.hours}
                </p>
                <p>
                  <span className="font-semibold">
                    {BUSINESS_HOURS.saturday.label}:
                  </span>{" "}
                  {BUSINESS_HOURS.saturday.hours}
                </p>
                <p>
                  <span className="font-semibold">
                    {BUSINESS_HOURS.sunday.label}:
                  </span>{" "}
                  {BUSINESS_HOURS.sunday.hours}
                </p>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </section>
  );
};

export default Contact;
