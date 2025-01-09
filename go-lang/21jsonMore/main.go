package main

import (
	"encoding/json"
	"fmt"
)

type course struct {
	Name     string   `json:"courseName"`
	Price    int      `json:"price"`
	Platform string   `json:"website"`
	Password string   `json:"-"`
	Tags     []string `json:"tags,omitempty"`
}

func main() {
	fmt.Println("More Json data")
	// res := EncodeJson()
	// fmt.Println("Final JSON data", string(res))

	DecodeJson()
}

func EncodeJson() []byte {
	lcoCourses := []course{
		{
			"ReactJS bootcamp",
			299,
			"LearnCodeOnline.in",
			"abc123",
			[]string{"web-dev", "js", "react"},
		},
		{
			"Full Stack boot camp",
			199,
			"LearnCodeOnline.in",
			"abc123",
			[]string{"Full stack", "js", "nextjs"},
		},
		{
			"Devops bootcamp",
			399,
			"LearnCodeOnline.in",
			"abc123",
			nil,
		},
	}

	// package this data into json
	// finalJson, err := json.Marshal(lcoCourses)

	// Just to add indentation
	finalJson, err := json.MarshalIndent(lcoCourses, "", "\t")
	// finalJson, err := json.MarshalIndent(lcoCourses, "n", "\t")
	if err != nil {
		fmt.Println("Error encoding JSON", err)
		panic(err)
	}

	return finalJson
}

func DecodeJson() {
	jsonDataFromWeb := []byte(`
	 {
    "courseName": "ReactJS boot camp",
    "price": 299,
    "website": "LearnCodeOnline.in",
    "tags": [ "web-dev", "js", "react"]
  }
	`)

	var lcoCourses course
	isValidJson := json.Valid(jsonDataFromWeb)

	if isValidJson {
		fmt.Println("JSON is valid")
		err := json.Unmarshal(jsonDataFromWeb, &lcoCourses)

		if err != nil {
			fmt.Println("Error decoding JSON", err)
			panic(err)
		} else {
			// fmt.Println("Course: ", lcoCourses)
			fmt.Printf("%#v\n", lcoCourses)
		}

	} else {
		fmt.Println("JSON is invalid")
	}

	// Some cases to add key value pair to json

	var myOnlineData map[string]interface{}

	json.Unmarshal(jsonDataFromWeb, &myOnlineData)

	fmt.Println("Map data: ")
	fmt.Printf("%#v\n", myOnlineData)

	for k, v := range myOnlineData {
		fmt.Println("Key : ", k, "Value : ", v, "Type : ", fmt.Sprintf("%T", v))
	}
}
