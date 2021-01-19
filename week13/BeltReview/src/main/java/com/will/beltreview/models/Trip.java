package com.will.beltreview.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="trips")
public class Trip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Your planned trip must have a name!")
	private String name;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@NotNull(message="You planned trip must have a Start Date")
	private Date start;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@NotNull(message="You planned trip must have a End Date")
	private Date end;
	
	@Transient
	@NotEmpty(message="Your First Activity description cannot be empty!")
	private String description;
	
	// TODO - HOW DO WE FORMAT datetime-local?
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Transient
	@NotNull(message="You First Activity must have a Start Date")
	private Date actStart;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Transient
	@NotNull(message="You First Activity must have a End Date")
	private Date actEnd;
	
	@Transient
	@NotEmpty(message="Your First Activity Country is required!")
	private String country;
	
	@Transient
	@NotEmpty(message="Your First Activity City / Area is required!")
	private String city;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
	private User planner;
	
	@OneToMany(mappedBy="trip", fetch = FetchType.LAZY)
	private List<Activity> itenerary;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "party", 
        joinColumns = @JoinColumn(name = "trip_id"), 
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
	private List<User> party;
	
	@Column(updatable = false)
	private Date createdAt;
	
	private Date updatedAt;
	
	public Trip() {}

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

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

	public User getPlanner() {
		return planner;
	}

	public void setPlanner(User planner) {
		this.planner = planner;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public List<Activity> getItenerary() {
		return itenerary;
	}

	public void setItenerary(List<Activity> itenerary) {
		this.itenerary = itenerary;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Date getActStart() {
		return actStart;
	}

	public void setActStart(Date actStart) {
		this.actStart = actStart;
	}

	public Date getActEnd() {
		return actEnd;
	}

	public void setActEnd(Date actEnd) {
		this.actEnd = actEnd;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	public List<User> getParty() {
		return party;
	}

	public void setParty(List<User> party) {
		this.party = party;
	}

	public Boolean isOnTrip(Long user_id) {
		for(User u : party) {
			if(u.getId() == user_id) {
				return true;
			}
		}
		return false;
	}
	
}
