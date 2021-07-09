let formLogin = document.getElementById('form-login');
let inputUser = document.getElementById('input-username-login');
let inputPass = document.getElementById('input-password-login');
let btnIngresar = document.getElementById('btn-ingresar');
let loadingActive = document.getElementById('loading-active');
formLogin.addEventListener("submit", validarFormulario);

const db = firebase.firestore();

// Keypress para validacion visual inputs
inputUser.addEventListener("keypress", userGreen);
inputPass.addEventListener("keypress", passGreen);

function userGreen() {
    inputUser.style.borderColor = "green";
}

function passGreen() {
    inputPass.style.borderColor = "green";
}

function validarFormulario(e) {
    e.preventDefault();

    if (inputUser.value === "") {
        inputUser.style.borderColor = "red";
    } else {
        if (inputPass.value === "") {
            inputPass.style.borderColor = "red";
        } else {
            login();
        }
    }
}


function login() {
    const db = firebase.firestore();
    const queryUser = firebase.firestore().collection('usuarios').where('username', '==', inputUser.value);
    const queryPass = firebase.firestore().collection('usuarios').where('password', '==', inputPass.value);

    queryUser.get().then(querySnapshot => {
        if (querySnapshot.empty) {
            alert('usuario o contraseña incorrecta');
        } else {
            queryPass.get().then(querySnapshot => {
                if (querySnapshot.empty) {
                    alert('usuario o contraseña incorrecta');
                } else {
                    btnIngresar.value = "Iniciando sesión";
                    loadingActive.style.display = "flex";
                    setTimeout(function () {
                        // Crear variable en localstorage de session
                        localStorage.setItem('isLogged', true);
                        window.location.href = "index.html";
                    }, 2000);
                }
            });
        }
    });


}