package Implementation;

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
//		System.out.println("Hello World!");
		ArrayList<Object> myList = new ArrayList<Object>();
		myList.add("13");
		myList.add("hello world");
		myList.add(48);
		myList.add("Goodbye World");
		myList.add(-3);
		
		String allStrings = "";
		Integer total = 0;
		
		for(Object item : myList) {
			try {
				total += (Integer) item;				
			} catch (ClassCastException e) {
				System.out.println(e);
				allStrings += (String) item + "\n";
			}
		}
		
		System.out.println("The total is: " + total);
		System.out.println("The strings are:\n" + allStrings);
	}
	
}
