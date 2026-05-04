

// 1. Definición del arreglo de servicios
let servicios = [
    {
        nombre: "Caminata al Monte Tarn",
        precio: 25000,
        descripcion: "Caminata guiada al Monte Tarn con vistas al Estrecho de Magallanes.",
        imagen: "img/monte-tarn.jpg"
    },
    {
        nombre: "Caminata a Parrillar",
        precio: 18000,
        descripcion: "Recorrido por los senderos de la Reserva Nacional Laguna Parrillar.",
        imagen: "img/parrillar.jpg"
    },
    {
        nombre: "Caminata a Mirador Zapador Austral",
        precio: 15000,
        descripcion: "Senderismo con vista panorámica de la zona austral.",
        imagen: "img/mirador.jpg"
    }
];
// 2. Definicion de servicios y sus propiedades
function mostrarServicios() {
    const contenedor = document.getElementById("contenedor-servicios");
    
   
    contenedor.innerHTML = "";

    servicios.forEach(servicio => {
        
        const divCard = document.createElement("div");
        divCard.className = "servicio-card";

        
        divCard.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <h3>${servicio.nombre}</h3>
            <p><strong>Precio:</strong> $${servicio.precio.toLocaleString('es-CL')}</p>
            <p>${servicio.descripcion}</p>
        `;

     
        contenedor.appendChild(divCard);
    });
}

// 2. Validacion de formulario 

function validarFormulario() {

    // Obtención de valores
    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();
    const mensajeError = document.getElementById("Mensaje");

    
    if (!nombre || !celular || !correo || !pais || !ciudad || !consulta) {
        alert("Error: Todos los campos son obligatorios.");
        mensajeError.style.color = "red";
        mensajeError.innerHTML = "Por favor, complete todos los campos[cite: 1].";
        return;
    }

    
    if (isNaN(celular)) {
        alert("Error: El celular debe contener solo números.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
        alert("Error: El formato del correo electrónico no es válido.");
        return;
    }

    procesarEnvio();
}

function procesarEnvio() {
    const mensajeExito = document.getElementById("Mensaje");
    

    mensajeExito.style.color = "green";
    mensajeExito.innerHTML = "¡Formulario enviado con éxito! Los datos han sido registrados.";
    
    alert("Datos enviados correctamente al mail de la empresa.");
    

    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("formulario").reset(); 
}

window.onload = function() {
    mostrarServicios();
};