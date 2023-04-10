let nota = 61;

// Condicional IF
if(nota < 61){
    console.log("Reprobado");
    document.write("Nota aprovatoria es 61");
}else if (nota == 61){
    console.log("Lo demas es vanidad");
    document.write("Ganar es ganar, pero hay que esforzarse más");
}else{
    console.log("Aprobado");
    document.write("Sigue así");
}

//Bucle While
let contador = 5;
while (contador > 0){
    console.log("Iterador: "+contador);
    document.write("Interador: "+contador);
    contador-=1;
}

//Bucle For
let mascotas = ["gato", "perro", "loro", "pez"];
console.log(mascotas[1]);                                 //ingresar de forma individual
console.log(mascotas.length);                            //tamaño del vector

for(let i=0; i<mascotas.length; i++){
    console.log(mascotas[i]);
}