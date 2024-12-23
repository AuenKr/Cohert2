package main

import (
	"fmt"
	"sort"
)

func main() {
	vegList := []string{ // If un-initialize the size then it become slice(dynamic array)
		"potato",
		"bringle",
		"onion",
	}
	fmt.Println("vegList : ", vegList)
	fmt.Println("no of veg in vegList : ", len(vegList))
	fmt.Printf("Type of vegList %T\n", vegList)

	vegList = append(vegList, "beans", "mushroom")
	fmt.Println("updated vegList : ", vegList)

	_ = append(vegList[1:])
	fmt.Println("updated vegList : ", append(vegList[1:]))
	fmt.Println("updated vegList : ", append(vegList[1:3]))
	fmt.Println("updated vegList : ", append(vegList[:3]))

	// Make
	highScore := make([]int, 4) // u may think its array, but it slice

	highScore[0] = 234
	highScore[1] = 945
	highScore[2] = 465
	highScore[3] = 867
	// highScore[4] = 867 => throws error

	fmt.Println("High score : ", highScore)

	// Now what happen here
	highScore = append(highScore, 333, 666)
	// u may think it should throw an error, but it not how go works
	// when append go will re-initializes new memory address for it and remove prev one

	fmt.Println("updated high score : ", highScore)

	fmt.Println("is highScore sorted: ", sort.IntsAreSorted(highScore))
	// For sorting
	sort.Ints(highScore)
	fmt.Println("sorted high score : ", highScore)
	fmt.Println("is highScore sorted: ", sort.IntsAreSorted(highScore))

	// how to remove a value from slices on index

	courses := []string{
		"reactjs",
		"js",
		"reactnative", // to remove
		"ts",
		"cpp",
		"python",
	}
	fmt.Println("Course : ", courses)

	index := 2 // to remove this index in course
	fmt.Println("To remove course: ", courses[index])

	courses = append(courses[:index], courses[index+1:]...) // courses[index + 1:] => slice and slice... => unpacking
	fmt.Println("Course : ", courses)

}
