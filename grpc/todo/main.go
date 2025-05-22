package main

import (
	"fmt"
	"net"
	todopb "todo/proto"
	"todo/service"

	"google.golang.org/grpc"
)

const Address = "0.0.0.0:6969"

func main() {
	lis, err := net.Listen("tcp", Address)
	if err != nil {
		panic(err)
	}

	grpcServer := grpc.NewServer()
	todopb.RegisterTodoServiceServer(grpcServer, &service.TodoService{})

	fmt.Println("grpc Server started on", Address)
	grpcServer.Serve(lis)
}
