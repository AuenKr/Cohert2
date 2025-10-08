// Package metrics have stuff related to prometheus data
package metrics

import (
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var (
	// Counter: Total no of request
	HTTPRequestTotal = promauto.NewCounterVec(
		prometheus.CounterOpts{
			Name: "http_requests_total",
			Help: "Total no of Http request",
		},
		[]string{"method", "path", "status"},
	)

	// Gauge: Current Active request
	ActiveRequest = promauto.NewGaugeVec(
		prometheus.GaugeOpts{
			Name: "active_request",
			Help: "no of request parrallely",
		},
		[]string{"method", "path"},
	)

	// Histogram: latency bucket
	RequestDurationHistogram = promauto.NewHistogramVec(
		prometheus.HistogramOpts{
			Name:    "http_request_duration_seconds",
			Help:    "Histogram of request duration",
			Buckets: prometheus.DefBuckets,
		},
		[]string{"method", "path"},
	)

	RequestDurationSummary = promauto.NewSummaryVec(
		prometheus.SummaryOpts{
			Name:       "http_request_duration_summary_seconds",
			Help:       "Summary of HTTP request duration in seconds",
			Objectives: map[float64]float64{0.5: 0.05, 0.9: 0.01, 0.99: 0.001},
		},
		[]string{"method", "path"},
	)
)

func Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		sw := &statusWriter{
			w,
			200,
		}
		ActiveRequest.WithLabelValues(r.Method, r.URL.Path).Inc()

		next.ServeHTTP(sw, r)
		duration := time.Since(start).Seconds()

		// update metrics
		HTTPRequestTotal.WithLabelValues(r.Method, r.URL.Path, http.StatusText(sw.status)).Inc()
		ActiveRequest.WithLabelValues(r.Method, r.URL.Path).Dec()
		RequestDurationHistogram.WithLabelValues(r.Method, r.URL.Path).Observe(duration)
		RequestDurationSummary.WithLabelValues(r.Method, r.URL.Path).Observe(duration)
	})
}

type statusWriter struct {
	http.ResponseWriter
	status int
}

func (w *statusWriter) WriteHeader(statusCode int) {
	w.status = statusCode                    // capture status
	w.ResponseWriter.WriteHeader(statusCode) // call original
}
