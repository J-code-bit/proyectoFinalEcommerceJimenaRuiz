/* validar formulario*/
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

}) 


/*lista de productos*/

