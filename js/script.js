// Pierre Skibinski — Le Coach
// JS de base : menu mobile + gestion simple du formulaire de contact

document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Formulaire de contact (pas d'envoi réel pour l'instant — à brancher plus tard)
  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        feedback.textContent = "Merci de remplir tous les champs avant d'envoyer.";
        feedback.style.color = "#B5562A";
        return;
      }
      if (!emailPattern.test(email)) {
        feedback.textContent = "L'adresse email ne semble pas valide.";
        feedback.style.color = "#B5562A";
        return;
      }

      // Pas de backend pour l'instant : on affiche juste une confirmation locale.
      feedback.textContent = "Message prêt à être envoyé — la connexion au serveur d'envoi sera ajoutée prochainement.";
      feedback.style.color = "#1F4A3D";
      form.reset();
    });
  }
});
