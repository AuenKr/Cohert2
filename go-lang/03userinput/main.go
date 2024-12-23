package main

import "fmt"
import "bufio"
import "os"

func main() {
	welcome := "This is welcome message"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter rating of Go ")

	// comma ok || error ok
	input, _ := reader.ReadString('\n')
	fmt.Println("Thank for rating ", input)
	fmt.Printf("Type of input was %T \n", input)
}
