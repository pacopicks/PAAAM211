const personas = [
    { nombre: "Ana ", edad :22},
    {nombre : "Luis", edad : 35},
    {nombre : "Maria" , edad : 28}
];

const luis= personas.find(persona =>persona.nombre==="Luis");
console.log("encontrarLuis:", luis);

console.log("/n Personas:");
personas.forEach(persona=>console.log(persona.nombre +""+persona.edad+"años"))

const total_edades=personas.reduce((total,persona)=>total+persona.edad,0);
console.log("suma de edades es :", total_edades);