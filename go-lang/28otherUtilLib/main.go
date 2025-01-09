package main

import (
	"crypto/rand"
	"fmt"
	"math/big"
	// "math/rand"
)

func main() {
	fmt.Println("Other basic library in go - Math, Crypto, Random")

	mathematics()

	randomFromCrypto() // using crypto

}

func mathematics() {
	fmt.Println("Math in go")

	var myNoOne int = 2
	var myNoTwo float64 = 4.5

	fmt.Println("Sum is ", myNoOne+int(myNoTwo))
	fmt.Println("Sum is ", float64(myNoOne)+myNoTwo)

	// // Random no using math
	// var randomNo int = rand.Intn(1000)

	// fmt.Println("my random no ", randomNo)
}

func randomFromCrypto() {
	fmt.Println("Random no in go using crypto")
	randomNo, _ := rand.Int(rand.Reader, big.NewInt(999999))

	fmt.Println("my random no from crypto ", randomNo)
}
