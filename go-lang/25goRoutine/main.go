package main

import (
	"fmt"
	"net/http"
	"sync"
	"time"
)

// func main() {
// 	fmt.Println("Concurrency vs Parallelism")

// 	// Fire the thread but not waited for it to complete execution
// 	go greeter("Hello")
// 	greeter("World")
// }

// func greeter(s string) {
// 	for i := 0; i < 5; i++ {
// 		time.Sleep(3 * time.Millisecond) // Add to wait till its execution is completed
// 		fmt.Println(s)
// 	}
// }

var weightGroup sync.WaitGroup // usually pointer

var signal = []string{} // shared memory variable

var mutex sync.Mutex // Mutex (usually pointer)

func main() {
	start := time.Now()
	fmt.Println("Learning go routine")

	urls := []string{
		"https://auenkr.me",
		"https://go.dev",
		"https://www.google.com",
		"https://www.youtube.com",
		"https://www.facebook.com",
		"https://www.amazon.com",
		"https://www.wikipedia.org",
		"https://www.microsoft.com",
		"https://www.twitter.com",
		"https://www.yahoo.com",
		"https://www.reddit.com",
		"https://www.ebay.com",
		"https://www.cnn.com",
		"https://www.bbc.com",
		"https://www.espn.com",
		"https://www.nytimes.com",
		"https://www.theguardian.com",
		"https://www.wsj.com",
		"https://www.youtube.com",
		"https://www.pinterest.com",
		"https://www.linkedin.com",
		"https://www.hulu.com",
		"https://www.disneyplus.com",
		"https://www.spotify.com",
		"https://www.soundcloud.com",
		"https://www.whatsapp.com",
		"https://www.telegram.com",
		"https://www.signal.org",
		"https://www.discord.com",
		"https://www.slack.com",
		"https://www.dropbox.com",
		"https://www.googledrive.com",
		"https://www.icloud.com",
		"https://www.onedrive.com",
		"https://www.mega.nz",
		"https://www.github.com",
		"https://www.stackoverflow.com",
		"https://www.reddit.com",
		"https://www.khanacademy.org",
		"https://www.coursera.org",
		"https://www.edx.org",
		"https://www.udacity.com",
		"https://www.udemy.com",
		"https://www.lynda.com",
		"https://www.pluralsight.com",
		"https://www.codecademy.com",
		"https://www.freecodecamp.org",
		"https://www.w3schools.com",
		"https://www.tutorialspoint.com",
		"https://www.mozilla.org",
		"https://www.opera.com",
		"https://www.brave.com",
		"https://www.safari.com",
		"https://www.zoom.us",
		"https://www.gotomeeting.com",
		"https://www.amazon.com",
		"https://www.flipkart.com",
		"https://www.ebay.com",
		"https://www.alibaba.com",
		"https://www.walmart.com",
		"https://www.booking.com",
		"https://www.airbnb.com",
		"https://www.expedia.com",
		"https://www.trivago.com",
		"https://www.hotelscombined.com",
		"https://www.skyscanner.net",
		"https://www.kayak.com",
		"https://www.momondo.com",
		"https://www.google.com/maps",
		"https://www.waze.com",
		"https://www.here.com",
		"https://www.openstreetmap.org",
		"https://www.cnn.com",
		"https://www.bbc.com",
		"https://www.foxnews.com",
		"https://www.nbcnews.com",
		"https://www.apnews.com",
		"https://www.reuters.com",
		"https://www.bloomberg.com",
		"https://www.npr.org",
		"https://www.nytimes.com",
		"https://www.theguardian.com",
		"https://www.wsj.com",
		"https://www.forbes.com",
		"https://www.wired.com",
		"https://www.techcrunch.com",
		"https://www.mashable.com",
		"https://www.engadget.com",
		"https://www.gizmodo.com",
		"https://www.arstechnica.com",
		"https://www.theverge.com",
		"https://www.pcmag.com",
		"https://www.tomshardware.com",
		"https://www.howtogeek.com",
		"https://www.makeuseof.com",
		"https://www.xda-developers.com",
		"https://www.androidauthority.com",
		"https://www.9to5google.com",
		"https://www.theverge.com",
		"https://www.wired.com",
		"https://www.techradar.com",
		"https://www.engadget.com",
		"https://www.gizmodo.com",
		"https://www.tomshardware.com",
		"https://www.pcmag.com",
		"https://www.howtogeek.com",
		"https://www.makeuseof.com",
		"https://www.xda-developers.com",
		"https://www.androidauthority.com",
		"https://www.theverge.com",
		"https://www.wired.com",
		"https://www.techradar.com",
		"https://www.engadget.com",
		"https://www.gizmodo.com",
		"https://www.tomshardware.com",
		"https://www.pcmag.com",
		"https://www.howtogeek.com",
		"https://www.makeuseof.com",
		"https://www.xda-developers.com",
		"https://www.androidauthority.com",
		"https://www.theverge.com",
		"https://www.wired.com",
		"https://www.techradar.com",
		"https://www.cnet.com",
		"https://www.engadget.com",
		"https://www.gizmodo.com",
		"https://www.tomshardware.com",
		"https://www.pcmag.com",
		"https://www.howtogeek.com",
		"https://www.makeuseof.com",
		"https://www.xda-developers.com",
		"https://www.androidauthority.com",
		"https://www.theverge.com",
		"https://www.wired.com",
		"https://www.techradar.com",
		"https://www.cnet.com",
		"https://www.engadget.com",
		"https://www.gizmodo.com",
		"https://www.tomshardware.com",
		"https://www.pcmag.com",
		"https://www.howtogeek.com",
		"https://www.makeuseof.com",
		"https://www.xda-developers.com",
		"https://www.androidauthority.com",
	}

	fmt.Println("No of sites to call ", len(urls))
	for _, val := range urls {
		go getStatusCode(val)

		weightGroup.Add(1)
	}

	weightGroup.Wait()
	fmt.Println("total no of endpoint called", len(signal))

	end := time.Now()

	// fmt.Println("Time of execution : ", end.UnixNano()-start.UnixNano(), "nano sec")
	// fmt.Println("Time of execution : ", end.UnixMicro()-start.UnixMicro(), "micro sec")
	fmt.Println("Time of execution : ", end.UnixMilli()-start.UnixMilli(), "milli sec")
}

func getStatusCode(endpoint string) int {
	defer weightGroup.Done()

	res, err := http.Get(endpoint)
	if err != nil {
		fmt.Println("Error ", endpoint, err)
		return res.StatusCode
	}
	defer res.Body.Close()

	mutex.Lock()
	signal = append(signal, endpoint)
	mutex.Unlock()
	fmt.Println("url", endpoint, "status code", res.StatusCode)

	fmt.Println("no of signals", len(signal))

	return res.StatusCode
}
