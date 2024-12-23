package main

import "fmt"

type user struct {
	name   string
	number int
}

type messageToSend struct {
	message string
	from    user
	to      user
}

// Function to send a message
func sendMessage(msg messageToSend) {
	fmt.Println("Message sent!")
	fmt.Println("Message:", msg.message)
	fmt.Println("From:", msg.from.name, "to:", msg.to.name)
	fmt.Println("OR")
	fmt.Println("From:", msg.from.number, "to:", msg.to.number)
}

// Struct Method: Go is not an object-oriented language, but structs are similar to classes.
	type Rect struct {
		height int
		width  int
	}

	// Method to calculate area of Rect
	func (r Rect) area() int {
		return r.height * r.width
	}


func main() {
	u1, u2 := user{}, user{}
	u1.name = "A"
	u2.name = "B"
	u1.number = 12345
	u2.number = 67890

	fmt.Println("User 1:", u1)
	fmt.Println("User 2:", u2)

	msg := messageToSend{
		message: "Hello bro",
		from:    u1,
		to:      u2,
	}

	sendMessage(msg)

	// Anonymous Struct in Go
	myCar := struct {
		Make  string
		Model string
	}{
		Make:  "Tesla",
		Model: "X",
	}

	fmt.Println("myCar:", myCar)

	// Embedded Struct vs Nested Struct
	type Car struct {
		Model string
		Make  string
	}

	type TruckNested struct {
		car     Car
		bedsize int
	}

	type TruckEmbedded struct {
		Car
		bedsize int
	}

	truckNested := TruckNested{
		car: Car{
			Model: "X",
			Make:  "Tesla",
		},
		bedsize: 4,
	}

	truckEmbedded := TruckEmbedded{
		Car: Car{
			Model: "X",
			Make:  "Tesla",
		},
		bedsize: 4,
	}

	fmt.Println("Truck Nested:", truckNested.car.Model)      // In Nested, property is inside the `car` object
	fmt.Println("Truck Embedded:", truckEmbedded.Model)     // In Embedded, properties are inherited by `TruckEmbedded`

	// Struct Method: Go is not an object-oriented language, but structs are similar to classes.
	r1 := Rect{
		height: 10,
		width:  5,
	}

	fmt.Println("Rectangle dimensions:", r1)
	fmt.Println("Its area:", r1.area())
}

