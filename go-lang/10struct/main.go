package main

import (
	"fmt"
)

func main() {
	fmt.Println("Struct in plan")
	// No inheritance in Go: No super or parent

	raj := User{
		Name:     "Raj",
		Email:    "raj@gmail.com",
		Age:      10,
		Verified: true,
	}

	// Or can init like this
	raj2 := User{
		"Raj2",
		"raj2@gmail.com",
		20,
		false,
		"",
	}

	fmt.Println(raj2)
	fmt.Println(raj)

	fmt.Printf("Details of Raj: %v \n", raj)
	fmt.Printf("More Details of Raj: %+v \n", raj)
}

type User struct {
	Name     string
	Email    string
	Age      int
	Verified bool   // Exported (as start with capital letter)
	oneAge   string // not exported (as start with small letter)
}

func (u User) getAge() int {
	return u.Age
}

func (u User) isVerified() bool {
	return u.Verified
}
