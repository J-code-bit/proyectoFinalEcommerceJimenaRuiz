
/*lista de productos
document.addEventListener('DOMContentLoaded',() =>{
    cargarProductos()
});
let productos;
const cargarProductos = async () =>{
    try{
        const response = await fetch ("./productos.json");
        productos = await response.json();
        mostrarProductos()
    }catch(error){
        console.error(error)
    }
};
cargarProductos()

const crearHTML = (item) =>{
    const html = `
    <article data-id="${item.id}">
        <img src="${item.imagen}" width="200" alt="${item.nombre}">
        <h2>${item.titulo}</h2>
        <p>$${item.precio}</p>
        <button>Agregar</button>
    </article>
    `;
    return html;
    };   

    const mostrarProductos = () => {
    fetch ("./productos.json")
        .then((response) => response.json())
        .then((items)=>{
            console.log(items);
            const listadoProductos = document.querySelector("#lista-productos");
            listadoProductos.innerHTML = " ";
            items.forEach(item => {
                const elementos = crearHTML(item)
                listadoProductos.innerHTML += elementos;
            });
        }) 
        .catch ((error) => console.error(error))
    }
    mostrarProductos()*/





// Función para cargar productos desde el archivo JSON
const cargarProductos = async () => {
    fetch('./productos.json') // Aquí colocas la ruta al archivo JSON
        .then(response => response.json()) // Parseamos el JSON
        .then(data => mostrarProductos(data)) // Pasamos los datos a la función que muestra los productos
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función para mostrar los productos en el HTML
function mostrarProductos(data) {
    // Recorrer las categorías y productos
    const main = document.querySelector('main');
    data.forEach(categoria => {
        // Crear un contenedor para cada categoría
        const section = document.createElement('section');
        
        const categoriaTitulo = document.createElement('h2');
        categoriaTitulo.textContent = categoria.categoria;
        section.appendChild(categoriaTitulo);
        
        // Crear un contenedor para las cards de productos
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-productos');

        // Recorrer los productos de la categoría
        categoria.productos.forEach(producto => {
            const article = document.createElement('article');

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

// Llamada a la función cargarProductos al cargar la página
cargarProductos();


