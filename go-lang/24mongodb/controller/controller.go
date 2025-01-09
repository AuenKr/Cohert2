package controller

import (
	db_helper "db_handling/helper"
	"db_handling/model"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetAllMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencode")

	allMovies := db_helper.GetAllMovie()

	json.NewEncoder(w).Encode(allMovies)
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	params := mux.Vars(r)
	id := params["id"]

	result, err := db_helper.GetMovie(id)
	if err != nil {
		fmt.Println("Error while getting movie data", err)
		http.Error(w, err.Error(), 400)
		return
	}
	fmt.Println("movie result ", result)

	json.NewEncoder(w).Encode(result)
}

func CreateMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	// Setting method manually
	w.Header().Set("Allow-Control-Allow-Methods", "POST")

	var movie model.Netflix
	_ = json.NewDecoder(r.Body).Decode(&movie)

	data := db_helper.InsertMovie(movie)

	json.NewEncoder(w).Encode(model.Netflix{
		Id:      data.InsertedID.(primitive.ObjectID),
		Movie:   movie.Movie,
		Watched: movie.Watched || false,
	})
}

func DeleteOneMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")

	var params = mux.Vars(r)

	id := params["id"]

	result := db_helper.DeleteMovie(id)

	data := struct {
		Msg string `json:"msg"`
		Id  string `json:"id"`
	}{
		Msg: "Delete movie record, modified count " + strconv.Itoa(result),
		Id:  id,
	}

	json.NewEncoder(w).Encode(data)
}

func DeleteAllMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")

	count := db_helper.DeleteAllMovie()

	data := struct {
		Msg   string `json:"msg"`
		Count int64  `json:"count"`
	}{
		Msg:   "Deleted all movie record",
		Count: count,
	}

	json.NewEncoder(w).Encode(data)
}

func MarkMovieAsWatch(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "PUT")

	var params = mux.Vars(r)

	id := params["id"]

	result := db_helper.UpdateMovie(id)

	data := struct {
		Msg string `json:"msg"`
		Id  string `json:"id"`
	}{
		Msg: "Marked movie as watched, modified count " + strconv.Itoa(result),
		Id:  id,
	}

	json.NewEncoder(w).Encode(data)
}
