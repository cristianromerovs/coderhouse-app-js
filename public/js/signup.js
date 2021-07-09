let miFormulario = document.getElementById('form-registro');
let inputUsuario = document.getElementById('input-username');
let inputPassword = document.getElementById('input-password');
let inputEmail = document.getElementById('input-email');
let btnRegistrar = document.getElementById('btn-registrar');
let loadingActive = document.getElementById('loading-active');
miFormulario.addEventListener("submit", validarFormulario);

const db = firebase.firestore();

// Keypress para validacion visual de inputs
inputUsuario.addEventListener("keypress", userGreen);
inputPassword.addEventListener("keypress", passGreen);
inputEmail.addEventListener("keypress", emailGreen);

function userGreen() {
    inputUsuario.style.borderColor = "green";
}

function passGreen() {
    inputPassword.style.borderColor = "green";
}

function emailGreen() {
    inputEmail.style.borderColor = "green";
}

function validarFormulario(e) {
    e.preventDefault();

    if (inputUsuario.value === "") {
        inputUsuario.style.borderColor = "red";
    } else {
        if (inputPassword.value === "") {
            inputPassword.style.borderColor = "red";
        } else {
            if (inputEmail.value === "") {
                inputEmail.style.borderColor = "red";
            } else {
                newUser();
                btnRegistrar.value = "Usuario registrado con exito!";
                loadingActive.style.display = "flex";
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 3000);
            }
        }

    }
}

// Funcion para crear nuevos usuarios
function newUser() {
    const saveUser = (username, password, email) =>
        db.collection('usuarios').doc().set({
            username,
            password,
            email
        });
    saveUser(inputUsuario.value, inputPassword.value, inputEmail.value);
    miFormulario.reset();
}