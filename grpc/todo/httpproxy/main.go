package main

import (
	"context"
	"fmt"
	"net/http"
	todopb "todo/gen/go/proto"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const (
	GrpcAddress       = "0.0.0.0:6969"
	HttpServerAddress = "0.0.0.0:6970"
)

func main() {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}

	err := todopb.RegisterTodoServiceHandlerFromEndpoint(ctx, mux, GrpcAddress, opts)
	if err != nil {
		panic(err)
	}

	fmt.Println("Http Proxy Server Started on", HttpServerAddress)
	http.ListenAndServe(HttpServerAddress, mux)
}
