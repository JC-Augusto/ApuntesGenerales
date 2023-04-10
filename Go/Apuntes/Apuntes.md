<center> <h1><strong>APUNTES Go</strong></h1> </center>

Para iniciar el modulo en go

```terminal
go mod init "nombre"
```

Para poder correr el programa 

```terminal
go run "nombre.go"
```
Par ejecutar todo 
```terminal
go run .
```
comentarios 
```go
// comentario de una linea

/*
Comentario multilinea
*/
```
Hola mundo
```go
package main

import "fmt"

func main() {
	fmt.Print("Hola mundo")
}
```
---
## **VARIABLES**
Para iniciar un entero (Forma larga)
```go
var numero int

//aquí, go ya le asigna el valor 0 a la variable numero

numero = 20
```

Para iniciar una variable (Forma corta)
```go
numero := 24
dato1 := "hola"
dato2 := "mundo"

//el ":=" solo se usa para la creación de la variable

//para cambiar el dato:

dato1 = "hello"
dato2 = "world"

fmt.Print(dato1)
fmt.Println(dato2)
```
Asignacion de variables multiples
```go
dato1, dato2 := "hello ", "world"
```

grupos de variables
```Go
var(
	x1 = 10
	x2 = 34
	saludo1, saludo2 = "hola", "mundo"
)

fmt.Println(x1,x2, saludo1,saludo2)
```
---
## **TIPOS**
<img src="Img/tipoDatosGo.png" alt="drawing" width=""/>

---

## **Tipos de datos "int"**

Existen más tipos, pero estos son los tipos básicos

```go
package main

import "fmt"

func main() {
    // Declaración de variables de tipo int con distintos tamaños
    var a int = 10       // int es de 32 bits (rango: -2147483648 a 2147483647)
    var b int8 = 20     // int8 es de 8 bits (rango: -128 a 127)
    var c int16 = 30    // int16 es de 16 bits (rango: -32768 a 32767)
    var d int32 = 40    // int32 (alias de rune) es de 32 bits (rango: -2147483648 a 2147483647)
    var e int64 = 50    // int64 es de 64 bits (rango: -9223372036854775808 a 9223372036854775807)

    // Imprimir los valores de las variables
    fmt.Println("a =", a) // a = 10
    fmt.Println("b =", b) // b = 20
    fmt.Println("c =", c) // c = 30
    fmt.Println("d =", d) // d = 40
    fmt.Println("e =", e) // e = 50

    // Realizar operaciones aritméticas con los tipos de datos int
    sum := a + int(b) + int(c) + int(d) + int(e)
    diff := e - d
    product := int64(a) * e
    quotient := float64(e) / float64(d)

    // Imprimir los resultados de las operaciones
    fmt.Println("Suma =", sum) // Suma = 150
    fmt.Println("Diferencia =", diff) // Diferencia = 10
    fmt.Println("Producto =", product) // Producto = 500
    fmt.Println("Cociente =", quotient) // Cociente = 1.25
}

```

---

## **OPERADORES**

Operadores aritmeticos
```go
- Resta
+ Suma
* multiplicación
/ divición
% modulo (resto)
```
Operadores de comparación
```go
1. == y !=  	//igual que, diferente que
2. < y >		//menor que, mayor que
3. <= y =>		//menor o igual que, mayor o igual que
```
Operadores de asignación
```go
// permitidos:
1. += 
2. -= 
3. *= 
4. /= 
5. %=
```
Operadores Logicos
```go
//Permitidos:
1. && , AND
2. || , OR
3. ! , Negacion
```
Jerarquía de operadores
```go
1. ()
2. *, /, %
3. +, -
4. operadores de comparación
5. &&
6. ||
```
---

## **Tipos de datos "float"**

Existen más tipos, pero estos son los tipos básicos

```go
package main

import "fmt"

func main() {
    // Declaración de variables de tipo float
    var a float32 = 1.23456789
    var b float64 = 1.2345678901234567

    // Imprimir los valores de las variables
    fmt.Println("a =", a) // a = 1.2345679
    fmt.Println("b =", b) // b = 1.2345678901234567

    // Realizar operaciones aritméticas con los tipos de datos float
    sum := a + float32(b)
    diff := float64(a) - b
    product := float64(a) * b
    quotient := a / float32(b)

    // Imprimir los resultados de las operaciones
    fmt.Println("Suma =", sum) // Suma = 2.4691358
    fmt.Println("Diferencia =", diff) // Diferencia = -2.328306437080797e-09
    fmt.Println("Producto =", product) // Producto = 1.5229988356964225
    fmt.Println("Cociente =", quotient) // Cociente = 0.9999999
}
```
---
## **ESTRUCTURAS DE CONTROL**
## FOR

```go
//Utilizando los iteradores fuera
i:= 0
for i <= 5 {
    fmt.Println(i)
}

// Utilizando lo iteradores dentro
for i := 1; i <= 5; j++ {
    fmt.Println(i)
}

// Do while (Utilizando for)
for{
    fmt.Println("gato")
    break  -> Se seguira ejecutando hasta encontrar el break
}

// for each

nombres := []string{
		"jca1",
		"jca2",
		"jca3",
		"jca4",
}

for index, nombre := range nombres {
    fmt.Println(index, nombre)
}

for index, nombre := range nombres {
    fmt.Println("Nombre: %q esta en el index %d",nombre,index)
}
/*
Imprimira:
0 jca1
1 jca2
2 jca3
3 jca4
*/

for index, nombre := range nombres {
    fmt.Printf("Nombre: %q esta en el index %d \n", nombre, index)
}

//Para for each sin indice
for _, nombre := range nombres {
    fmt.Printf("el nombres es: %q\n", nombre)
}

//for each solo con indice
for index := range nombres {
    fmt.Printf("el indice es: %d \n", index)
}
```


## IF
```go
a := 5
b := 6
if a < b {
    fmt.Println("a es menor que b")
} else if a >= b{
    fmt.Println("a es mayor o igual que b")
} else {
    fmt.Println("datos no validos")
}
```
---
## **ARRAYS**

```go
//declaracion de arrays

var x [3]int
fmt.Println(x)

//agregnado datos al array
var x2 [4]string
x2[1] = "hola"
x2[2] = "mundo"
x2[0] = "-"
x2[3] = "-"
fmt.Println(x2)

//declarando y agregando datos
m := [3]int{4, 6, 5}
fmt.Println(m)

//el tamaño sera de los datos ingresados
n := [...]int{1, 2, 3}
fmt.Println(n)
```
---

## **MAPS "Diccionarios"**

Declaracion de maps
```go
x := make(map[string]string)

	x["Nombre"] = "Jca1"
	x["edad"] = "25"
	//imprimiendo todo el map
	fmt.Println(x)

	//imprimiendo unicamente el valor
	fmt.Println(x["edad"])

	//Declaracion corta de map
	edades := map[string]int{
		"Ana":   45,
		"Josue": 44,
		"Edgar": 34,
		"Maria": 25,
	}

	fmt.Println(edades)

	//Eliminar un elemento del map
	delete(edades, "Josue")
	fmt.Println(edades)

    //imprimir todo el map
    //%s se usa para texto como tal
    //%q para imprimir string con comillas 
    for nombre, edades := range edades {
		fmt.Printf("Nombre: %s , Edad: %d", nombre, edades)
	}
```
---

## **FUNCIONES**
```go
package main

import (
	"fmt"
)

// Funcion simple (sin retorno)
func presentacion(nombre string) {
	fmt.Println("nombre: ", nombre)
}

// Funcion con retorno
func suma(a int, b int) int {
	return a + b
}

// Funcion con retorno de variable ya definico
func suma2(a, b int) (resultado int) {
	resultado = a + b
	return
}

func main() {
	presentacion("jca")
	fmt.Println(suma(5, 3))
	fmt.Println(suma2(5, 5))
}
```
## Variadic function (Funciones con variables no definidas)

```go
package main

import "fmt"

//funcion sin una cantidad de parametros definidos
func sumar(numeros ...int) int {
	result := 0
	for _, numero := range numeros {
		result += numero
	}
	return result
}

//Unicamente en el ultimo parametro se puede variar la cantidad de parametros
func imprimir(usuario string, texto ...string) {
	for _, cadena := range texto {
		usuario += " "
		usuario += cadena
	}
	fmt.Println(usuario)
}

func main() {
	//Uso de la funcion con diferentes parametros
	fmt.Println(sumar(1, 3, 4, 5))
	fmt.Println(sumar(1, 4))
	fmt.Println(sumar())

	num := []int{
		1,
		2,
		3,
		4,
		5,
	}
	// Pasandole un Slice (vector) como parametro (se coloca "..." al final)
	fmt.Println(sumar(num...))

	//Uso de la funcion "imprimir"
	imprimir("JCA", "hola", "como ", "esta")
}
```

---
## **PUNTEROS**

```go
package main

import (
	"fmt"
)

func main() {
	// & -> apunta a la direccion
	// * -> apunta al dato de la direccion

	a := 25 //dato

	fmt.Println("Valor a: ", a)      //dato
	fmt.Println("Dirección a: ", &a) //direccion a

	b := &a // b = direccion(a)

	fmt.Println("Valor b: ", b)        // b = direccion(a)
	fmt.Println("Direccion b: ", &b)   // direccion(b)
	fmt.Println("Valor de direccion que contiene b: ", *b) 
	//dato(direccion(a)) = 25

	fmt.Println("_______________________________")

	fmt.Printf("Tipo de a: %T\n", a) //tipo: int
	fmt.Printf("Tipo de b: %T\n", b) //tipo: *int

	*b = 100  // dato(direccion(a)) = 100

	c := *b  
	fmt.Println("Valor de c:", c) //c = dato(direccion(a))
	fmt.Println("direcciones", &a, &b, &c) //direcciones a,b,c
}
```
---
## **TIPOS (type)**

```go
package main

import (
	"fmt"
)

// Dinero: tipo declarado por nosotros (base int)
type Dinero int

// Declaramos el metodo String para el tipo Dinero
func (din Dinero) String() string {
	//Sprintf: da formato a los datos y devuelve el valor
	return fmt.Sprintf("Dinero: Q%d", din)
}

func main() {
	//creo la variable tipo Dinero
	var sueldo Dinero
	//Se puede asignar, ya que en un inicio es tipo int
	sueldo = 2500
	fmt.Println("Sueldo:", sueldo)

	aumento := 4000
	//hay que castearlo para que se puedan sumar (ya que son tipos diferentes)
	sueldo += Dinero(aumento)

	fmt.Println("Sueldo y aumento: ", sueldo)
}
```

## **ESTRUCTURAS**
```go
package main

import (
	"fmt"
)

type Persona struct {
	Nombre string
	Edad   int
}

func main() {
	//Declaración larga
	var persona1 Persona
	persona1.Nombre = "jca1"
	persona1.Edad = 25
	fmt.Println("Persona1: ", persona1)
	fmt.Println("Nombre: ", persona1.Nombre)
	fmt.Println("Edad: ", persona1.Edad)

	//Declaracion corta(Especificar en donde guarda)
	//De esta forma no es necesario agregar todos los datos
	persona2 := Persona{Nombre: "jca2", Edad: 24}
	fmt.Println("Nombre2: ", persona2.Nombre)
	fmt.Println("Edad2: ", persona2.Edad)

	//Declaracion corta(Cuando se conoce bien el orden de los datos)
	persona3 := Persona{"jca3", 23}
	fmt.Println("Persona3: ", persona3)
```
## Ejercicio1:
- Crea un estructura persona
- Crea una funcion que devuelva dos valores
- valor1: persona mayor
- valor2: diferencia de edades
```go
package main

import "fmt"

//Creando la estructura persona
type Persona struct {
	Nombre string
	Edad   int
}

//Creando un afuncion que devuelve quien es mayor
//La función devuelve 2 valores
func Mayor(p1, p2 Persona) (Persona, int) {
	if p1.Edad > p2.Edad {
		return p1, p1.Edad - p2.Edad
	} else {
		return p2, p2.Edad - p1.Edad
	}
}

func main() {
	//creando los "Objetos" usando la estructura Persona
	persona1 := Persona{"jca1", 24}
	persona2 := Persona{"jca2", 44}

	//utilizando la funcion "Mayor" (devuelve 2 valores)
	perMayor, diferencia := Mayor(persona1, persona2)

	fmt.Println("Persona mayor: ", perMayor)
	fmt.Println("Diferencia de edades: ", diferencia)
}
```

## Ejercicio2
Herencia en golang
- Creando el objeto persona
- Creando el objeto Estudiante
- Creando el objeto Profesor

Foma en la que heredan
- Profesor ereda de Estudiante
- Estudiante ereda de Persona
```go
package main

import "fmt"

type Persona struct {
	Nombre string
	Edad   int
}

type Estudiante struct {
	Persona
	Carrera string
}

type Profesor struct {
	Estudiante
	Carrera string
}

func main() {
	estuiante1 := Estudiante{
		Persona: Persona{
			Nombre: "jca1",
			Edad:   25,
		},
		Carrera: "Sistemas",
	}

	fmt.Println(estuiante1.Nombre)

	//llenando los campos de profesor1
	//No es necesario Identificar (se hace para mantener orden)
	profesor1 := Profesor{
		Estudiante: Estudiante{
			Persona: Persona{
				Nombre: "jca2",
				Edad:   25,
			},
			Carrera: "Sistemas",
		},
		Carrera: "Programador",
	}

	//imprimiendo valore de profesor 1
	fmt.Println(profesor1)

	//imprimiendo datos de profesor 1
	fmt.Println("Nombre: ", profesor1.Nombre)
	fmt.Println("Edad: ", profesor1.Edad)
	fmt.Println("Carrera: ", profesor1.Carrera)

	//acceiendo a la carrera de estudiante (clase hija)
	fmt.Println("Carrera (estudiante): ", profesor1.Estudiante.Carrera)

	//declarando más corto (se puede incluso en una linea)
	profesor2 := Profesor{
		Estudiante: Estudiante{
			Persona: Persona{Nombre: "jca3", Edad: 25},
			Carrera: "Sistemas",
		},
		Carrera: "Programador",
	}

	fmt.Println(profesor2)
}
```

## Ejercicio 3
- Creando dos estructuras
- Ambas estructuras con misma función (Funciona por los ambitos)
- Creando diferentes funciónes y ver como trabajan
- Utilizar punteros para cambiar los datos de los objetos creados 

```go
package main

import (
	"fmt"
	"math"
)

// Creando la estructura "RECTANGULO"
type Rectangulo struct {
	ancho float64
	alto  float64
}

// Creando la esctructura "CIRCULO"
type Circulo struct {
	radio float64
}

// Creando la funcion de area (Para el Rectangulo)
func (rectangulo Rectangulo) area() float64 {
	return rectangulo.ancho * rectangulo.alto
}

// Creando la funcion de area (Para el Circulo)
func (radio Circulo) area() float64 {
	return radio.radio * radio.radio * math.Pi
}

/*
Se puede crear la función del mismo nombre, ya que estan
en diferentes ambitos (una en el ambito de Rectangulo
y la otra en el ambito de Circulo)
*/

// Creando otra funcion (Solo ejemplo - el 2 esta quemado)
func (rectangulo Rectangulo) areaDoble() float64 {
	return (rectangulo.ancho * rectangulo.alto) * 2
}

// Creando una función que miltiplica el area según el parametro ingresado
// Es capaz de realizar la misma acción que la funcion 'areaDoble'
// Con la diferencia que el codigo no esta quemado y se puede cambiar la multiplicidad
func (rectangulo Rectangulo) areaMultiplicada(x float64) float64 {
	return (rectangulo.ancho * rectangulo.alto) * x
}

/*
FUNCIÓN CON PUNTEROS
-Como estamos usando un puntero (apuntando hacia los datos)
se modificará de forma directa los datos del objeto creado

-Observación: Con la función 'areaMultiplicada' solo se usan los datos para multiplicar
pero en ningun momento se modifican los datos iniciales
*/
func (rectangulo *Rectangulo) mult(i float64) {
	rectangulo.ancho *= i
	rectangulo.alto *= i
}

func main() {
	//Creando los objetos (Rectangulo y Circulo 'con sus respectivos parametros')
	figura1 := Rectangulo{10, 3}
	figura2 := Circulo{5}

	//imprimiendo las area de las figuras
	fmt.Println("El area de la figura 1 es: ", figura1.area())
	fmt.Println("El area de la figura 2 es: ", figura2.area())

	//probando las funciones
	fmt.Println("El area de la figura 1 es: ", figura1.areaDoble())
	fmt.Println("El area de la figura 1 es: ", figura1.areaMultiplicada(2))

	//imprimiendo los valores de la figura1 (antes de cambiar los datos)
	fmt.Println(figura1)
	fmt.Println("El area de la figura 1 es: ", figura1.areaMultiplicada(2))

	//imprimiendo los valores de la figura1 (despued de cambiar los datos)
	figura1.mult(2)
	fmt.Println(figura1)
	fmt.Println("El area de la figura 1 es: ", figura1.areaMultiplicada(2))
}
```

---
## **INTERFACES**

```go
package main

import (
	"fmt"
)

//Declaramos la estructura 'Persona'
type Persona struct {
	nombre string
	email  string
	edad   int
}
func (p Persona) Nombre() string {
	return p.nombre
}
func (p Persona) Email() string {
	return p.email
}

//Declaramos la estructura 'Moderador'
type Moderador struct {
	Persona
	Foro string
}
func (m Moderador) AbrirForo() {
	fmt.Println("Abriendo foro")
}
func (m Moderador) CerrarForo() {
	fmt.Println("Cerrando foro")
}

//Declaramos la estructura 'Administrador'
type Administrador struct {
	Persona 
	Seccion string
}
func (a Administrador) CrearForo() {
	fmt.Println("Creando foro (Administrador)")
}

//Funcion de presentarse para cada Estrunctura ¿...?

//Declaramos la función presentarse (solo funciona para Persona)
func Presentarse (p Persona) {
	fmt.Println("Nombre: ", p.Nombre())
	fmt.Println("Email: ", p.Email())
}

//Declaramos la funcion presentarse (solo funciona para Moderador)
func PresentarseM (m Moderador) {
	fmt.Println("Nombre:, ", m.Nombre())
	fmt.Println("Email: ", m.Email())
}

//Declaramos la funcion presentarse (solo funciona para Administrador)
func PresentarseA (a Administrador) {
	fmt.Println("Nombre:, ", a.Nombre())
	fmt.Println("Email: ", a.Email())
}

//INTERFAZ 
type Usuario interface{
	Nombre() string
	Email() string
}

//función presentarse para todas
func PresentarseUsuario(u Usuario){
	fmt.Println("Nombre: ", u.Nombre())
	fmt.Println("Email: ", u.Email())
}

func main() {
	//Creando los objetos de cada estructura
	jcaPersona := Persona{"jca Persona", "gmail", 33}
	jcaModerador := Moderador{Persona{"jca Moderador", "gmail2", 33}, "foro"}
	jcaAdministrador := Administrador{Persona{"jca Administrador", "gmail3", 33}, "foro"}

	//llamando a la función para cada objeto
	Presentarse(jcaPersona)
	PresentarseM(jcaModerador)
	PresentarseA(jcaAdministrador)

	fmt.Println("----- Utilizando interfaces ------")
	//Con la misma función se puede (presentar) cada estructura
	//Solo se pueden usar los metodos declarados en comun 
	//Siempre y cuando tengan los mismos metodos, se puede implementar la interfaz
	//no es necesario llamarla, (se implementa sola leyendo los metodos)
	//Es necesario crear una función para cada estructura
	PresentarseUsuario(jcaPersona)
	PresentarseUsuario(jcaModerador)
	PresentarseUsuario(jcaAdministrador)

	//var x Usuario
	//x = jcaPersona

	//Lo de arriba resumido en una linea (buenas practicas)
	var x Usuario = jcaModerador
	fmt.Println(x.Email())
	fmt.Println(x.Nombre())
	//Presentarse con interfaz de nuevo
	PresentarseUsuario(x)
}
```