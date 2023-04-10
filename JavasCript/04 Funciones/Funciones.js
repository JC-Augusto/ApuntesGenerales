//Funcion sin parametros
function saludar(){
    console.log("hello!");
    document.write("<h1>Hi!</h1>");
}

//Funcion con parametros
function saludar2(nombre){
    console.log("hello " + nombre);
    document.write("<h1>Hi! " + nombre + "</h1>")
}

function suma(n1,n2){
    console.log(n1+n2);
}

//LLamando la funcion
saludar();
saludar2("JCA")
suma(10,5);
suma("hola ", "mundo")


//Funcion con retorno
function suma2(n1,n2){
    return n1+n2;
}

console.log(suma2(10,10))