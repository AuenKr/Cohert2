package db_helper

import (
	"context"
	"db_handling/db"
	"db_handling/model"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"go.mongodb.org/mongo-driver/mongo"
)

func InsertMovie(movie model.Netflix) *mongo.InsertOneResult {
	collection := db.Collection

	data := bson.M{"movie": movie.Movie, "watched": movie.Watched}

	result, err := collection.InsertOne(context.TODO(), data)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("inserted new data", result)
	return result
}

func UpdateMovie(movieId string) int {
	id, err := primitive.ObjectIDFromHex(movieId)
	if err != nil {
		log.Fatal(err)
	}

	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"watched": true}}

	result, err := db.Collection.UpdateOne(context.TODO(), filter, update)

	if err != nil {
		log.Fatal(err)
	}

	return int(result.ModifiedCount)
}

func DeleteMovie(movieId string) int {
	id, _ := primitive.ObjectIDFromHex(movieId)
	filter := bson.M{"_id": id}

	result, err := db.Collection.DeleteOne(context.TODO(), filter)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Record delete ", result)

	return int(result.DeletedCount)
}

// delete all record
func DeleteAllMovie() int64 {
	result, err := db.Collection.DeleteMany(context.TODO(), bson.M{})

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("All record delete", result)

	return result.DeletedCount
}

// get all record
func GetAllMovie() []primitive.M {
	cursor, err := db.Collection.Find(context.TODO(), bson.M{})

	if err != nil {
		log.Fatal(err)
	}

	defer cursor.Close(context.Background())

	var movies []primitive.M

	for cursor.Next(context.TODO()) {
		var movie primitive.M

		if err := cursor.Decode(&movie); err != nil {
			log.Fatal(err)
		}
		movies = append(movies, movie)
	}

	return movies
}

// Get record by Id
func GetMovie(movieId string) (model.Netflix, error) {
	id, err := primitive.ObjectIDFromHex(movieId)

	if err != nil {
		return model.Netflix{}, err
	}

	filter := bson.M{"_id": id}

	result := db.Collection.FindOne(context.TODO(), filter)

	if err := result.Err(); err != nil {
		fmt.Println("Document not found")
		return model.Netflix{}, err
	}

	var movie model.Netflix
	err = result.Decode(&movie)

	if err != nil {
		fmt.Println("No document found")
		return model.Netflix{}, err
	}

	return movie, nil
}
