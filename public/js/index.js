//comprobamos que el usuario este logueado
function isLogged() {
    if ("isLogged" in localStorage) {
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            const boolLogged = localStorage.getItem(clave);
            if (boolLogged === false) {
                window.location.href = "login.html";
            }
        }
    } else {
        window.location.href = "login.html";
    }
}

isLogged();

// Aquí tomaré los datos de firebase y los almacenaré en la clase inputUsuario para manejarlos en el DOM

class Usuario {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
const usuarios = [];