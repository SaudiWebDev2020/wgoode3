package com.wgoode3.store.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.store.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {}
