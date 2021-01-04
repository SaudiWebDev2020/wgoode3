package Hungry;

import java.util.HashMap;

public class Samurai extends Ninja {
	
	private HashMap<String, Food> todaysMeals;

	public Samurai() {
		super("Oda", 2400);
		todaysMeals = new HashMap<String, Food>();
	}
	
	public Samurai(String name, Integer limit) {
		super(name, limit);
		todaysMeals = new HashMap<String, Food>();
	}
	
	public void eat(Food item) {
		this.eat(item, "undefined");
	}
	
	public void eat(Food item, String whichMeal) {
		if(this.isFull()) {
			throw new Error(getName() + " is full exception!");
		}
		if(todaysMeals.containsKey(whichMeal)) {
			throw new Error(getName() + " already at a(n) " + whichMeal + "!");
		}
		System.out.println(getName()  + " is eating...\n" + item);
//		todaysCalories += item.calories;
		setTodaysCalories(getTodaysCalories() + item.calories);
		todaysMeals.put(whichMeal, item);
	}

	public HashMap<String, Food> getTodaysMeals() {
		return todaysMeals;
	}

	public void setTodaysMeals(HashMap<String, Food> todaysMeals) {
		this.todaysMeals = todaysMeals;
	}
	
	
	
}
