package com.wgoode3.coffeeshop.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wgoode3.coffeeshop.models.Shop;
import com.wgoode3.coffeeshop.repositories.ShopRepository;

@Service
public class ShopService {

	private ShopRepository shopRepo;
	
	public ShopService(ShopRepository shopRepo) {
		this.shopRepo = shopRepo;
	}
	
	public Shop create(Shop newShop) {
		return shopRepo.save(newShop);
	}
	
	public ArrayList<Shop> getAll() {
		return (ArrayList<Shop>) shopRepo.findAll();
	}
	
	public Shop getOne(Long id) {
		Optional<Shop> shop = shopRepo.findById(id);
		return shop.get();
	}
	
	public Shop update(Shop toEdit) {
		// save is used both to create new entries and update existing
		return shopRepo.save(toEdit);
	}
	
	public void remove(Long id) {
		shopRepo.deleteById(id);
	}
	
}
