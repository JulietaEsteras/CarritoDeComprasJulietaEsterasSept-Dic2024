//PARA CARGAR EL CSS RAPIDO
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'non-critical-styles.css';
document.head.appendChild(link);



// MENU HAMBURGUESA
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

// BUSCADOR
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
// CHECK FORM (NO FUNCIONA)

function checkForm() {
    // Seleccionar el formulario
    const form = document.getElementById('contactForm');
  
    // Obtener todos los campos del formulario
    const inputs = form.querySelectorAll('input, textarea');
  
    // Variable para verificar si todos los campos están llenos
    let allFieldsComplete = true;
  
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        console.warn(`El campo "${input.name}" está vacío.`);
        allFieldsComplete = false;
      }
    });
  
    // Mensaje en consola
    if (allFieldsComplete) {
      console.log('Todos los campos están completos.');
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
  /*
  // CARGAR PRODUCTOS
  // Array de productos
const productos = [
    {
        id: 1,
        nombre: "Almohadón Cactus",
        imagen: "../img/pexels-photo-1248583.jpeg",
        descripcion: "Almohadón con diseño de cactus.",
        precio: 30
    },
    {
        id: 2,
        nombre: "Sillas Caterina",
        imagen: "../img/free-photo-of-a-table-in-a-room.jpeg",
        descripcion: "Sillas elegantes para comedor.",
        precio: 120
    },
    {
        id: 3,
        nombre: "Florero Crystal",
        imagen: "../img/pexels-lorraine-forever-blooms-280498-834694.jpg",
        descripcion: "Florero de vidrio cristalino.",
        precio: 50
    },
    {
        id: 4,
        nombre: "Manta Snow",
        imagen: "../img/mantaSnow.webp",
        descripcion: "Manta suave para tu sillón.",
        precio: 40
    },
    {
        id: 5,
        nombre: "Camino Leaves",
        imagen: "../img/pexels-photo-1008692.jpeg",
        descripcion: "Camino de mesa con hojas decorativas.",
        precio: 25
    },
    {
        id: 6,
        nombre: "Juego de cerámica Grey",
        imagen: "../img/pexels-photo-14320923.webp",
        descripcion: "Juego de cerámica gris para decoración.",
        precio: 80
    }
];

function mostrarProductos() {
    const contenedorProductos = document.querySelector('.container');
    contenedorProductos.innerHTML = ''; // Limpiar contenedor previo

    // Recorrer cada producto en el array
    productos.forEach((producto) => {
        const productoHTML = `
            <div class="card">
                <figure>
                    <img class="fotosP" src="${producto.imagen}" alt="Imagen de ${producto.nombre}">
                    <figcaption>${producto.nombre}</figcaption>
                </figure>
                <p class="descripcion">${producto.descripcion}</p>
                <p class="precio">Precio: $${producto.precio}</p>
                <button class="buttonP">
                    Agregar al carrito
                </button>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos();

//para PRODUCTOS DECO
const productosDeco = [
    {
        id: 1,
        nombre: "Almohadón Cactus",
        imagen: "../img/pexels-photo-1248583.jpeg",
        descripcion: "Almohadón con diseño de cactus.",
        precio: 30
    },
    {
        id: 2,
        nombre: "Sillas Caterina",
        imagen: "../img/free-photo-of-a-table-in-a-room.jpeg",
        descripcion: "Sillas elegantes para comedor.",
        precio: 120
    },
    {
        id: 3,
        nombre: "Florero Crystal",
        imagen: "../img/pexels-lorraine-forever-blooms-280498-834694.jpg",
        descripcion: "Florero de vidrio cristalino.",
        precio: 50
    },
    {
        id: 4,
        nombre: "Manta Snow",
        imagen: "../img/mantaSnow.webp",
        descripcion: "Manta suave para tu sillón.",
        precio: 40
    }
]; 

function mostrarProductosDeco() {
    const contenedorProductosDeco = document.querySelector('.containerDeco');
    contenedorProductosDeco.innerHTML = ''; // Limpiar contenedor previo

    // Recorrer cada producto en el array
    productosDeco.forEach((producto) => {
        const productoHTML = `
            <div class="card">
                <figure>
                    <img class="fotosP" src="${producto.imagen}" alt="Imagen de ${producto.nombre}">
                    <figcaption>${producto.nombre}</figcaption>
                </figure>
                <p class="descripcion">${producto.descripcion}</p>
                <p class="precio">Precio: $${producto.precio}</p>
                <button class="buttonP">
                    Agregar al carrito
                </button>
            </div>
        `;
        contenedorProductosDeco.innerHTML += productoHTML;
    });
}

// Llamar a la función para mostrar los productos
mostrarProductosDeco(); 

fetch('productos.json')
            .then(response => response.json())
            .then(data => {
                const lista = document.getElementById('container');
                
                data.forEach(producto => {
                    const item = document.createElement('card');
                    item.innerHTML = `<div class="card" > 
                       <figure>
                            <figcaption>${producto.nombre}</figcaption>
                            <img src="${producto.imagen}" alt="${producto.nombre}" >  
                        </figure>
                        <p>${producto.descripcion}</p>
                        <p>Precio: $${producto.precio}</p>
                        <button class="buttonP">
                            Agregar al carrito
                       </button>
                        </div>
                    `;
                    lista.appendChild(item);
                });
            })
            .catch(error => console.error('Error al cargar el JSON:', error));*/
           // Función para cargar productos y filtrarlos
function cargarProductos(filtro = "todos") {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('container');

            // Limpiar el contenedor antes de mostrar nuevos productos
            lista.innerHTML = "";

            // Filtrar los productos según el filtro seleccionado
            const productosFiltrados = data.filter(producto => {
                if (filtro === "descuento") {
                    return producto.descuento > 0;
                } else if (filtro === "sin-descuento") {
                    return producto.descuento === 0;
                }
                return true; // Mostrar todos si no hay filtro
            });

            // Mostrar los productos filtrados
            productosFiltrados.forEach(producto => {
                const item = document.createElement('div');
                item.classList.add('card');

                item.innerHTML = `
                    <figure>
                        <figcaption>${producto.nombre}</figcaption>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </figure>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                    ${
                        producto.descuento > 0
                            ? `<p><strong>Descuento: ${producto.descuento}%</strong></p>`
                            : ""
                    }
                    <button class="buttonP">Agregar al carrito</button>
                `;

                lista.appendChild(item);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Event listeners para botones de filtro
document.getElementById('btnTodos').addEventListener('click', () => cargarProductos("todos"));
document.getElementById('btnDescuento').addEventListener('click', () => cargarProductos("descuento"));
document.getElementById('btnSinDescuento').addEventListener('click', () => cargarProductos("sin-descuento"));

// Cargar todos los productos al inicio
cargarProductos();


//VALIDAR EDAD
/**//*
const userName = document.getElementById("name").value
const edadUsuario = document.getElementById("age").value
const greeting =document.getElementById("greeting");
greeting.innerText= "Hola " + userName
console.log (greeting)

let age;
while (age < 0 || age >120 || (isNaN(age))){
    age = parseInt(prompt ("age"));
    console.log(age);

    if (age < 0 || age >120 || (isNaN(age)) ){
        console.log ("ingrese un valor correcto para edad");
    }
    
}
console.log("la edad es correcta");

do {
    age = parseInt(prompt ("age"));
    console.log(age);

    if (age < 0 || age >120 || (isNaN(age)) ){
        console.log ("ingrese un valor correcto para edad");
    }

}
while (age < 0 || age >120 || (isNaN(age)) )


console.log("la edad es correcta");

for (let contador = 0; contador <= 3; contador ++/* contador= contador+1 ){
    age = parseInt(prompt ("age"));
    console.log(age);

    if (age < 0 || age >120 || (isNaN(age)) ){
        console.log ("ingrese un valor correcto para edad");
    }
    else {
        console.log("la edad es correcta");
        break;
    }

}
console.log("se terminaron los intentos")
*/ 