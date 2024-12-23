const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let isValid = true; 

    const nombre = document.querySelector('#nombre');
    const errorNombre = document.querySelector("#error-nombre");

    nombre.style.border = "";
    errorNombre.textContent = "";

    if (nombre.value.length < 4) {
        nombre.style.border = "1px solid red";
        errorNombre.textContent = "El nombre tiene que tener 4 caracteres o más";
        isValid = false; 
    }

    const email = document.querySelector('#email');
    const errorEmail = document.querySelector("#error-email");

    email.style.border = "";
    errorEmail.textContent = "";

    if (email.value.length < 6 || !/\S+@\S+\.\S+/.test(email.value)) {
        email.style.border = "1px solid red";
        errorEmail.textContent = "El correo debe tener 6 caracteres o más y un formato válido.";
        isValid = false; 
    }

    const consulta = document.querySelector('#consulta');
    const errorConsulta = document.querySelector("#error-consulta");

    consulta.style.border = "";
    errorConsulta.textContent = "";

    if (consulta.value.trim() === "") {
        consulta.style.border = "1px solid red";
        errorConsulta.textContent = "Por favor, ingresa tu consulta.";
        isValid = false;
    }

    if (isValid) {
        console.log("Formulario enviado con éxito");
    } else {
        console.log("Formulario no válido");
    }
});