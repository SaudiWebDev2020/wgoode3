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
		System.out.println(denys.todaysCalories);
//		denys.eat(jimmy.serve());
		Ninja will = new Ninja("Will", 2000);
		System.out.println(Ninja.count);
	}
	
}
