package main

import (
	"context"
	"db_handling/db"
	"db_handling/router"
	"fmt"
	"log"
	"net/http"
)

const PORT string = ":3000"

func main() {
	fmt.Println("Server is getting started")

	r := router.Route()

	log.Fatal(http.ListenAndServe(PORT, r))
	fmt.Println("server started on Port", PORT)

	defer func() {
		if err := db.Client.Disconnect(context.TODO()); err != nil {
			fmt.Println("Error disconnecting from DB:", err)
			log.Fatal(err)
		}
		fmt.Println("Disconnected from MongoDB")
	}()
}
