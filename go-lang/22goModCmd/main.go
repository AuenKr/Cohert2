package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Go mod overview")
	greeter()
	r := mux.NewRouter()

	r.HandleFunc("/", serveHome).Methods("GET")

	log.Fatal(http.ListenAndServe(":4000", r))
}

func greeter() {
	fmt.Println("Hey there mod users")
}

func serveHome(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Method, r.URL)
	w.Write([]byte("<h1>This is Go lang course</h1>"))
}
