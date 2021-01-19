package com.will.beltreview.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.will.beltreview.models.Activity;
import com.will.beltreview.models.LoginUser;
import com.will.beltreview.models.Trip;
import com.will.beltreview.models.User;
import com.will.beltreview.services.TripService;
import com.will.beltreview.services.UserService;

@Controller
public class HomeController {

	@Autowired
	private UserService userServ;
	@Autowired
	private TripService tripServ;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, 
			BindingResult result, Model model, HttpSession session) {
		userServ.register(newUser, result);
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		} else {
			session.setAttribute("user_id", newUser.getId());
			return "redirect:/home";
		}
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
			BindingResult result, Model model, HttpSession session) {
		User u = userServ.login(newLogin, result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("user_id", u.getId());
		return "redirect:/home";
		
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user_id");
		return "redirect:/";
	}
	
	@GetMapping("/home")
	public String home(HttpSession session, Model model) {
		// if we're logged in we get back a user
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			// if the user is null return them to the login form
			return "redirect:/";
		}
		model.addAttribute("user", loggedInUser);
		model.addAttribute("allTrips", tripServ.getTrippin());
		return "home.jsp";
	}
	
	@GetMapping("/trips/new")
	public String newTrip(HttpSession session, Model model) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		model.addAttribute("newTrip", new Trip());
		return "newTrip.jsp";
	}
	
	@PostMapping("/trips")
	public String planTrip(@Valid @ModelAttribute("newTrip") Trip newTrip, BindingResult result, 
			HttpSession session, Model model) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		if(result.hasErrors()) {
			return "newTrip.jsp";
		}
		newTrip.setPlanner(loggedInUser);
		tripServ.planTrip(newTrip, result);
		return "redirect:/home";
	}
	
	@GetMapping("/trips/{id}")
	public String getTrippin(@PathVariable("id") Long id, HttpSession session, Model model) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		model.addAttribute("theTrip", tripServ.findTrip(id));
		model.addAttribute("newAct", new Activity());
		return "getTrippin.jsp";
	}
	
	@PostMapping("/trips/{id}/add_activity")
	public String addActivity(@Valid @ModelAttribute("newAct") Activity newAct, BindingResult result, 
			@PathVariable("id") Long id, HttpSession session, Model model) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		System.out.println(result.hasErrors());
		if(result.hasErrors()) {	
			model.addAttribute("theTrip", tripServ.findTrip(id));
			return "getTrippin.jsp";
		}
		newAct.setTrip(tripServ.findTrip(id));
		tripServ.planActivity(newAct, result);
		return "redirect:/trips/" + id;
	}
	
	@GetMapping("/trip/{id}/join")
	public String joinTrip(@PathVariable("id") Long id, HttpSession session) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		tripServ.joinTrip(id, loggedInUser.getId());
		return "redirect:/home";
	}
	
	@GetMapping("/trip/{id}/leave")
	public String leaveTrip(@PathVariable("id") Long id, HttpSession session) {
		User loggedInUser = userServ.findOne( (Long) session.getAttribute("user_id") );
		if(loggedInUser == null) {
			return "redirect:/";
		}
		tripServ.leaveTrip(id, loggedInUser.getId());
		return "redirect:/home";
	}
	
}
