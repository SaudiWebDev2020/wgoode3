package Hungry;

public class HungryApplication {

	public static void main(String[] args) {
		Buffet jimmy = new Buffet();
//		System.out.println(jimmy.menu);
		Ninja denys = new Ninja("Denys", 2300);
		for(int i=0; i<6; i++) {	
			try {
				denys.eat(jimmy.serve());				
			} catch (Error e) {
				break;
			}
		}
		System.out.println(denys.getTodaysCalories());
//		denys.eat(jimmy.serve());
		Ninja jason = new Samurai("Jason", 2500);
		Samurai jack = (Samurai) jason;
		jack.eat(jimmy.serve(), "Breakfast");
		jack.eat(jimmy.serve(), "Lunch");
		jack.eat(jimmy.serve(), "Dinner");
		jack.eat(jimmy.serve(), "Fourth Meal");
		System.out.println(jack.getTodaysMeals());
		System.out.println(Ninja.getCount());
		jack.eat(jimmy.serve(), "Fourth Meal");
	}
	
}
