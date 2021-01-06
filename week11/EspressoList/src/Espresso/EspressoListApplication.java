package Espresso;

import Espresso.Common.SLL;

public class EspressoListApplication {

	public static void main(String[] args) {
		SLL<Integer> numbers = new SLL<Integer>();
		numbers.yeet(1);
		numbers.yeet(2);
		numbers.yeet(3);
		numbers.yeet(4);
		numbers.yeet(5);
		System.out.println(numbers);
		Integer temp = numbers.yeet();
		numbers.yeet();
		numbers.yeet(temp);
		System.out.println(numbers);
		
		SLL<String> groceries = new SLL<String>();
		groceries.yeet("Eggs");
		groceries.yeet("Tomatoes");
		groceries.yeet("Potatoes");
		groceries.yeet("Onion");
		System.out.println(groceries);
		System.out.println(groceries.size());
	}
	
}
