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

	fmt.Println(raj)

	fmt.Printf("Details of Raj: %v \n", raj)
	fmt.Printf("More Details of Raj: %+v \n", raj)

	fmt.Println("Age of Raj: ", raj.getAge())

	raj.isVerified()

	raj.newMail()
	fmt.Println("updated data ", raj)

	raj.setNewMail()
	fmt.Println("updated data after using pointer method ", raj)
}

type User struct {
	Name     string
	Email    string
	Age      int
	Verified bool   // Exported (as start with capital letter)
	oneAge   string // not exported (as start with small letter)
}

// Method
func (u User) getAge() int {
	return u.Age
}

// Method
func (u User) isVerified() bool {
	fmt.Println("User is ", u.Verified)
	return u.Verified
}

// Pass by value
func (u User) newMail() {
	u.Email = "test@test.com"

	fmt.Println("New Email without ptr: ", u.Email)
}

// Pass by pointer
func (u *User) setNewMail() {
	u.Email = "test@test.com"

	fmt.Println("New Email by pointer: ", u.Email)
}
