package main

import (
	"fmt"
	"net/url"
)

const myUrl string = "https://example.com:3000/class?status=active&id=123"

func main() {
	fmt.Println("URL is\n", myUrl)

	fmt.Println("Parsing url")
	result, _ := url.Parse(myUrl)
	fmt.Println(result.Scheme)
	fmt.Println(result.Host)
	fmt.Println(result.Port())
	fmt.Println(result.Path)
	fmt.Println(result.RawQuery)

	queryParam := result.Query()
	fmt.Printf("Query Parameters type %T\n", queryParam) // url.Values : key value pair

	fmt.Println("Key : Value of query Parameters")
	for key, value := range queryParam {
		fmt.Println(key, ":", value)
	}

	newUrl := &url.URL{
		Scheme:   "https",
		Host:     "example.com",
		Path:     "/batch",
		RawQuery: "status=active&id=123",
	}

	fmt.Println("New URL is\n", newUrl.String())
}
