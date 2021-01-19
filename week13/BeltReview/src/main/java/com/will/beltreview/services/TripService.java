package com.will.beltreview.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.will.beltreview.models.Activity;
import com.will.beltreview.models.Trip;
import com.will.beltreview.repositories.ActivityRepository;
import com.will.beltreview.repositories.TripRepository;

@Service
public class TripService {

	@Autowired
	private TripRepository tripRepo;
	@Autowired
	private ActivityRepository actRepo;
	
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
	
}
