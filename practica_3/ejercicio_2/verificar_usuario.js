function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin") {
                resolve("acceso concedido");
            } else {
                reject("acceso denegado");
            }
        }, 1000);
    });
}

console.log("Prueba de usuario: admin");

verificarUsuario("admin")
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });

setTimeout(() => {
    console.log("Usuario Francisco");
    verificarUsuario("Francisco")
        .then(res => console.log(res))
        .catch(error => console.log(error));
}, 2000);
