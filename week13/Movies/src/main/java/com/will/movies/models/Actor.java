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
@Table(name="actors")
public class Actor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Your Actor/Actress must have a name!")
	private String name;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "casts", 
        joinColumns = @JoinColumn(name = "actor_id"), 
        inverseJoinColumns = @JoinColumn(name = "movie_id")
    )
	private List<Cast> roles;
	
	public Actor() {}
	
	public Actor(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Cast> getRoles() {
		return roles;
	}

	public void setRoles(List<Cast> roles) {
		this.roles = roles;
	}
	
}
