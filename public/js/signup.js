class Usuario {
    constructor(username, password, email, profilePicture) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

const usuarios = [];

let miFormulario = document.getElementById('form-registro');
let inputUsuario = document.getElementById('input-username');
let inputPassword = document.getElementById('input-password');
let inputEmail = document.getElementById('input-email');
let btnRegistrar = document.getElementById('btn-registrar');
let loadingActive = document.getElementById('loading-active');
miFormulario.addEventListener("submit", validarFormulario);

// Keypress para validacion visual inputs
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

// Si el input está vacio le cambia el color a red
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
                usuarios.push(new Usuario(inputUsuario.value, inputPassword.value, inputEmail.value));
                btnRegistrar.value = "Usuario registrado con exito!";
                inputUsuario.value = "";
                inputPassword.value = "";
                inputEmail.value = "";
                // mostrarusuarios();
                saveUser();
                loadingActive.style.display = "flex";
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 3000);
            }
        }

    }
}

function saveUser() {

    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };

    for (const usuario of usuarios) {
        guardarLocal(usuario.username, JSON.stringify(usuario));
    }
}

function mostrarusuarios() {
    // seccionMain.innerHTML = '';
    for (const usuario of usuarios) {
        console.log(usuario.username);
        console.log(usuario.password);
        console.log(usuario.email);
        // seccionMain.innerHTML += `
        //     <div class="col-12 col-md-3 col-lg-3">
        //         <div class="card card-libros">
        //             <p><b>Username:</b>${usuario.username}</p>
        //             <p><b>Password:</b>${usuario.password}</p>
        //             <p><b>Email:</b>${usuario.email}</p>
        //         </div>
        //     </div>
        //     `;
    }

}