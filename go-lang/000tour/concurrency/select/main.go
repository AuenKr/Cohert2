package main

import (
	"fmt"
	"time"
)

// Simulate a request type
type HttpRequest struct {
	Method string
	Path   string
}

// Simulate a control command type
type ControlCommand struct {
	Command string
	Data    string
}

func main() {
	httpRequestChan := make(chan HttpRequest)
	controlCommandChan := make(chan ControlCommand)
	shutdownChan := make(chan bool) // For graceful shutdown

	// Simulate incoming HTTP requests
	go func() {
		for {
			time.Sleep(1 * time.Second)
			httpRequestChan <- HttpRequest{Method: "GET", Path: "/users"}
			time.Sleep(2 * time.Second)
			httpRequestChan <- HttpRequest{Method: "POST", Path: "/products"}
		}
	}()

	// Simulate incoming control commands
	go func() {
		for {
			time.Sleep(3 * time.Second)
			controlCommandChan <- ControlCommand{Command: "reload_config", Data: ""}
		}
	}()

	go func() {
		time.Sleep(60 * time.Second)
		shutdownChan <- true
	}()

	// The main service loop using select
	for {
		fmt.Println("Looping inside Select loop")
		select {
		case httpRequest := <-httpRequestChan:
			fmt.Printf("Received HTTP request: %s %s\n", httpRequest.Method, httpRequest.Path)
			// Process the HTTP request here
		case controlCommand := <-controlCommandChan:
			fmt.Printf("Received control command: %s (%s)\n", controlCommand.Command, controlCommand.Data)
			// Process the control command here
		case <-shutdownChan:
			fmt.Println("Shutting down service...")
			return
		}
	}
}
