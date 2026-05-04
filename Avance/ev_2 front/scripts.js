// Arreglo de objetos con los servicios
let servicios = [
    {
        nombre: "Caminata al Monte Tarn",
        precio: 25000,
        descripcion: "Una experiencia desafiante con vistas increíbles del Estrecho de Magallanes.",
        imagen: "img/monte-tarn.jpg"
    },
    {
        nombre: "Caminata a Parrillar",
        precio: 18000,
        descripcion: "Recorrido por senderos boscosos rodeando la Laguna Parrillar.",
        imagen: "img/parrillar.jpg"
    },
    {
        nombre: "Caminata a Mirador Zapador Austral",
        precio: 15000,
        descripcion: "Perfecta para fotografías panorámicas de la ciudad y el mar.",
        imagen: "img/mirador.jpg"
    }
];

// Función para mostrar servicios dinámicamente usando el DOM
function mostrarServicios() {
    const contenedor = document.getElementById("contenedor-servicios");
    
    servicios.forEach(servicio => {
        const div = document.createElement("div");
        div.className = "servicio-card";
        
        div.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <h3>${servicio.nombre}</h3>
            <p><strong>Precio:</strong> $${servicio.precio}</p>
            <p>${servicio.descripcion}</p>
        `;
        
        contenedor.appendChild(div);
    });
}

// Función de validación del formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const email = document.getElementById("email").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    // Validar campos vacíos
    if (!nombre || !celular || !email || !pais || !ciudad || !consulta) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar celular (solo números)
    if (isNaN(celular)) {
        alert("El celular debe contener solo números.");
        return;
    }

    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

    // Si todo es correcto
    mostrarMensajeExito();
    limpiarFormulario();
}

function mostrarMensajeExito() {
    const mensaje = document.getElementById("mensaje-exito");
    mensaje.style.display = "block";
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 5000);
}

function limpiarFormulario() {
    document.getElementById("form-contacto").reset();
}

// Ejecutar al cargar la página
window.onload = mostrarServicios;