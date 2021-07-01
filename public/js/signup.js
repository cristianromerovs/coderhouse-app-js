class Usuario {
    constructor(username, password, email, profilePicture) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

const usuarios = [];

let miFormulario = document.getElementById('form-registro');
let seccionMain = document.getElementById('section-main');
miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault();

    let inputUsuario = document.getElementById('input-username').value;
    let inputPassword = document.getElementById('input-password').value;
    let inputEmail = document.getElementById('input-email').value;
    usuarios.push(new Usuario(inputUsuario, inputPassword, inputEmail));
    alert('Usuario agregado con exito');
    mostrarusuarios();
}

function mostrarusuarios() {
    console.log(usuario.username);
    console.log(usuario.password);
    console.log(usuario.email);
    // seccionMain.innerHTML = '';
    // for (const usuario of usuarios) {
    //     seccionMain.innerHTML += `
    //         <div class="col-12 col-md-3 col-lg-3">
    //             <div class="card card-libros">
    //                 <p><b>Username:</b>${usuario.username}</p>
    //                 <p><b>Password:</b>${usuario.password}</p>
    //                 <p><b>Email:</b>${usuario.email}</p>
    //             </div>
    //         </div>
    //         `;
    // }
}