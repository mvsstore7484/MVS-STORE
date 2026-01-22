const productos = [
    { id: 1, nombre: "Arbaleta Aracnida", precio: 30, img: "img/arbaleta_aracnida.png" },
    { id: 2, nombre: "Borde de Amatista", precio: 50, img: "img/borde_de amatista.png" },
    { id: 3, nombre: "Cuchillo de Papa Noel", precio: 30, img: "img/cuchillo_papa_noel.png" },
    { id: 4, nombre: "Espada Cosmica", precio: 20, img: "img/espada_cosmica.png" },
    { id: 5, nombre: "Francotirador Cosmico", precio: 20, img: "img/francotirador_cosmico.png" },
    { id: 6, nombre: "Pistola Cosmica", precio: 20, img: "img/pistola_cosmica.png" },
    { id: 7, nombre: "Franco X Ballesta", precio: 40, img: "img/ll.png" }, 
    { id: 8, nombre: "Espada del Dragon", precio: 40, img: "img/Espada del dragon.png" },
    { id: 9, nombre: "Fuego Ghoul", precio: 50, img: "img/Fuego ghoul.png" },
    { id: 10, nombre: "Espada Demoniaca", precio: 30, img: "img/Espada demoniaca.png" },
    { id: 11, nombre: "Francotirador del Safari", precio: 20, img: "img/Francotirador del safari.png" },
    { id: 12, nombre: "Arbaleta Forjada por el Cielo", precio: 70, img: "img/Arbaleta forjada por el cielo.png" },
    { id: 13, nombre: "Hacha de Calabaza", precio: 20, img: "img/Hacha de calabaza.png" },
    { id: 14, nombre: "Guadaña con Alas de Murcielago", precio: 45, img: "img/Guadaña con alas de murcielago.png" },
    { id: 15, nombre: "Globo de Nieve", precio: 20, img: "img/Globo de nieve.png" },
    { id: 16, nombre: "Pistola con Barril", precio: 30, img: "img/Pistola con barril.png" },
    { id: 17, nombre: "Pistola de Fuegos Artificiales", precio: 45, img: "img/Pistola de fuegos artificiales.png" },
    { id: 18, nombre: "Arma de Pino", precio: 40, img: "img/Arma de pino.png" },
    { id: 19, nombre: "Pistola de Picadura Solar", precio: 40, img: "img/Pistola de picadura solar.png" },
    { id: 20, nombre: "Espada Solar Merendera", precio: 40, img: "img/Espada solar merendera.png" },
    { id: 21, nombre: "Francotirador de Hielo", precio: 30, img: "img/Francotirador de hielo.png" }
];

let carrito = [];

// Cargar productos al inicio
function cargarProductos() {
    const contenedor = document.getElementById('productos');
    if (!contenedor) return;
    
    // Limpiamos el contenedor por si acaso
    contenedor.innerHTML = "";
    
    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.nombre}" onerror="this.src='img/placeholder.png'">
                <h3>${p.nombre}</h3>
                <p>${p.precio} R$</p>
                <button class="btn-add" onclick="agregarAlCarrito(${p.id})">Agregar al Carrito</button>
            </div>`;
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    document.getElementById('cart-count').innerText = carrito.length;
    const lista = document.getElementById('cart-items-list');
    const totalElement = document.getElementById('total-robux');
    
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        lista.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid #222;">
                <span>🔫 ${p.nombre} - ${p.precio} R$</span>
                <button onclick="eliminarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer;">&times;</button>
            </div>`;
    });
    totalElement.innerText = total;
}

// Nueva función para eliminar items (muy útil)
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función única para abrir/cerrar carrito
function toggleCarrito() {
    const modal = document.getElementById('cart-modal');
    // Usamos el estilo computado para verificar la visibilidad real
    const isFlex = window.getComputedStyle(modal).display === "flex";
    
    if (isFlex) {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

window.onload = cargarProductos;