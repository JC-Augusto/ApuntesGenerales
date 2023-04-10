var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
/*
Forma de declxarar las variables

    Las variables tienen 3 formas de declararse, pueden ser:
        -let
        -var
        -const

    let: limita la variable al bloque(tal cual otros lenguajes(si declaras dentro de un if, no la podras usar afuera))
    var: no liminta las variables a un bloque(parece(no es) un tipo de global en otros lenguajes)
    const: para declarar constantes

*/
//TIPO DE DATOS 
var nombre = "hello World";
var numero = 100;
var myBol = false;
var myVariable = "hello"; //any acepta cualquier tipo de datos
document.write(nombre);
//ARRAYS 
var ArrayString = ["gato", "perro", "loro"];
var arrayNumeros = [1, 2, 3, 4];
var arrayBool = [true, false, false];
var arrayAny = ["gato", 22, false, true, "perro", 22];
//TUPLE
var myTupla = ["hola", 3]; //si se agregan más, no se leeran los demas, solo los ya asignados
//FUNCIONES
function suma(x1, x2) {
    return x1 + x2;
}
function suma2(x1, x2) {
    if (typeof (x1) === 'string') {
        x1 = parseInt(x1);
    }
    if (typeof (x2) === 'string') {
        x2 = parseInt(x2);
    }
    return x1 + x2;
}
//El segundo parametro finaliza con "?" por lo que es opcional colocarlo o no al llamar a la funcion
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function mostrarDatos(datos) {
    console.log(datos.titulo + "-" + datos.texto);
}
//llamando a la funcion con una interface
mostrarDatos({ titulo: "hola", texto: "saludo" });
//otra forma de pasarle los datos de la interface
var otrosDatos = { titulo: "este es el titulo", texto: "Esto es el texto" };
mostrarDatos(otrosDatos);
//CLASES
//A cada variable o metodo se le puede colocar su visivilidad: public, private o protected
var Usuario = /** @class */ (function () {
    function Usuario(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Usuario.prototype.registro = function () {
        console.log("".concat(this.name, " esta registrado"));
        return "".concat(this.name, " esta registrado");
    };
    Usuario.prototype.pago = function () {
        console.log(this.name + "ha pagado");
    };
    return Usuario;
}());
var jca = new Usuario("-JCA-", 24, "jcaMail");
document.write(jca.name);
document.write(jca.registro());
//ERENCIA DE CLASES
var Miembro = /** @class */ (function (_super) {
    __extends(Miembro, _super);
    function Miembro(id, name, email, age) {
        var _this = _super.call(this, name, age, email) || this;
        _this.id = id;
        return _this;
    }
    Miembro.prototype.pago = function () {
        _super.prototype.pago.call(this); //con esto heredamos los metodos de la clase padre
    };
    return Miembro;
}(Usuario));
//creando el objeto Miembro
var jca2 = new Miembro(22, "JCA2", "mail2", 24);
jca2.pago();
