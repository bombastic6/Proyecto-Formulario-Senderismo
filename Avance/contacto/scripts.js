 function validarFormulario() {
    // Obtención de valores
    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();
    const mensajeError = document.getElementById("Mensaje");

    // 1. Validación: Campos obligatorios y Texto no vacío
    if (!nombre || !celular || !correo || !pais || !ciudad || !consulta) {
        alert("Error: Todos los campos son obligatorios.");
        mensajeError.style.color = "red";
        mensajeError.innerHTML = "Por favor, complete todos los campos.";
        return;
    }

    // 2. Validación: Celular numérico
    // Usamos isNaN para verificar que sea un número
    if (isNaN(celular)) {
        alert("Error: El celular debe contener solo números.");
        return;
    }

    // 3. Validación: Email válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
        alert("Error: El formato del correo electrónico no es válido.");
        return;
    }

    // Si todas las validaciones pasan:
    procesarEnvio();
}

function procesarEnvio() {
    const mensajeExito = document.getElementById("Mensaje");
    
    // Manipulación del DOM: Mostrar mensaje de éxito
    mensajeExito.style.color = "green";
    mensajeExito.innerHTML = "¡Formulario enviado con éxito! Los datos han sido registrados.";
    
    alert("Datos enviados correctamente al mail de la empresa.");
    
    // Limpiar el formulario después del envío
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}