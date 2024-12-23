package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	fmt.Println("File system handling in go")

	fileName := "./test.txt"
	content := "This should be written inside file - auenkr.me"

	writeFile(fileName, content)

	readFile(fileName)
}

func writeFile(fileName string, content string) {
	file, err := os.Create(fileName)

	// if err != nil {
	// 	fmt.Println("Error creating file")
	// 	panic(err)
	// }
	checkNilError(err, "Error creating file")

	length, err := io.WriteString(file, content)
	checkNilError(err, "Error writing to file")

	fmt.Println("Length of content written to file: ", length)
	defer file.Close()
}

func readFile(fileName string) {
	dataByte, err := ioutil.ReadFile(fileName)
	checkNilError(err, "Error reading file")

	fmt.Println("binary data inside file \n", dataByte)
	fmt.Println("text data inside file \n", string(dataByte))
}

func checkNilError(e error, msg string) {
	fmt.Println(msg)
	if e != nil {
		panic(e)
	}
}
