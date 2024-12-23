
let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 

const actualizarCarrito = () => {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = ''; 

    let total = 0;
    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${producto.titulo} - $${producto.precio}`;
        carritoItems.appendChild(itemCarrito);
        total += producto.precio;
    });

    document.getElementById('total').textContent = total;
};

const vaciarCarrito = () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    actualizarCarrito();
};

const cargarCarrito = () => {
    if (carrito.length > 0) {
        actualizarCarrito();
    } else {
        document.getElementById('carrito').innerHTML = '<p>Tu carrito está vacío</p>';
    }
};

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

cargarCarrito();

