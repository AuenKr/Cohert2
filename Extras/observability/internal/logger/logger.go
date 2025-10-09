// Package logger have zap related stuff
package logger

import (
	"net/http"
	"time"

	"go.opentelemetry.io/otel/trace"
	"go.uber.org/zap"
)

func InitLogger() (*zap.Logger, error) {
	config := zap.NewProductionConfig()
	config.Encoding = "json"                                  // JSON logs for Promtail
	config.OutputPaths = []string{"stdout", "./logs/app.log"} // stdout + file
	return config.Build()
}

func Logger(next http.Handler, logger *zap.Logger) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		ctx := r.Context()
		span := trace.SpanFromContext(ctx)
		traceID := span.SpanContext().TraceID().String()

		// call the actual handler
		next.ServeHTTP(w, r)

		// after response
		logger.Info("request completed",
			zap.String("method", r.Method),
			zap.String("path", r.URL.Path),
			zap.Duration("latency", time.Since(start)),
			zap.String("trace_id", traceID),
		)
	})
}
