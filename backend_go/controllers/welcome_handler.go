package controllers

import (
	"encoding/json"
	"log"
	"net/http"
)

func WelcomeHandler(w http.ResponseWriter, r *http.Request) {
	res := make(map[string]string)
	res["message"] = "UP"
	json_res, err := json.Marshal(res)
	if err != nil {
		log.Fatalf("Error in parsing json %s", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(json_res)
	return
}
