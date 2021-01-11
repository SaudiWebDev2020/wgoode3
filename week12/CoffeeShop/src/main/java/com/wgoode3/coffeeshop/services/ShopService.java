package com.wgoode3.coffeeshop.services;

import java.util.ArrayList;

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
	
}
