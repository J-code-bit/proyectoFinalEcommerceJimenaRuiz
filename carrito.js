
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Leer carrito desde localStorage

// Función para actualizar el carrito
const actualizarCarrito = () => {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = ''; // Limpiar lista

    let total = 0;
    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${producto.titulo} - $${producto.precio}`;
        carritoItems.appendChild(itemCarrito);
        total += producto.precio;
    });

    // Mostrar el total en la página
    document.getElementById('total').textContent = total;
};

// Función para vaciar el carrito
const vaciarCarrito = () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Vaciamos el carrito en localStorage
    actualizarCarrito();
};

// Función para cargar los productos en el carrito
const cargarCarrito = () => {
    if (carrito.length > 0) {
        actualizarCarrito();
    } else {
        document.getElementById('carrito').innerHTML = '<p>Tu carrito está vacío</p>';
    }
};

// Evento de vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

// Cargar el carrito al cargar la página
cargarCarrito();

