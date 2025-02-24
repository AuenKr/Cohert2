package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Hello World")

	time := time.Now()

	weekday := time.Weekday()
	fmt.Println(time)
	fmt.Println(weekday)
}
