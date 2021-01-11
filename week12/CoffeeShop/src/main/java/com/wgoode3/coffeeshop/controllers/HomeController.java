package com.wgoode3.coffeeshop.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.wgoode3.coffeeshop.models.Shop;
import com.wgoode3.coffeeshop.services.ShopService;

@Controller
public class HomeController {
	
	private ShopService shopServ;
	
	public HomeController(ShopService shopServ) {
		this.shopServ = shopServ;
	}

    @GetMapping("/")
    public String index(Model model) {
    	model.addAttribute("shop", new Shop());
    	model.addAttribute("shops", shopServ.getAll());
        return "index.jsp";
    }
    
//    @PostMapping("/shop")
//    public String create(@RequestParam(value="name") String name, 
//    		@RequestParam(value="location") String location, 
//    		@RequestParam(value="description") String description) {
//    	System.out.println("name: " + name);
//    	System.out.println("location: " + location);
//    	System.out.println("description: " + description);
//    	return "redirect:/";
//    }
    
//    @PostMapping("/shop")
//    public String create(@RequestParam Map<String, String> formData) {
//    	System.out.println("name: " + formData.get("name"));
//    	System.out.println("location: " + formData.get("location"));
//    	System.out.println("description: " + formData.get("description"));
//    	return "redirect:/";
//    }
    
    // TODO - make sure the founded date is in the past
    @PostMapping("/shop")
    public String create(@Valid @ModelAttribute("shop") Shop shop, BindingResult result, 
    		HttpSession session, Model model) {
    	System.out.println(shop);
    	if(result.hasErrors()) {
    		System.out.println(result.getAllErrors());
    		model.addAttribute("shops", shopServ.getAll());
    		return "index.jsp"; // if there are errors re-render the page
    	}
    	Integer count = (Integer) session.getAttribute("count");
    	if(count == null) {
    		count = 0;
    	}
    	session.setAttribute("count", count+1);
    	session.setAttribute("shop", shop);
    	shopServ.create(shop);
    	return "redirect:/shop"; // if the data is valid redirect
    }
    
    @GetMapping("/shop")
    public String showShop() {
    	return "shop.jsp";
    }

}