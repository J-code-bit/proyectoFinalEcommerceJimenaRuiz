
const cargarProductos = async () => {
    fetch('./productos.json') 
        .then(response => response.json()) 
        .then(data => mostrarProductos(data)) 
        .catch(error => console.error('Error al cargar los productos:', error));
}


function mostrarProductos(data) {
    const main = document.querySelector('main');
    data.forEach(categoria => {
        const section = document.createElement('section');
        
        const categoriaTitulo = document.createElement('h2');
        categoriaTitulo.textContent = categoria.categoria;
        section.appendChild(categoriaTitulo);
        
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-productos');

        categoria.productos.forEach(producto => {
            const article = document.createElement('article');
            article.dataset.id = producto.id; 

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = `Imagen de ${producto.titulo}`;
            img.width = 200;

            const h2 = document.createElement('h2');
            h2.textContent = producto.titulo;

            const p = document.createElement('p');
            p.textContent = `$${producto.precio} (el kg)`;

            const button = document.createElement('button');
            button.textContent = 'Comprar';

            button.addEventListener('click', () => agregarAlCarrito(producto));

            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p);
            article.appendChild(button);

            cardContainer.appendChild(article);
        });

        section.appendChild(cardContainer);
        main.appendChild(section);
    });
}

// Función para agregar  producto al carrito
function agregarAlCarrito(producto) {
    // Guardamos el carrito en localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificamos si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
    
    if (productoExistente) {
        // Si ya existe, aumentamos la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, lo agregamos al carrito con cantidad 1
        producto.cantidad = 1;
        carrito.push(producto);
    }

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.titulo} agregado al carrito`);
}

// Llamada a la función cargarProductos al cargar la página
cargarProductos();
