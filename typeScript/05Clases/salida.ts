//CLASES
//A cada variable o metodo se le puede colocar su visivilidad: public, private o protected
class Usuario {
    public name: string;
    email: string;
    age: number;

    constructor(name:string, age:number, email:string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    registro(){
        console.log(`${this.name} esta registrado`);
        return `${this.name} esta registrado`;
    }

    pago(){
        console.log(this.name + "ha pagado")
    }
}

let jca = new Usuario("-JCA-",24, "jcaMail");

document.write(jca.name)
document.write(jca.registro())

//ERENCIA DE CLASES
class Miembro extends Usuario{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, age, email);   //le decimos que estos hereda estros atributos y los usa como parametros
        this.id = id;
    }

    pago(){             // no es necesario usar el mismo nombre del que se va a heredar
        super.pago();  //con esto heredamos los metodos de la clase padre
    }
}

//creando el objeto Miembro
let jca2 = new Miembro(22, "JCA2", "mail2", 24);
jca2.pago();