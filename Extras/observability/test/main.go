package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

const (
	runTime = time.Second * 5
	baseURL = "http://localhost:8080"
)

func main() {
	log.Println("Starting testing")

	// channel to catch Ctrl+C
	channel := make(chan os.Signal, 1)
	signal.Notify(channel, os.Interrupt)

	i := 0

	go func() {
		for {
			sendHTTPRequest("/ping")
			time.Sleep(time.Microsecond * 1000)
		}
	}()

loop:
	for {
		select {
		case <-channel:
			log.Println("system exit call")
			break loop
		default:
			go func(j int) {
				log.Println("req:", j)
				sendHTTPRequest("/work")
			}(i)
			i++
			time.Sleep(time.Millisecond * 100)
		}
	}

	log.Println("Exiting program")
}

func sendHTTPRequest(path string) {
	reqURL := baseURL + path
	log.Println("req: ", reqURL)
	resp, err := http.Get(reqURL)
	if err != nil {
		log.Println("fail to make req to path", path)
		log.Println(err)
	}
	defer resp.Body.Close()
	log.Println("req status", resp.StatusCode)
}
