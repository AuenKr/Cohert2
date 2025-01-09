package db

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const connectionString = "mongodb://localhost:27017/"
const dbName = "netflix"
const colName = "watchList"

var Collection *mongo.Collection

var Client *mongo.Client

// Connect with mongodb
func init() {
	// client options
	clientOption := options.Client().ApplyURI(connectionString)

	// Connect to mongoDB
	client, err := mongo.Connect(context.TODO(), clientOption)

	if err != nil {
		fmt.Println("Not able to connect to db", err)
		log.Fatal(err)
	}

	Client = client

	fmt.Println("Connected to mongodb")

	Collection = Client.Database(dbName).Collection(colName)

	// collection instance
	fmt.Println("Collection instance is ready")
}
