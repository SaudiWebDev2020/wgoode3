package Hungry;

import java.util.ArrayList;

public class Ninja {
	
	// use static if the variable belongs to Ninja
	private static Integer count = 0;
	private String name;
	private Integer dailyCalorieLimit;
	private Integer todaysCalories;
	private ArrayList<Food> stomach;
	
	public Ninja() {
		this.name = "Goemon";
		this.dailyCalorieLimit = 2000;
		todaysCalories = 0;
		stomach = new ArrayList<Food>();
		count++;
	}
	
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
	
	public static Integer getCount() {
		return Ninja.count;
	}
	
	public static void setCount(Integer count) {
		// should do nothing
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getDailyCalorieLimit() {
		return dailyCalorieLimit;
	}

	public void setDailyCalorieLimit(Integer dailyCalorieLimit) {
		this.dailyCalorieLimit = dailyCalorieLimit;
	}

	public Integer getTodaysCalories() {
		return todaysCalories;
	}

	public void setTodaysCalories(Integer todaysCalories) {
		this.todaysCalories = todaysCalories;
	}

	public ArrayList<Food> getStomach() {
		return stomach;
	}

	public void setStomach(ArrayList<Food> stomach) {
		this.stomach = stomach;
	}
	

}
