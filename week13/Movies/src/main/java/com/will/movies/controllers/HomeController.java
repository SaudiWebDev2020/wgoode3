package com.will.movies.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.will.movies.models.Cast;
import com.will.movies.services.MovieService;

@Controller
public class HomeController {

	@Autowired
	private MovieService movieServ;
	
	@GetMapping("/")
	public String home(Model model) {
		model.addAttribute("newCast", new Cast());
		model.addAttribute("allActors", movieServ.getActors());
		model.addAttribute("allMovies", movieServ.getMovies());
		model.addAttribute("allCasts", movieServ.getCasts());
		return "index.jsp";
	}
	
	@PostMapping("/create")
	public String create(@Valid @ModelAttribute("newCast") Cast newCast, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("allActors", movieServ.getActors());
			model.addAttribute("allMovies", movieServ.getMovies());
			model.addAttribute("allCasts", movieServ.getCasts());
			return "index.jsp";
		}
		movieServ.create(newCast);
		return "redirect:/";
	}
	
	
	
}
