package controllers

import (
	"fmt"
	"net/http"
)

func InvalidHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Page Broken")
	w.WriteHeader(http.StatusBadRequest)
}
