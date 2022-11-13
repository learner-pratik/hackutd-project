package models

import "net/http"

type Route struct {
	Name,
	Method,
	Pattern        string
	DefaultHandler http.HandlerFunc
	HeaderDefault  HeaderHandleMap
}

type HeaderHandleMap struct {
	HeaderType  Header
	HandlerFunc http.HandlerFunc
}

type Header struct {
	Name,
	Value string
}

type User struct {
	Name string `{"name":"json"}`
	Password string `{"password":"password"}`
	Email string `{"email":"email"}`
	Dob string `{"dob":"dob"}`
	Degree string `{"degree":"degree"}`
}