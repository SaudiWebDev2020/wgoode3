package com.wgoode3.store.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.wgoode3.store.models.Product;
import com.wgoode3.store.services.StoreService;

@Controller
public class StoreController {

	private StoreService storeServ;
	
	public StoreController(StoreService storeServ) {
		this.storeServ = storeServ;
	}
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newProduct", new Product());
		return "index.jsp";
	}
	
	@PostMapping("/product")
	public String create(@Valid @ModelAttribute("newProduct") Product newProduct, BindingResult result) {
		storeServ.create(newProduct);
		return "redirect:/";
	}
	
}
