export default function validacion() {
  const validacion = (() => {
    const validarNombre = () => {
      const nombre = document.getElementById('name').value;
      if (nombre.trim() === '') {
        document.getElementById('name-error').textContent = 'El nombre es obligatorio';
        return false;
      }
      return true;
    };

    const validarEmail = () => {
      const email = document.getElementById('email').value;
      const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!patronEmail.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, introduce un email válido';
        return false;
      }
      return true;
    };

    // Puedes agregar más validaciones aquí según sea necesario

    return {
      validarNombre,
      validarEmail,
    };
  })();

  return validacion; // Esto asegura que devuelves un objeto funcional.
}
