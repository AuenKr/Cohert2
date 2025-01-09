package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Channels in Go")
	// Way to go routine to talk to each other.

	wg := &sync.WaitGroup{}
	// myChannel := make(chan int)
	myChannel := make(chan int, 2)

	// fmt.Println(<-myChannel)
	// myChannel <- 5
	// Channel do not accept any value until some is listing on that, but as u guess as init channel does not assign any value(so we cannot listen to it). Chicken and Egg problem

	wg.Add(2)
	// Insert value into channel

	// go func(ch chan<- int, wg *sync.WaitGroup) { // chan<- : only send through channel, <-chan: only receive value from channel, chan: send and receive both from channel
	go func(ch chan<- int, wg *sync.WaitGroup) { // Send ONLY
		defer wg.Done()
		// two channel value pass, so must have two listener or can use buffer channel
		ch <- 5
		ch <- 6
		close(ch)

	}(myChannel, wg)

	// Read value from channel
	go func(ch <-chan int, wg *sync.WaitGroup) { // Receive ONLY
		defer wg.Done()

		val, isChanOpen := <-ch
		if isChanOpen {
			fmt.Println(val)
		} else {
			fmt.Println("Channel is closed")
		}
	}(myChannel, wg)

	wg.Wait()
}
