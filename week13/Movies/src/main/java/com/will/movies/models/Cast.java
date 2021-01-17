package com.will.movies.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="casts")
public class Cast {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Your Actor/Actress must have a role!")
	private String role;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="movie_id")
	private Movie movie;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="actor_id")
	private Actor actor;
	
	@Transient
	@NotEmpty(message="Your Actor/Actress must have a name!")
	private String actorName;
	
	@Transient
	@NotEmpty(message="Your Movie must have a title!")
	private String movieTitle;
	
	public Cast() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public Actor getActor() {
		return actor;
	}

	public void setActor(Actor actor) {
		this.actor = actor;
	}

	public String getActorName() {
		return actorName;
	}

	public void setActorName(String actorName) {
		this.actorName = actorName;
	}

	public String getMovieTitle() {
		return movieTitle;
	}

	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}
	
	

}
