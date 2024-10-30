document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const rut = document.getElementById('rut').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();

    const errorNombre = document.getElementById('errorNombre');
    const errorApellido = document.getElementById('errorApellido');
    const errorRut = document.getElementById('errorRut');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');

    // Limpiar mensajes de error previos
    errorNombre.textContent = '';
    errorApellido.textContent = '';
    errorRut.textContent = '';
    errorCorreo.textContent = '';
    errorPassword.textContent = '';

    let valid = true;  // Controlar si el formulario es válido

    // Validar nombre y apellido
    const nombreApellidoRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreApellidoRegex.test(nombre)) {
        errorNombre.textContent = "El nombre solo puede contener letras y acentos.";
        valid = false;
    }
    if (!nombreApellidoRegex.test(apellido)) {
        errorApellido.textContent = "El apellido solo puede contener letras y acentos.";
        valid = false;
    }

    // Validar RUT
    const rutRegex = /^[0-9]{7,8}-[0-9kK]$/;
    if (!rutRegex.test(rut)) {
        errorRut.textContent = "Formato de RUT inválido. Debe ser 12345678-9.";
        valid = false;
    }

    // Validar correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        errorCorreo.textContent = "El correo debe tener un formato válido.";
        valid = false;
    }

    // Validar contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        errorPassword.textContent = "La contraseña debe tener al menos una mayúscula, un número, un símbolo y 6 caracteres.";
        valid = false;
    }

    // Mostrar mensaje de éxito o error
    if (valid) {
        alert("Formulario válido. Registro completado.");
        this.submit();
    }
});
