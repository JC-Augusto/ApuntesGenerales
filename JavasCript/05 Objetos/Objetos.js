/*
Los objetos se pueden declarar tanto con let, como con const
*/


let mascota = {
    "nombre": "gato",
    "apellido": "no tiene",
    "edad": 10
}

console.log(mascota)

console.log(Object.keys(mascota))
console.log(Object.values(mascota))
console.log(mascota.hasOwnProperty("nombre"))  //Devuelve un booleano