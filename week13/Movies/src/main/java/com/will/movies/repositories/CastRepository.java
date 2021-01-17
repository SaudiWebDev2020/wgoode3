package com.will.movies.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.will.movies.models.Cast;

@Repository
public interface CastRepository extends CrudRepository<Cast, Long> {

}
