function obtenerDatos () {

    return new Promise ((resolve,reject) => {
        const tiempo = 2000;
        setTimeout(() => {
           const exito = true;
           if (exito){
             const datos ={
                id :1,
                nombre: "Francisco",
                email: "franciscoguerrero0917@gmail.com",
                fecha: new Date().toLocaleString()
            
             };
             resolve(datos);
              } else {
                reject("no se obtuvieron los datos");
           }
        }, tiempo);
    });
}

async function mostrarDatos(){
    console.log("Prueba de async y await");
    console.log("solicitar datos");

    try {
        const datos = await obtenerDatos();
        console.log("datos optenidos");
    
    }
    catch(error)
    {
        console.log(" error al procesar los datos", error);
    }
    
}
mostrarDatos();