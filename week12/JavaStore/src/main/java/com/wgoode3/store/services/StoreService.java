package com.wgoode3.store.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wgoode3.store.models.Category;
import com.wgoode3.store.models.Product;
import com.wgoode3.store.repositories.CategoriesRepository;
import com.wgoode3.store.repositories.ProductRepository;

@Service
public class StoreService {

	private ProductRepository prodRepo;
	private CategoriesRepository catRepo;
	
	public StoreService(ProductRepository prodRepo, CategoriesRepository catRepo) {
		this.prodRepo = prodRepo;
		this.catRepo = catRepo;
	}
	
	public ArrayList<Product> getProducts() {
		return (ArrayList<Product>) prodRepo.findAll();
	}
	
	// if the category with a name exists return the existing entry
	// otherwise return a new entry with that name
	public Category findOrCreate(String name) {
		Optional<Category> cat = catRepo.findByName(name);
		if(cat.isPresent()) {
			return cat.get();			
		} else {
			return catRepo.save(new Category(name));
		}
	}
	
	// split the comma separated category names into an array
	// loop through the array adding categories to a list
	// add the list to the product
	// save the product
	public Product create(Product newProduct) {
		String[] catNames = newProduct.getCategoryInput().split(",");
		List<Category> cats = new ArrayList<Category>();
		for(String name : catNames) {
			Category cat = findOrCreate(name);
			cats.add(cat);
		}
		newProduct.setCategories(cats);
		return prodRepo.save(newProduct);
	}
	
}
