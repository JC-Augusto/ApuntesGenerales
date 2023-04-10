
//INTERFACES
interface IDatos{
    titulo: string;
    texto: string;
}

function mostrarDatos(datos: IDatos){
    console.log(datos.titulo +"-"+ datos.texto)
}

//llamando a la funcion con una interface
mostrarDatos({titulo: "hola", texto: "saludo"})

//otra forma de pasarle los datos de la interface
let otrosDatos: IDatos = {titulo: "este es el titulo", texto: "Esto es el texto"}
mostrarDatos(otrosDatos)