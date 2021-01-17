package com.will.movies.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.will.movies.models.Actor;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Long> {

	Optional<Actor> findByName(String name);
	
}
