package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
)

func main() {
	fmt.Println("Create a web server")

	var myUrl string
	// Get Request
	// myUrl = "http://localhost:3000"
	// PerformGetRequest(myUrl)

	// myUrl = "http://localhost:3000/get"
	// PerformGetRequest(myUrl)

	// Post Request
	myUrl = "http://localhost:3000/post"
	PerformPostRequest(myUrl)

	// POST Request with Form encoded data
	// myUrl = "http://localhost:3000/postform"
	// PerformPostWithFormData(myUrl)
}

func PerformGetRequest(myUrl string) {
	fmt.Println("Performing GET Request to ", myUrl)
	response, err := http.Get(myUrl)
	CheckNilError(err)
	defer response.Body.Close()

	fmt.Println("Response status code", response.StatusCode)
	fmt.Println("Content Length", response.ContentLength)

	dataByte, _ := io.ReadAll(response.Body)

	// Method 1
	content := string(dataByte)

	fmt.Println("Response Body(using io): ", content)

	// Method 2
	var responseString strings.Builder
	responseString.Write(dataByte)

	fmt.Println("Response Body(using strings): ", responseString.String())

}

func PerformPostRequest(myUrl string) {
	fmt.Println("Performing POST Request to ", myUrl)

	// Fake Json payload
	data := strings.NewReader(`
		{
			"courseName": "Golang",
			"price": 100,
			"author": "John Doe"
		}
	`)

	response, err := http.Post(myUrl, "application/json", data)
	CheckNilError(err)

	defer response.Body.Close()

	fmt.Println("Response status code", response.StatusCode)
	fmt.Println("Content Length", response.ContentLength)

	dataByte, _ := io.ReadAll(response.Body)
	var responseString strings.Builder
	responseString.Write(dataByte)

	fmt.Println("Response Body: ", responseString.String())
}

func PerformPostWithFormData(myUrl string) {
	fmt.Println("Performing POST Request with Form Data to ", myUrl)

	// Fake Form data
	data := url.Values{} // Key value pair

	data.Add("firstName", "John")
	data.Add("lastName", "Doe")
	data.Add("email", "johndoe@gmail.com")

	fmt.Println("Final url data: ", data)

	response, err := http.PostForm(myUrl, data)
	CheckNilError(err)

	defer response.Body.Close()

	fmt.Println("Response status code", response.StatusCode)
	fmt.Println("Content Length", response.ContentLength)

	dataByte, _ := io.ReadAll(response.Body)

	var responseString strings.Builder
	responseString.Write(dataByte)

	fmt.Println("Response Body: ", responseString.String())
}

func CheckNilError(err error) {
	if err != nil {
		fmt.Println("Error: ", err)
		panic(err)
	}
}
