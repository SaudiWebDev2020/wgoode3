package com.wgoode3.store.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.store.models.Category;

@Repository
public interface CategoriesRepository extends CrudRepository<Category, Long> {
	
	Optional<Category> findByName(String name);
	
}

