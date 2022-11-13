package handlers

import (
	"cmd/controllers"
	"cmd/models"
)

var header_one = models.Header{Name: "Content-Type", Value: "application/json"}

var Routes = []models.Route{
	{
		Name:           "Index",
		Method:         "GET",
		Pattern:        "/",
		DefaultHandler: controllers.WelcomeHandler,
		HeaderDefault:  models.HeaderHandleMap{HeaderType: header_one, HandlerFunc: nil},
	}, {
		Name:           "Degree",
		Method:         "GET",
		Pattern:        "/get_degree",
		DefaultHandler: controllers.GetDegree,
		HeaderDefault:  models.HeaderHandleMap{HeaderType: header_one, HandlerFunc: controllers.GetDegree},
	}, {
		Name:           "Register",
		Method:         "POST",
		Pattern:        "/register",
		DefaultHandler: controllers.Register,
		HeaderDefault:  models.HeaderHandleMap{HeaderType: header_one, HandlerFunc: controllers.Register},
	}, {
		Name:           "Login",
		Method:         "POST",
		Pattern:        "/login",
		DefaultHandler: controllers.Login,
		HeaderDefault:  models.HeaderHandleMap{HeaderType: header_one, HandlerFunc: controllers.Login},
	}, 
}
