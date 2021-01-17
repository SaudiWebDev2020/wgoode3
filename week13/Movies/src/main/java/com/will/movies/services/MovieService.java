package com.will.movies.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.will.movies.models.Actor;
import com.will.movies.models.Cast;
import com.will.movies.models.Movie;
import com.will.movies.repositories.ActorRepository;
import com.will.movies.repositories.CastRepository;
import com.will.movies.repositories.MovieRepository;

@Service
public class MovieService {

	// autowired should create the constructor for us...
	@Autowired
	private MovieRepository movieRepo;
	@Autowired
	private ActorRepository actorRepo;
	@Autowired
	private CastRepository castRepo;
	
	
	
	public Actor findOrCreateActor(String name) {
		Optional<Actor> possibleActor = actorRepo.findByName(name);
		if(possibleActor.isPresent()) {
			return possibleActor.get();
		} else {
			return actorRepo.save(new Actor(name));
		}
	}
	
	public Movie findOrCreateMovie(String title) {
		Optional<Movie> possibleMovie = movieRepo.findByTitle(title);
		if(possibleMovie.isPresent()) {
			return possibleMovie.get();
		} else {
			return movieRepo.save(new Movie(title));
		}
	}
	
	// TODO - prevent duplicate castings
	public Cast create(Cast newCast) {
		Actor a = findOrCreateActor(newCast.getActorName());
		Movie m = findOrCreateMovie(newCast.getMovieTitle());
		newCast.setActor(a);
		newCast.setMovie(m);
		return castRepo.save(newCast);
	}
	
	public ArrayList<Actor> getActors() {
		return (ArrayList<Actor>) actorRepo.findAll();
	}
	
	public ArrayList<Movie> getMovies() {
		return (ArrayList<Movie>) movieRepo.findAll();
	}
	
	public ArrayList<Cast> getCasts() {
		return (ArrayList<Cast>) castRepo.findAll();
	}
	
}
