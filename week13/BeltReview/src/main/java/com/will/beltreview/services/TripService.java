package com.will.beltreview.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.will.beltreview.models.Activity;
import com.will.beltreview.models.Trip;
import com.will.beltreview.models.User;
import com.will.beltreview.repositories.ActivityRepository;
import com.will.beltreview.repositories.TripRepository;
import com.will.beltreview.repositories.UserRepository;

@Service
public class TripService {

	@Autowired
	private TripRepository tripRepo;
	@Autowired
	private ActivityRepository actRepo;
	@Autowired
	private UserRepository userRepo;
	
	// TODO = prevent trip overlap
	public Trip planTrip(Trip newTrip, BindingResult result) {
		tripRepo.save(newTrip);
		Activity firstAct = new Activity(
				newTrip.getDescription(),
				newTrip.getCountry(),
				newTrip.getCity(),
				newTrip.getActStart(),
				newTrip.getActEnd(),
				newTrip
		);
		actRepo.save(firstAct);
		return newTrip;
	}
	
	// TODO = prevent activity overlap
	public Activity planActivity(Activity newAct, BindingResult result) {
		newAct.setId(null);
		return actRepo.save(newAct);
	}
	
	public Trip findTrip(Long id) {
		return tripRepo.findById(id).orElse(null);
	}
	
	public ArrayList<Trip> getTrippin() {
		return (ArrayList<Trip>) tripRepo.findAll();
	}
	
	public void joinTrip(Long trip_id, Long user_id) {
		User u = userRepo.findById(user_id).orElse(null);
		Trip t = findTrip(trip_id);
		List<User> party = t.getParty();
		party.add(u);
		t.setParty(party);
		tripRepo.save(t);
	}
	
	public void leaveTrip(Long trip_id, Long user_id) {
		User u = userRepo.findById(user_id).orElse(null);
		Trip t = findTrip(trip_id);
		List<User> party = t.getParty();
		party.remove(u);
		t.setParty(party);
		tripRepo.save(t);
	}
	
}
