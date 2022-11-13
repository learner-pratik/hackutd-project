package main

import (
	"cmd/handlers"
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Welcome to UTD")
	router := handlers.NewRouter(&handlers.Routes)
	log.Fatal(http.ListenAndServe(":8000", router))
}
