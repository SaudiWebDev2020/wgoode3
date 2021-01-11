package com.wgoode3.coffeeshop.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="Shops")
public class Shop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Size(min=3, message="Coffee Shop name must be 3 characters or longer!")
	@Size(max=30, message="Coffee Shop name must be fewer than 30 characters long!")
	private String name;
	
	@Size(min=5, message="Coffee Shop location must be 5 characters or longer!")
	@Size(max=50, message="Coffee Shop location must be fewer than 50 characters long!")
	private String location;
	
	@NotEmpty(message="Description is required!")
	private String description;
	
	// format these as the time of day
	@DateTimeFormat(pattern="HH:mm")
	@NotNull(message="Open Time is required!")
	private Date open;
	@DateTimeFormat(pattern="HH:mm")
	@NotNull(message="Close Time is required!")
	private Date close;
	
	// format to just date
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@NotNull(message="Founded On date is required!")
	private Date founded;
	
	public Shop() {}

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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public Date getOpen() {
		return open;
	}

	public void setOpen(Date open) {
		this.open = open;
	}

	public Date getClose() {
		return close;
	}

	public void setClose(Date close) {
		this.close = close;
	}

	public Date getFounded() {
		return founded;
	}

	public void setFounded(Date founded) {
		this.founded = founded;
	}

	public String toString() {
		String res = "";
		res += "Name: " + name + "\n";
		res += "Location: " + location + "\n";
		res += "Description: " + description + "\n";
		return res;
	}
	
}
