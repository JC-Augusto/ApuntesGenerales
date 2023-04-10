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
