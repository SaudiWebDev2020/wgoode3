package com.wgoode3.notes.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.wgoode3.notes.models.Note;
import com.wgoode3.notes.services.NoteService;

@Controller
public class HomeController {

	private NoteService noteServ;
	
	public HomeController(NoteService noteServ) {
		this.noteServ = noteServ;
	}
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newNote", new Note()); // binds to form helper in index.jsp
		model.addAttribute("allNotes", noteServ.getAll()); // displays all notes 
		return "index.jsp";
	}
	
	@PostMapping("/note")
	public String create(@Valid @ModelAttribute("newNote") Note newNote, 
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			// still display notes if validation error
			model.addAttribute("allNotes", noteServ.getAll()); 
			return "index.jsp";
		}
		// otherwise create a note and redirect back
		noteServ.create(newNote);
		return "redirect:/";
	}
	
}
