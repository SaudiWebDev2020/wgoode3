package Hungry;

public class Food {

	public String name;
	public Integer calories;
	public Boolean isSpicy;
	public Boolean isSweet;
	
	public Food(String name, Integer calories, Boolean isSpicy, Boolean isSweet) {
		this.name = name;
		this.calories = calories;
		this.isSpicy = isSpicy;
		this.isSweet = isSweet;
	}
	
	public String toString() {
		String res = "Food:     " + name + "\n"
				+ "Calories: " + calories + " kcal\n"
				+ "Spicy:   " ;
		if(isSpicy) {
			res += " yes\n";
		} else {
			res += " no\n";
		}
		res += "Sweet:   ";
		if(isSweet) {
			res += " yes\n";
		} else {
			res += " no\n";
		}
		return res;
	}
	
}
