package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(100 * time.Millisecond)
	boom := time.After(500 * time.Millisecond)

	i := 0
	for {
		select {
		case <-tick:
			fmt.Println("tick.", i)
		case <-boom:
			fmt.Println("BOOM!", i)
			return
		default:
			i++
		}
	}
}
