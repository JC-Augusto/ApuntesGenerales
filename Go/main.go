package main

import (
	"fmt"
	"os"

	"gonum.org/v1/gonum/graph"
	"gonum.org/v1/gonum/graph/simple"
	"gonum.org/v1/gonum/graph/encoding/dot"
)

func main() {
	// Crear un grafo simple
	g := simple.NewDirectedGraph()

	// Añadir nodos al grafo
	node1 := g.NewNode()
	node2 := g.NewNode()
	node3 := g.NewNode()

	// Añadir bordes al grafo
	g.SetEdge(g.NewEdge(node1, node2))
	g.SetEdge(g.NewEdge(node2, node3))
	g.SetEdge(g.NewEdge(node3, node1))

	// Crear archivo DOT
	f, err := os.Create("grafo.dot")
	if err != nil {
		fmt.Println("Error creando archivo:", err)
		return
	}
	defer f.Close()

	// Codificar grafo en formato DOT
	dot.Encode(g, f, "Grafo simple", "", "")

	fmt.Println("Archivo DOT creado exitosamente.")
}
