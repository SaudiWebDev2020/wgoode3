package com.wgoode3.coffeeshop.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wgoode3.coffeeshop.models.Shop;

@Repository
public interface ShopRepository extends CrudRepository<Shop, Long> {}
