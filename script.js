const form = document.getElementById("leadForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent =
    "¡Solicitud recibida! Nos pondremos en contacto contigo.";

  form.reset();
});