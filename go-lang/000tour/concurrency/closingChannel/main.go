package main

import (
	"fmt"
)

func fibo(n int, c chan uint) {
	x, y := uint(0), uint(1)
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}

func main() {
	N := 10
	c := make(chan uint, 1)
	go fibo(N, c)
	for i := 0; i <= N; i++ {
		res, ok := <-c
		fmt.Println("res: ", res, ": ok :", ok)
	}
}
