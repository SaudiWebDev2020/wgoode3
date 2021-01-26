package com.will.beltreview.models;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

public class EditTrip {
	
	private Long id;

	@NotEmpty(message="Your planned trip must have a name!")
	private String name;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@NotNull(message="You planned trip must have a Start Date")
	private Date start;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@NotNull(message="You planned trip must have a End Date")
	private Date end;
	
	public EditTrip() {}
	
	public EditTrip(Trip t) {
		id = t.getId();
		name = t.getName();
		start = t.getStart();
		end = t.getEnd();
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}
