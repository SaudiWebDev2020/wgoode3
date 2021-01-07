package com.will.planets.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APIController {

	@GetMapping("/test")
	public String index() {
		return "<h1>Hello World!</h1>";
	}
	
	@GetMapping("/planets") 
	public String[] planets() {
		return new String[] {
				"Mercury",
				"Venus",
				"Earth",
				"Mars",
				"Jupiter",
				"Saturn",
				"Neptune",
				"Uranus"
		};
	}
	
}
