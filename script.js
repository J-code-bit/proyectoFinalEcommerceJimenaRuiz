/* validar formulario
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault ();

    const nombre = document.querySelector('#nombre');

    console.log (nombre.value.length);

    if (nombre.value.length < 4) {
        nombre.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-nombre");
        errorNombre.textContent = "El nombre tiene que tener 3 caracteres o más";
    }; 

    const email = document.querySelector('#email');

    console.log (email.value.length);

    if (email.value.length < 6) {
        email.style.border = "1px solid red";
        const errorEmail = document.querySelector("#error-email");
        errorEmail.textContent = "El email tiene que tener 5 caracteres o más";
    }

}) */


/*lista de productos*/
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
    mostrarProductos()

