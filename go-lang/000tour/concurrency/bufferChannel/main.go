package main

import "fmt"

func bufferedChannel() {
	ch := make(chan int, 2)
	ch <- 1
	ch <- 2
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}

func bufferedOverflowChannel() {
	ch := make(chan int, 2) // Create a buffered channel with a capacity of 2
	ch <- 1                 // ch size = 1
	ch <- 2                 // ch size = 2
	// ch <- 3 // ch size = 3 (overflow => dead) // This send will block because the buffer is full (capacity 2) => causing deadlock
	// fmt.Println("Sent 3 values") // This line will not be reached until a receive happens
	// fmt.Println(<-ch)
	// fmt.Println(<-ch)
	// fmt.Println(<-ch)
	// // As capacity of ch is only 2. It one value need to be free to do not cause deadlock
	fmt.Println(<-ch) // ch size = 1
	ch <- 3           // ch size = 2
	fmt.Println(<-ch) // ch size = 1
	fmt.Println(<-ch) // ch size = 0
}

func main() {
	fmt.Println("Buffered Channel with size 2")
	bufferedChannel()

	fmt.Println("Buffered capacity full")
	bufferedOverflowChannel()
}
