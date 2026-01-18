import { useState } from "react";
import { validateForm } from "../utils/validation";
import { FORM_ENDPOINT } from "../utils/constants";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = validateForm(formData);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const resetForm = () => {
    setFormData(initialState);
    setFormErrors({});
  };

  const submitForm = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          _subject: `Nuevo contacto de ${formData.nombre}`,
          _template: "table",
        }),
      });

      const data = await response.json();

      setIsSubmitting(false);

      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: "Error al enviar el formulario" };
      }
    } catch (error) {
      setIsSubmitting(false);
      return { success: false, error: "Error de conexión. Intenta de nuevo." };
    }
  };

  return {
    formData,
    formErrors,
    isSubmitting,
    handleChange,
    validate,
    resetForm,
    submitForm,
  };
};
