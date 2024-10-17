document.getElementById("hamburger-menu").addEventListener("click", function() {
    var navLinks = document.getElementById("nav");
    var mainContent = document.querySelector("main");
    
    // Alterna la clase active para mostrar/ocultar el menú
    navLinks.classList.toggle("active");
    
    // Si el menú está activo, ajusta el margen superior de main
    if (navLinks.classList.contains("active")) {
        mainContent.style.marginTop = "300px";  // Ajusta este valor según el tamaño del menú
    } else {
        mainContent.style.marginTop = "150px";  // El margen cuando el menú está oculto
    }
});
