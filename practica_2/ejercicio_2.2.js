const productos= [
    { nombre: "laptop", precio: 12000 },
    { nombre : "mouse ",precio : 250 },
    {nombre : "teclado", precio :700},
    {nombre : "monitor", precio :3000}
];
const productos_mil= productos.filter(producto =>producto.precio>1000);

const nombres_productos=productos.map(producto => producto.nombre);
console.log(nombres_productos);
