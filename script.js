const formulario = document.getElementById('formulario');
const body = document.body;
const btnNormal = document.getElementById('btnNormal');
const btnAltoContraste = document.getElementById('btnAltoContraste');

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEmail = document.getElementById('email');
const inputFechaNacimiento = document.getElementById('fechaNacimiento');
const inputPaisOrigen = document.getElementById('pais');

const errorNombre = document.getElementById('error-nombre');
const errorApellido = document.getElementById('error-apellido');
const errorEmail = document.getElementById('error-email');
const errorFechaNacimiento = document.getElementById('error-fechaNacimiento');
const errorPaisOrigen = document.getElementById('error-pais');

function mostrarError(inputElement, errorElement, mensaje) {
    inputElement.classList.add('input-error');
    inputElement.setAttribute('aria-invalid', 'true');
    errorElement.textContent = mensaje;
}

function limpiarError(inputElement, errorElement) {
    inputElement.classList.remove('input-error');
    inputElement.setAttribute('aria-invalid', 'false');
    errorElement.textContent = '';
}

function limpiarTodosLosErrores() {
    limpiarError(inputNombre, errorNombre);
    limpiarError(inputApellido, errorApellido);
    limpiarError(inputEmail, errorEmail);
    limpiarError(inputFechaNacimiento, errorFechaNacimiento);
    limpiarError(inputPaisOrigen, errorPaisOrigen);
}

function validarNombre() {
    const valor = inputNombre.value.trim();
    if (valor === '') {
        mostrarError(inputNombre, errorNombre, 'El nombre no puede estar vacio.');
        return false;
    }
    if (valor.length < 3) {
        mostrarError(inputNombre, errorNombre, 'Al menos 3 letras.');
        return false;
    }
    limpiarError(inputNombre, errorNombre);
    return true;
}

function validarApellido() {
    const valor = inputApellido.value.trim();
    if (valor === '') {
        mostrarError(inputApellido, errorApellido, 'El apellido no puede estar vacio.');
        return false;
    }
    if (valor.length > 50) {
        mostrarError(inputApellido, errorApellido, 'A lo sumo 50 letras.');
        return false;
    }
    limpiarError(inputApellido, errorApellido);
    return true;
}

function validarEmail() {
    const valor = inputEmail.value.trim();
    if (valor === '') {
        mostrarError(inputEmail, errorEmail, 'El email no puede estar vacio.');
        return false;
    }
    if (valor.length > 320) {
        mostrarError(inputEmail, errorEmail, 'A lo sumo 320 caracteres.');
        return false;
    }
    limpiarError(inputEmail, errorEmail);
    return true;
}

function validarFechaNacimiento() {
    const valor = inputFechaNacimiento.value.trim();
    if (valor === '') {
        mostrarError(inputFechaNacimiento, errorFechaNacimiento, 'La fecha de nacimiento no puede estar vacia.');
        return false;
    }
    limpiarError(inputFechaNacimiento, errorFechaNacimiento);
    return true;
}

function validarPaisOrigen() {
    const valor = inputPaisOrigen.value.trim();
    if (valor === '') {
        mostrarError(inputPaisOrigen, errorPaisOrigen, 'El pais no puede estar vacio.');
        return false;
    }
    limpiarError(inputPaisOrigen, errorPaisOrigen);
    return true;
}

inputNombre.addEventListener('input', validarNombre);
inputApellido.addEventListener('input', validarApellido);
inputEmail.addEventListener('input', validarEmail);
inputFechaNacimiento.addEventListener('input', validarFechaNacimiento);
inputPaisOrigen.addEventListener('input', validarPaisOrigen);

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    limpiarTodosLosErrores();
    try {
        const nombreValido = validarNombre();
        const apellidoValido = validarApellido();
        const emailValido = validarEmail();
        const fechaNacimientoValido = validarFechaNacimiento();
        const paisOrigenValido = validarPaisOrigen();

        if (!nombreValido || !apellidoValido || !emailValido || !fechaNacimientoValido || !paisOrigenValido) {
            console.warn('El formulario contiene errores de validacion.');
            return;
        }
        console.log('Validacion correcta.');

        const btnEnviar = document.getElementById('btnEnviar');
        btnEnviar.disabled = true;
        btnEnviar.textContent = 'Enviando...';
        alert('Formulario enviado exitosamente.');
        formulario.reset();
    } catch(error) {
        console.error('Se produjo un error al ingresar al formulario: ', error.message);
    } finally {
        const btnEnviar = document.getElementById('btnEnviar');
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Registrarse';
    }
})

btnNormal.addEventListener("click", function () {
    body.classList.remove('alto-contraste');
})

btnAltoContraste.addEventListener("click", function () {
    body.classList.add('alto-contraste');
})