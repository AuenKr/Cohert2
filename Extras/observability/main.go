package main

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"observability/internal/logger"
	"observability/internal/metrics"
	"observability/internal/tracer"

	"github.com/prometheus/client_golang/prometheus/promhttp"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.uber.org/zap"
)

const (
	address  = ":8080"
	TracerID = "http_server"
)

func main() {
	log, _ := zap.NewProduction()
	defer func() {
		if err := log.Sync(); err != nil {
			log.Error("Logger Sync failed", zap.Error(err))
		}
	}()

	shutdown := tracer.InitTracer(TracerID)
	defer shutdown(context.Background())

	mux := http.NewServeMux()

	mux.Handle("/ping", otelhttp.NewHandler(http.HandlerFunc(PingHandler), "PingHandler"))
	mux.Handle("/work", otelhttp.NewHandler(http.HandlerFunc(WorkerHandler), "WorkerHandler"))

	mux.HandleFunc("/metrics", promhttp.Handler().ServeHTTP)

	loggerMiddlerware := logger.Logger(mux, log)
	handler := metrics.Middleware(loggerMiddlerware)

	log.Info("Server starting", zap.String("port", address))
	if err := http.ListenAndServe(address, handler); err != nil {
		log.Error("Error while starting the server", zap.Error(err))
	}
}

func PingHandler(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	_, span := tracer.GetTracer(TracerID).Start(ctx, "PingHandlerLogic")
	defer span.End()

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
	ctx := r.Context()
	_, span := tracer.GetTracer(TracerID).Start(ctx, "WorkerHandlerLogic")
	defer span.End()

	start := time.Now()

	for range 100000 {
	}

	time.Sleep(time.Second * 2)

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
