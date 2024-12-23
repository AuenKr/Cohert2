package main

import "fmt"

func main()  {
	fmt.Println("Arrays in Go")

	var fruitList [3]string

	fruitList[0] = "apple"
	fruitList[2] = "peach"

	fmt.Println("FruitList : ", fruitList)
	fmt.Println("no of fruits in FruitList : ", len(fruitList))
	fmt.Printf("Type of fruitList %T\n", fruitList)

	vegList := [5]string{
		"potato",
		"bringle",
		"onion",
		"beans",
		"mushroom",
	}
	fmt.Println("vegList : ", vegList);
	fmt.Println("no of veg in vegList : ", len(vegList));
	fmt.Printf("Type of vegList %T\n", vegList)
}
