package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
)

var SERVER_PORT = os.Getenv("SERVER_PORT")

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/ping", PingHandler)
	mux.HandleFunc("/work", WorkerHandler)
	mux.HandleFunc("/error", ErrorHandler)

	fmt.Printf("Server starting on port %s\n", SERVER_PORT)
	if err := http.ListenAndServe(fmt.Sprintf(":%s", SERVER_PORT), mux); err != nil {
		fmt.Printf("Error while starting the server: %v\n", err)
	}
}

func PingHandler(w http.ResponseWriter, r *http.Request) {
	response := struct {
		Message string `json:"message"`
	}{"pong"}

	bytesData, err := json.Marshal(response)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	w.Header().Add("Content-Type", "application/json")
	w.Write(bytesData)
}

func WorkerHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()

	// Increase work to ensure CPU usage is captured by profiler
	for range 100000000 {
	}

	// time.Sleep(time.Second * 2)

	response := struct {
		Message string        `json:"message"`
		Runtime time.Duration `json:"runtime"`
	}{"Work is completed", time.Since(start)}

	bytesData, err := json.Marshal(response)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	w.Header().Add("Content-Type", "application/json")
	w.Write(bytesData)
}

func ErrorHandler(w http.ResponseWriter, r *http.Request) {
	start := time.Now()

	for range 10000000 {
	}

	response := struct {
		Message string        `json:"message"`
		Runtime time.Duration `json:"runtime"`
	}{"Error message", time.Since(start)}
	bytesData, err := json.Marshal(response)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(404)
	w.Write(bytesData)
}
