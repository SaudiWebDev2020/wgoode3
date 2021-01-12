package com.wgoode3.coffeeshop.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.coffeeshop.models.Drink;

@Repository
public interface DrinkRepository extends CrudRepository<Drink, Long> {

}
