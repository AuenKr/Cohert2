// Package tracer have stuff related to tracing
package tracer

import (
	"context"
	"log"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.21.0"
	"go.opentelemetry.io/otel/trace"
)

const (
	tempoURL = "localhost:4317"
)

// InitTracer creates a global tracer provider
func InitTracer(serviceName string) func(context.Context) error {
	ctx := context.Background()

	// Exporter to tempo
	exp, err := otlptracegrpc.New(ctx,
		otlptracegrpc.WithInsecure(),
		otlptracegrpc.WithEndpoint(tempoURL),
	)
	if err != nil {
		log.Fatalf("failed to create OTLP exporter: %v", err)
	}

	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(exp), // buffers spans before exporting
		sdktrace.WithResource(resource.NewWithAttributes(
			semconv.SchemaURL,
			semconv.ServiceName(serviceName),
		)),
	)

	otel.SetTracerProvider(tp)

	// Returns a shutdown function to flush remaining spans
	return tp.Shutdown
}

// GetTracer returns a named tracer
func GetTracer(name string) trace.Tracer {
	return otel.Tracer(name)
}
