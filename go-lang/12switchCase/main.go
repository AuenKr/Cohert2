package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("Switch Case in go")

	rand.Seed(time.Now().UnixNano())

	number := rand.Intn(6) + 1

	fmt.Println("Input is ", number)

	// Switch Format 1
	switch number {
	case 1:
		fmt.Println("One")
	case 2:
		fmt.Println("Two")
	case 3:
		fmt.Println("Three")
	case 4:
		fmt.Println("Four")
	case 5:
		fmt.Println("Five")
	case 6:
		fmt.Println("Six")
		fallthrough // It will execute next case also (replace of break statement) after six i.e default
	default:
		fmt.Println("Called due to fallthrough")
	}

	// Switch Format 2
	switch {
	case number%2 == 0:
		fmt.Println("Even number")
	case number%2 != 0:
		fmt.Println("Odd number")
	default:
		fmt.Println("Invalid input")
	}

}
