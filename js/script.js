// Menu hamburguesa
document.getElementById("hamburger-menu").addEventListener("click", function() {
    var navLinks = document.getElementById("nav");
    var mainContent = document.querySelector("main");
    
   
    navLinks.classList.toggle("active");
    
    
    if (navLinks.classList.contains("active")) {
        mainContent.style.marginTop = navLinks.offsetHeight + "px"; 
    } else {
        mainContent.style.marginTop = "180px";  
    }
});

console.log("Hola Profe!");

// Buscador
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Captura el texto del input

    
    const productos = [
        { id: 1, nombre: 'Almohadon Cactus', descripcion: 'Almohadón suave y cómodo.', precio: 5000 },
        { id: 2, nombre: 'Sillas Caterina', descripcion: 'Juego de sillas x4.', precio: 520000 },
        { id: 3, nombre: 'Juego de ceramica Grey', descripcion: 'Juego de ceramica elegante x6.', precio: 85000 },
        { id: 4, nombre: 'Manta Snow', descripcion: 'Manta de algodon.', precio: 17500 },
        { id: 5, nombre: 'Florero Crystal', descripcion: 'Florero 15 x35 cm.', precio: 17500 },
        { id: 6, nombre: 'Camino Leaves', descripcion: 'Camino de algodón egipcio 180 cm.', precio: 17500 }
    ];

    const resultados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(searchTerm) || 
        producto.descripcion.toLowerCase().includes(searchTerm)
    );

    mostrarResultados(resultados); // Mostrar los productos filtrados
});

function mostrarResultados(productos) {
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    resultadosContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (productos.length === 0) {
        resultadosContainer.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    // Crear un listado de productos encontrados
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        resultadosContainer.appendChild(productoElement);
    });
}