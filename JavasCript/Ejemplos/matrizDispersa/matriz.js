class NodoMatriz {
    constructor(posX, posY, posicion){
        this.siguiente = null;
        this.anterior = null;
        this.abajo = null;
        this.arriba = null;

        this.posX = posX;
        this.posY = posY;
        this.posicion = posicion //vamos a guardar (8,10)

    }
}

class Matriz{
    constructor(){
        this.principal = new NodoMatriz(-1, -1, "Raiz")
    }
    
    buscarF(y){
        let aux = this.principal;
        while(aux != null){
            if(aux.posY === y){
                return aux;
            } else{
                aux = aux.abajo
            }
        }
        return null;
    }

    buscarC(X){
        let aux = this.principal;
        while(aux != null){
            if(aux.posY === y){
                return aux;
            } else{
                aux = aux.siguiente
            }
        }
        return null
    }

    insertarColumna(posicion, texto){
        const nuevoNodo = new NodoMatriz(posicion, -1, texto)

        let piv = this.principal;
        let pivA = this.principal;

        while(piv.siguiente != null){
            console.log("Prueba:" +piv.posX)
            if(nuevoNodo.posX > piv.posX){
                pivA = piv;
                piv = piv.siguiente;
            } else{
                nuevoNodo.siguiente = piv;
                nuevoNodo.anterior = pivA;
                pivA.siguiente = nuevoNodo;
                piv.anterior = nuevoNodo;
                return; 
            }
        }
        nuevoNodo.anterior = piv;
        piv.siguiente = nuevoNodo;
    }

    insertarFila(posicion, texto){
        const nuevoNodo = new NodoMatriz(-1, posicion, texto);

        let piv = this.principal;
        let pivA = this.principal;

        while(piv.abajo != null){
            if (nuevoNodo.posY > piv.posY){
                pivA = piv;
                piv = piv.abajo;
            } else{
                nuevoNodo.abajo = piv;
                nuevoNodo.arriba = pivA;
                pivA.abajo = nuevoNodo;
                piv.arriba = nuevoNodo;
                return;
            }
        }
        nuevoNodo.arriba = piv;
        piv.abajo = nuevoNodo;
    }

    insertarNodo(x,y,texto){
        const nuevoNodo = new NodoMatriz(x, y, texto);
        let tempX = this.principal;
        let tempY = this.principal;
        //agregar en columna
        while(tempX.siguiente != null){
            if (tempX.posX === nuevoNodo.posX){
                break;
            }
            tempX = tempX.siguiente;
        }
        while(true){
            if (tempX.posY === nuevoNodo.posY){
                break;
            }
        }
    }

    insertarElemento(x,y){
        let texto = x + "," + y;

        let nuevaFila = this.buscarF;
        let nuevaColumna = this.buscarC;

        //Fila y columna no existen
        if (nuevaFila === null && nuevaColumna === null){
            //hay que agregarlos
            this.insertarColumna(x, "C"+x);
            this.insertarFila(y, "F" + y)
        } else if(tempX.abajo !== nulll && tempX.abajo.posY > nuevoNodo.posY){
            nuevoNodo.abajo = tempX.abajo
            nuevoNodo.arriba = tempX;
            tempX.abajo = nuevoNodo;
        }
    }


}