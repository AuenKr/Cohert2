package main

import "fmt"

func main() {
	fmt.Println("Maps in go lang")
	languages := make(map[string]string)
	// var languages map[string] string

	languages["js"] = "javascript"
	languages["ts"] = "typescript"
	languages["py"] = "python"
	languages["cpp"] = "CPP"

	fmt.Println("My map : ", languages)
	fmt.Println("cpp stand for ", languages["cpp"])
	fmt.Println("js stand for ", languages["js"])
	fmt.Println("py stand for ", languages["py"])

	delete(languages, "py")
	fmt.Println("My map : ", languages)

	// Loops in go lang in maps
	fmt.Println("Looping through maps.....")

	for key, value := range languages {
		fmt.Println("for key : ", key, " : value is : ", value, " : ", languages[key])
	}

	// loop in slice
	fmt.Println("Looping in slice....")

	lang := []string{"js", "ts", "py", "cpp"}

	for index, value := range lang {
		fmt.Println("At index ", index, " value is ", value)
	}
}
