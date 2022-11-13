package handlers

import (
	"cmd/models"

	"github.com/gorilla/mux"
)

func NewRouter(routes *[]models.Route) *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range *routes {
		if route.HeaderDefault.HandlerFunc != nil {
			router.
				Methods(route.Method).
				Path(route.Pattern).
				Name(route.Name).
				Handler(route.HeaderDefault.HandlerFunc).
				Headers(route.HeaderDefault.HeaderType.Name, route.HeaderDefault.HeaderType.Value)
		}
		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(route.DefaultHandler)

	}
	return router
}
