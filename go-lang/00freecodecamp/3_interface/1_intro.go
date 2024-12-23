package main

import "fmt"

const Pi = 3.14

// Shape interface defines required methods for shapes
// Automatically interit by the Struct which satisfy the conditons
// - A single stuct can inherrite multplie interface
// - By default every struct inherrite `interface{}` interface

type Shape interface {
	getArea() float64
	getPerimeter() float64
	getType() string
  //  Type string // It will not work as in go no literal allow in interface
}

// ShapeBasic provides a common Type field for shapes
type ShapeBasic struct {
	Type string
}

// Rect struct represents a rectangle
type Rect struct {
	ShapeBasic
	width, height float64
}

func (r Rect) getArea() float64 {
	return r.height * r.width
}

func (r Rect) getPerimeter() float64 {
	return 2 * (r.height + r.width)
}

func (r Rect) getType() string {
	return r.Type
}

// Circle struct represents a circle
type Circle struct {
	ShapeBasic
	radius float64
}

func (c Circle) getArea() float64 {
	return Pi * c.radius * c.radius
}

func (c Circle) getPerimeter() float64 {
	return 2 * Pi * c.radius
}

func (c Circle) getType() string {
	return c.Type
}

// Function using Shape interface
func printAreaAndPerimeter(shape Shape) {
	fmt.Println("Shape:", shape.getType())
	fmt.Println("Area:", shape.getArea())
	fmt.Println("Perimeter:", shape.getPerimeter())
}

// Another example of interface usuage
// - aka naming of interface arguments for better documentation(understatnding)
type Copier interface {
  Copy(sourceFile string, destinationFile string) (bytedCopied int)
}

func main() {
	rectangle := Rect{
		ShapeBasic: ShapeBasic{
			Type: "Rectangle",
		},
		height: 10.1,
		width:  5.5,
	}

	circle := Circle{
		ShapeBasic: ShapeBasic{
			Type: "Circle",
		},
		radius: 10,
	}

	printAreaAndPerimeter(rectangle)
	printAreaAndPerimeter(circle)
}
