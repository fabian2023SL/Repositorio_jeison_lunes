import moduloValidacion from './validacion.js';

function envio() {
  (() => {
    const formulario = document.getElementById('survey-form');

    const manejarEnvio = (event) => {
      event.preventDefault();
      if (moduloValidacion.validarFormulario()) {
        const successMessage = document.createElement('p');
        successMessage.textContent = '¡Formulario enviado con éxito!';
        formulario.appendChild(successMessage);
        formulario.submit();
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Por favor, completa correctamente el formulario antes de enviarlo';
        errorMessage.style.color = 'red';
        formulario.appendChild(errorMessage);
      }
    };

    formulario.addEventListener('submit', manejarEnvio);
  })();
}
export default envio;