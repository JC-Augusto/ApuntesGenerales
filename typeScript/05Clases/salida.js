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
