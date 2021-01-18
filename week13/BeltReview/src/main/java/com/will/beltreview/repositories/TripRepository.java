package com.will.beltreview.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.will.beltreview.models.Trip;

@Repository
public interface TripRepository extends CrudRepository<Trip, Long> {

}
