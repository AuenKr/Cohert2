package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

const PORT = ":8000"

var pingCounter = prometheus.NewCounter(prometheus.CounterOpts{
	Name: "ping_counter",
	Help: "Number of pings",
})

func ping(w http.ResponseWriter, r *http.Request) {
	pingCounter.Inc()
	w.Write([]byte("pong"))
}

func main() {
	prometheus.MustRegister(pingCounter)

	http.HandleFunc("/ping", ping)
	http.Handle("/metrics", promhttp.Handler())

	fmt.Println("Starting server on port", PORT)
	if err := http.ListenAndServe(PORT, nil); err != nil {
		log.Fatal(err)
	}
}
