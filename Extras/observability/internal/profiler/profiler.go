// Package profiler contains profiling related stuff
package profiler

import (
	"time"

	"github.com/grafana/pyroscope-go"
	"go.uber.org/zap"
)

const (
	ApplicationName = "http-server"
	Address         = "http://localhost:4040"
	UploadRate      = time.Second * 1
)

func InitProfiling(logger *zap.Logger) *pyroscope.Profiler {
	// Use the adapter to wrap your zap logger.
	pyroscopeLoggerAdapter := NewZapPyroscopeLogger(logger)

	config := pyroscope.Config{
		ApplicationName: ApplicationName,
		ServerAddress:   Address, // pyroscope
		UploadRate:      UploadRate,
		Logger:          pyroscopeLoggerAdapter,
	}

	profiler, err := pyroscope.Start(config)
	if err != nil {
		panic(err)
	}
	return profiler
}

type zapPyroscopeLogger struct {
	logger *zap.Logger
}

// NewZapPyroscopeLogger creates a new logger for Pyroscope that uses zap.
func NewZapPyroscopeLogger(logger *zap.Logger) pyroscope.Logger {
	return &zapPyroscopeLogger{logger: logger}
}

// These methods satisfy the pyroscope.Logger interface.
// When Pyroscope calls Infof, it will actually call our zap logger.

func (l *zapPyroscopeLogger) Infof(format string, args ...any) {
	l.logger.Sugar().Infof(format, args...)
}

func (l *zapPyroscopeLogger) Debugf(format string, args ...any) {
	l.logger.Sugar().Debugf(format, args...)
}

func (l *zapPyroscopeLogger) Errorf(format string, args ...any) {
	l.logger.Sugar().Errorf(format, args...)
}
