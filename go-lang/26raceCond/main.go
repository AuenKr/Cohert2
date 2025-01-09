package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Race Condition in go lang")

	wg := &sync.WaitGroup{}
	mutex := &sync.RWMutex{}

	var score = []int{0}

	wg.Add(4)
	// wg.Add(1)
	go func(wg *sync.WaitGroup, mutex *sync.RWMutex) {
		defer wg.Done()
		fmt.Println("Routine 1")
		mutex.Lock()
		score = append(score, 1)
		mutex.Unlock()
	}(wg, mutex)
	// wg.Add(1) // or can add wg.Add(3) total no of go routine
	go func(wg *sync.WaitGroup, mutex *sync.RWMutex) {
		defer wg.Done()
		fmt.Println("Routine 2")
		mutex.Lock()
		score = append(score, 2)
		mutex.Unlock()
	}(wg, mutex)
	// wg.Add(1)
	go func(wg *sync.WaitGroup, mutex *sync.RWMutex) {
		defer wg.Done()
		fmt.Println("Routine 3")
		mutex.Lock()
		score = append(score, 3)
		mutex.Unlock()
	}(wg, mutex)

	go func(wg *sync.WaitGroup, mutex *sync.RWMutex) {
		defer wg.Done()
		fmt.Println("Routine 4 for reading")
		mutex.RLock()
		fmt.Println("score in routing 4\n", score)
		mutex.RUnlock()
	}(wg, mutex)

	wg.Wait()

	fmt.Println("Score", score)
}
