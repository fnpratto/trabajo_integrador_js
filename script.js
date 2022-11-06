const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

function valoresValidos() {
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
}


// Cálculo total a pagar
function total_a_pagar() {
    valoresValidos();

    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnComprar.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);