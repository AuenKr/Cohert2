package main

import (
	"fmt"
	"runtime"
	"time"
)

func sum(s []int, c chan int) {
	sum := 0
	for _, val := range s {
		sum += val
	}
	c <- sum
}

func sumWithoutConcurrency(s []int) int {
	sum := 0
	for _, val := range s {
		sum += val
	}
	return sum
}

func speedTesting(N int, noOfThread int) {
	fmt.Println("N :", N)
	s := make([]int, N)

	for i := 1; i <= N; i++ {
		s[i-1] = i
	}

	start := time.Now()
	res := sumWithoutConcurrency(s)
	end := time.Now()

	timeWithoutConcurrency := end.UnixNano() - start.UnixNano()
	fmt.Println("Sum (Without concurrency)", res, "time taken(nano sec)", timeWithoutConcurrency)
	c := make(chan int)

	start = time.Now()
	for i := 0; i < noOfThread; i++ {
		go sum(s[len(s)*i/noOfThread:len(s)*(i+1)/noOfThread], c)
	}

	res = 0
	for i := 0; i < noOfThread; i++ {
		res += <-c
	}
	end = time.Now()

	timeWithConcurrency := end.UnixNano() - start.UnixNano()
	fmt.Println("Sum (With concurrency)", res, "time taken(nano sec)", timeWithConcurrency)

	fmt.Println("Time Diff is", timeWithoutConcurrency-timeWithConcurrency)
}

func main() {
	N := 3000000000
	noOfThread := runtime.NumCPU()

	speedTesting(N, noOfThread)
	// for i := 1; i <= N; i *= 10 {
	// 	speedTesting(i, noOfThread)
	// }
}
