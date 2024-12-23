package main

import "fmt"

func main() {
	fmt.Println("Defer in go")

	// defer fmt.Println("World")
	// fmt.Println("Hello")

	// Defer LIFO
	// defer fmt.Println("World")
	// defer fmt.Println("One")
	// defer fmt.Println("Two")
	// defer fmt.Println("Three")
	// fmt.Println("Hello")

	// myDefer()

	defer fmt.Println("World")
	defer fmt.Println("One")
	myDefer()
	defer fmt.Println("Two")
	defer fmt.Println("Three")
	fmt.Println("Hello")
}

func myDefer() {
	for i := 0; i < 5; i++ {
		defer fmt.Println(i)
	}
}
