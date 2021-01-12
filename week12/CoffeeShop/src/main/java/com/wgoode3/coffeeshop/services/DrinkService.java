package com.wgoode3.coffeeshop.services;

import org.springframework.stereotype.Service;

import com.wgoode3.coffeeshop.models.Drink;
import com.wgoode3.coffeeshop.repositories.DrinkRepository;

@Service
public class DrinkService {

	private DrinkRepository drinkRepo;
	
	public DrinkService(DrinkRepository drinkRepo) {
		this.drinkRepo = drinkRepo;
	}
	
	public Drink create(Drink newDrink) {
		return drinkRepo.save(newDrink);
	}
	
}
