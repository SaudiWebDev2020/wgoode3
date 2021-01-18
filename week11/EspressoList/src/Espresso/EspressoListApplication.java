package Espresso;

import Espresso.Common.SLL;
import Espresso.Rare.BST;
import Espresso.Uncommon.DLL;

public class EspressoListApplication {

	public static void main(String[] args) {
//		SLL<Integer> numbers = new SLL<Integer>();
//		numbers.yeet(1);
//		numbers.yeet(2);
//		numbers.yeet(3);
//		numbers.yeet(4);
//		numbers.yeet(5);
//		System.out.println(numbers);
//		Integer temp = numbers.yeet();
//		numbers.yeet();
//		numbers.yeet(temp);
//		System.out.println(numbers);
		
		SLL<String> groceries = new SLL<String>();
		groceries.yeet("Eggs");
		groceries.yeet("Tomatoes");
		groceries.yeet("Potatoes");
		groceries.yeet("Onion");
//		System.out.println(groceries);
//		System.out.println(groceries.size());
//		groceries.head.next.next.next.next = groceries.head.next;
//		System.out.println(groceries.hasLoop());

		DLL<Integer> list1 = new DLL<Integer>();
		list1.push(3);
		list1.push(8);
		list1.push(5);
//		System.out.println(list1);
		list1.addFront(1);
		list1.addFront(9);
		list1.addFront(4);
//		System.out.println(list1);
//		list1.pop();
//		System.out.println(list1);
//		list1.remFront();
//		System.out.println(list1);
//		list1.reverse();
//		System.out.println(list1);
		
		BST oak = new BST();
		oak.Add(100);
		oak.Add(200);
		oak.Add(150);
		oak.Add(400);
		oak.Add(70);
		oak.Add(30);
		oak.Add(90);
		System.out.println(oak.Size());
	}
	
}
