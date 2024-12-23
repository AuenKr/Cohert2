package main

import "fmt"

func main() {
	fmt.Println("Function in Go")
	greeter()

	result := adder(3, 4)
	fmt.Println("result of adder : ", result)

	result, msg := proAdder(1, 2, 3, 4, 5)
	fmt.Println(msg, result)

}

func adder(val1, val2 int) int {
	return val1 + val2
}

func proAdder(values ...int) (int, string) {
	sum := 0
	for _, val := range values {
		sum += val
	}
	return sum, "Sum of all values is "
}

func greeter() {
	fmt.Println("Namstey from Go")
}
