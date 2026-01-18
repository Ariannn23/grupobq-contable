export const validateName = (name) => {
  if (!name || name.trim().length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }
  return null;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Por favor ingresa un email válido";
  }
  return null;
};

export const validatePhone = (phone) => {
  const cleanPhone = phone.replace(/\s/g, "");
  const phoneRegex = /^[0-9]{9,15}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return "Ingresa un teléfono válido (9-15 dígitos)";
  }
  return null;
};

export const validateMessage = (message) => {
  if (!message || message.trim().length < 10) {
    return "El mensaje debe tener al menos 10 caracteres";
  }
  return null;
};

export const validateForm = (formData) => {
  const errors = {};

  const nameError = validateName(formData.nombre);
  if (nameError) errors.nombre = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.telefono);
  if (phoneError) errors.telefono = phoneError;

  const messageError = validateMessage(formData.mensaje);
  if (messageError) errors.mensaje = messageError;

  return errors;
};
