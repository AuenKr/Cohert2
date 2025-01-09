package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

const PORT = ":3000"

// Model of course - file
type Course struct {
	Id     string  `json:"id"`
	Name   string  `json:"name"`
	Price  int     `json:"price"`
	Author *Author `json:"author"`
}

type Author struct {
	FullName string `json:"fullName"`
	Website  string `json:"website"`
}

// Fake DB
var courses []Course

// Middleware, helper -file
func (c *Course) IsEmpty() bool {
	return c.Name == ""
}

// Controller - file
func homePage(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Welcome to the HomePage!"))
}

func getAllCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(courses)
}

func getOneCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// grab id from request
	params := mux.Vars(r)
	fmt.Println("params : ", params)
	if params["id"] == "" {
		json.NewEncoder(w).Encode("req id")
		return
	}

	// find course by id
	for _, course := range courses {
		if course.Id == params["id"] {
			json.NewEncoder(w).Encode(course)
			return
		}
	}

	json.NewEncoder(w).Encode("Course not found")
}

func createOneCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Body == nil {
		json.NewEncoder(w).Encode("req json data")
		return
	}

	var course Course

	_ = json.NewDecoder(r.Body).Decode(&course)

	fmt.Println("create new course data : ", course)
	if course.IsEmpty() {
		json.NewEncoder(w).Encode("No data inside the body")
		return
	}

	// Generate unique Id, => string
	// Append to course

	course.Id = strconv.Itoa(rand.Intn(10000))

	courses = append(courses, course)
	json.NewEncoder(w).Encode(course)
}

func UpdateOneCourse(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	w.Header().Set("Content-Type", "application/json")

	if params["id"] == "" {
		json.NewEncoder(w).Encode("req id")
		return
	}

	if r.Body == nil {
		json.NewEncoder(w).Encode("req json data")
		return
	}

	for index, course := range courses {
		if course.Id == params["id"] {
			courses = append(courses[:index], courses[index+1:]...)

			var updatedCourse Course = course

			_ = json.NewDecoder(r.Body).Decode(&updatedCourse)
			courses = append(courses, updatedCourse)

			json.NewEncoder(w).Encode(updatedCourse)
			return
		}
	}
}

func DeleteOneCourse(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	w.Header().Set("Content-Type", "application/json")

	if params["id"] == "" {
		json.NewEncoder(w).Encode("req id")
		return
	}

	for index, course := range courses {
		if course.Id == params["id"] {
			courses = append(courses[:index], courses[index+1:]...)
			json.NewEncoder(w).Encode("Course deleted")
			return
		}
	}

	json.NewEncoder(w).Encode("Course not found")
}

func main() {
	fmt.Println("Rest API v2.0 - Mux Routers")
	fmt.Println("Server is running on port", PORT)

	// Seeding
	courses = append(courses, Course{
		Id:    "123",
		Name:  "React",
		Price: 200,
		Author: &Author{
			FullName: "John Doe",
			Website:  "www.johndoe.com",
		},
	}, Course{
		Id:    "12",
		Name:  "Node",
		Price: 100,
	})

	r := mux.NewRouter()

	// Routing
	r.HandleFunc("/", homePage)

	r.HandleFunc("/courses", getAllCourse).Methods("GET")

	r.HandleFunc("/course/{id}", getOneCourse).Methods("GET")

	r.HandleFunc("/course", createOneCourse).Methods("POST")

	r.HandleFunc("/course/{id}", UpdateOneCourse).Methods("PUT")

	r.HandleFunc("/course/{id}", DeleteOneCourse).Methods("DELETE")

	log.Fatal(http.ListenAndServe(PORT, r))
}
