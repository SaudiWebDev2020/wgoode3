package com.wgoode3.coffeeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.coffeeshop.models.Drink;

@Repository
public interface DrinkRepository extends CrudRepository<Drink, Long> {
	
	@Query(value="SELECT * FROM drinks ORDER BY calories ASC LIMIT 3", nativeQuery=true)
	List<Drink> top3healthy();
	
	List<Drink> findByNameContaining(String query);
	
}
