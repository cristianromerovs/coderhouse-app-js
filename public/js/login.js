function getUsers() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        // console.log("Clave: " + clave);
        console.log(localStorage.getItem(clave));
        console.log(localStorage.key(i))
        if (localStorage.key(i) === "segundo") {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

getUsers();