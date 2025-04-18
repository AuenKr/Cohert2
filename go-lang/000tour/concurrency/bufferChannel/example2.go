package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int, 2)
	ch <- 1
	ch <- 2
	fmt.Println("Sent 2 values")

	go func() {
		time.Sleep(1 * time.Second) // Simulate some work
		fmt.Println("Started Receiver")
		fmt.Println("Received:", <-ch)
		fmt.Println("Received:", <-ch)
		fmt.Println("Received:", <-ch) // This will receive the '3'
	}()
	// Receiver go routunie called
	fmt.Println("Receiver go routunie called")

	time.Sleep(2 * time.Second)
	ch <- 3 // This send will now succeed after the receiver starts emptying the buffer
	fmt.Println("Also send 3 value")

	time.Sleep(2 * time.Second) // Give time for the receiver goroutine to finish
	fmt.Println("Main goroutine finished")
}
