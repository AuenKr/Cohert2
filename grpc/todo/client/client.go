package main

import (
	"context"
	"fmt"
	"time"
	todopb "todo/proto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const Address = "0.0.0.0:6969"

func main() {
	fmt.Println("Client")

	conn, err := grpc.NewClient(Address, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	client := todopb.NewTodoServiceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	resp, err := client.GetTodo(ctx, &todopb.GetTodoRequest{})
	if err != nil {
		panic(err)
	}

	fmt.Println(resp)
}
