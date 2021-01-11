package Espresso.Common;

public class SLL<T> {

	public SLNode<T> head;
	private int length = 0;
	
	public SLL() {}
	
	// TODO - alternative constructor that accepts an array of values
	
	// internet Meme I'm so sorry
	// basically adds a value to the list
	public void yeet(T value) {
		SLNode<T> node = new SLNode<T>(value);
		if(head == null) {
			head = node;
		} else {
			SLNode<T> runner = head;
			while(runner.next != null) {
				runner = runner.next;
			}
			runner.next = node;
		}
		length++;
	}
	
	// basically yeets values out of the list
	public T yeet() {
		SLNode<T> runner = head;
		if(runner == null) {
			return null;
		}
		length--;
		if(runner.next == null) {
			T toReturn = runner.value;
			head = null;
			return toReturn;
		}
		while(runner.next.next != null) {
			runner = runner.next;
		}
		T toReturn = runner.next.value;
		runner.next = null;
		return toReturn;
	}
	
	public int size() {
		return length;
	}
	
	// basically a __repr__ method
	
	public String toString() {
		if(length == 0) {
			return "[ ]";
		}
		String res = "[";
		SLNode<T> runner = head;
		while(runner.next != null) {
//			System.out.println(runner.value + " ");
			res += runner.value + ", ";
			runner = runner.next;
		}
		return res + runner.value + "]";
	}
	
	public Boolean hasLoop() {
		if(head == null) {
			return false;
		} else if(head.next == null) {
			return false;
		} else {
			SLNode<T> walker = head;
			SLNode<T> runner = head.next;
			while(runner.next != null && runner != null) {
//				System.out.println(walker.value + " " + runner.value);
				if(walker == runner) {
					return true;
				}
				walker = walker.next;
				runner = runner.next.next;
			}
			return false;
		}
	}
	
}
