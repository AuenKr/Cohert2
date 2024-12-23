package main

import "fmt"

func main() {
	fmt.Println("If else statement in go")

	loginCount := 23
	var result string

	if loginCount < 10 {
		result = "Regular User"
	} else if loginCount > 10 {
		result = "Watch out"
	} else {
		result = "Exactly 10 login count"
	}

	fmt.Println(result)

	if 9%2 == 0 {
		fmt.Println("9 is even")
	} else {
		fmt.Println("9 is odd")
	}

	// if Initialization: condition
	if num := 10; num == 10 {
		fmt.Println(num, " is equal to 10")
	} else {
		fmt.Println(num, " is not equal to 10")
	}

	var err error
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("No error")
	}
}
