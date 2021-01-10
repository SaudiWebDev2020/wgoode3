package com.wgoode3.coffeeshop.models;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


public class Shop {

	@Size(min=3, message="Coffee Shop name must be 3 characters or longer!")
	@Size(max=30, message="Coffee Shop name must be fewer than 30 characters long!")
	private String name;
	
	@Size(min=5, message="Coffee Shop location must be 5 characters or longer!")
	@Size(max=50, message="Coffee Shop location must be fewer than 50 characters long!")
	private String location;
	
	@NotEmpty(message="Description is required!")
	private String description;
	
	// format these as the time of day
	private Date open;
	private Date close;
	
	// TODO - date opened
	// format to just date
	private Date founded;
	
	public Shop() {}

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
