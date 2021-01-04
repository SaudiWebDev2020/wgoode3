package Hungry;

import java.util.ArrayList;
import java.util.Random;

public class Buffet {
	
	public ArrayList<Food> menu;
	
	public Buffet() {
		menu = new ArrayList<Food>();
		menu.add(new Food("Onigiri", 200, false, false));
		menu.add(new Food("Buffalo Wings", 500, true, false));
		menu.add(new Food("Cheesecake", 800, false, true));
		menu.add(new Food("Kung Pao Tofu", 500, true, true));
		menu.add(new Food("Burger", 700, false, false));
	}

	public Food serve() {
		Random r = new Random();
		int randIndex = r.nextInt(menu.size());
		return menu.get(randIndex);
	}
	
}
