package main

import (
	"fmt"
	"io"
	"net/http"
)

const url = "https://example.com"

func main() {
	fmt.Println("Web request in go")

	response, err := http.Get(url)
	checkNilError(err, "Error while getting response")

	dataByte, err := io.ReadAll(response.Body)
	checkNilError(err, "Error while reading response body")

	content := string(dataByte)
	fmt.Println(content)
}

func checkNilError(err error, msg string) {
	fmt.Println(msg)
	if err != nil {
		panic(err)
	}
}
