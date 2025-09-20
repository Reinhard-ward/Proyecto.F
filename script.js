document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("abrir-carta-btn");
    const cartaOculta = document.getElementById("carta-oculta");
    const entradaContainer = document.querySelector(".entrada-container");

    boton.addEventListener("click", function() {
        entradaContainer.style.display = "none";
        cartaOculta.style.display = "block";
    });
});
