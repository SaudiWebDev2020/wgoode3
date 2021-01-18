package com.will.beltreview.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.will.beltreview.models.Activity;

@Repository
public interface ActivityRepository extends CrudRepository<Activity, Long> {

}
