package com.will.movies.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.will.movies.models.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {

	Optional<Movie> findByTitle(String title);
	
}
