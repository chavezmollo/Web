/** MENU **/
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false; // Ocultar menú
    } else {
        nav.classList.add("responsive");
        menuVisible = true; // Mostrar menú
    }
};

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
};
