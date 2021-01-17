package com.will.movies.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Your movie must have a title!")
	private String title;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "casts", 
        joinColumns = @JoinColumn(name = "movie_id"), 
        inverseJoinColumns = @JoinColumn(name = "actor_id")
    )
	private List<Cast> movieCast;
	
	public Movie() {}
	
	public Movie(String title) {
		this.title = title;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Cast> getMovieCast() {
		return movieCast;
	}

	public void setMovieCast(List<Cast> movieCast) {
		this.movieCast = movieCast;
	}
	
}