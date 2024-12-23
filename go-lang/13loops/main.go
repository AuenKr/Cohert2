package main

import (
	"fmt"
)

func main() {
	fmt.Println("Loop in go")

	days := []string{"Sunday", "Tuesday", "Wednesday", "Friday", "Saturday"}

	fmt.Println("days ", days)

	// fmt.Println("Type 1 loop")
	// for d := 0; d < len(days); d++ { // always d++ not ++d
	// 	fmt.Println(days[d])
	// }

	// fmt.Println("Type 2 loop")
	// for i := range days {
	// 	fmt.Println(i, val)
	// }

	// fmt.Println("Type 3 for each")
	// for i, day := range days {
	// 	fmt.Println(i, day)
	// }

	// fmt.Println("Type 4: while loop")
	// rougeValue := 0
	// for rougeValue < 10 {
	// 	fmt.Println(rougeValue)
	// 	rougeValue++
	// }

	fmt.Println("continue, break in loop")
	rougeValue := 0
	for rougeValue < 10 {
		fmt.Println(rougeValue)

		if rougeValue == 7 {
			fmt.Println("GOto call to go to lco")
			goto lco
		}

		if rougeValue == 8 {
			fmt.Println("break call")
			break
		}

		if rougeValue == 5 {
			rougeValue++
			fmt.Println("continue call")
			continue // just before continue, increment the value
		}
		rougeValue++
	}

	// Goto statement
	fmt.Println("Goto statement")

	// Label:
	// Statement
lco:
	fmt.Println("Jumping to Label")
}
