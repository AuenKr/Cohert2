package router

import (
	"db_handling/controller"
	"net/http"

	"github.com/gorilla/mux"
)

func Route() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/", homePageController).Methods("GET")

	router.HandleFunc("/movie", controller.GetAllMovies).Methods("GET")

	router.HandleFunc("/movie", controller.CreateMovie).Methods("POST")

	router.HandleFunc("/movie/{id}", controller.GetMovie).Methods("GET")

	router.HandleFunc("/movie/{id}", controller.MarkMovieAsWatch).Methods("PUT")

	router.HandleFunc("/movie/all", controller.DeleteAllMovie).Methods("DELETE")

	router.HandleFunc("/movie/{id}", controller.DeleteOneMovie).Methods("DELETE")

	return router
}

func homePageController(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("This is homepage"))
}
