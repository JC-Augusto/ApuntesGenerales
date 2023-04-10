function mostrarDatos(datos) {
    console.log(datos.titulo + "-" + datos.texto);
}
//llamando a la funcion con una interface
mostrarDatos({ titulo: "hola", texto: "saludo" });
//otra forma de pasarle los datos de la interface
var otrosDatos = { titulo: "este es el titulo", texto: "Esto es el texto" };
mostrarDatos(otrosDatos);
