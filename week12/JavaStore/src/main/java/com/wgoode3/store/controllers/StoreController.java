package com.wgoode3.store.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
		model.addAttribute("products", storeServ.getProducts());
		return "index.jsp";
	}
	
	@PostMapping("/product")
	public String create(@Valid @ModelAttribute("newProduct") Product newProduct, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("products", storeServ.getProducts());
			return "index.jsp";
		}
		storeServ.create(newProduct);
		return "redirect:/";
	}
	
	@GetMapping("/remove/{p_id}/{c_id}")
	public String removeCategory(@PathVariable("p_id") Long p_id, @PathVariable("c_id") Long c_id) {
		storeServ.removeCat(p_id, c_id);
		return "redirect:/";
	}
	
}
