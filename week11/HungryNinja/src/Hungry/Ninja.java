package Hungry;

import java.util.ArrayList;

public class Ninja {
	
	// use static if the variable belongs to Ninja
	public static Integer count = 0;
	public String name;
	public Integer dailyCalorieLimit;
	public Integer todaysCalories;
	public ArrayList<Food> stomach;
	
	public Ninja(String name, Integer limit) {
		this.name = name;
		this.dailyCalorieLimit = limit;
		todaysCalories = 0;
		stomach = new ArrayList<Food>();
		count++;
	}
	
	public Boolean isFull() {
		return todaysCalories >= dailyCalorieLimit;
	}
	
	public void eat(Food item) {
		if(this.isFull()) {
			throw new Error(name + " is full exception!");
		}
		System.out.println(name  + " is eating...\n" + item);
		todaysCalories += item.calories;
		stomach.add(item);
	}

}
