package Espresso.Uncommon;

public class DLL<T> {

	public DLNode<T> head;
	public DLNode<T> tail;
	
	public DLL() {}
	
	public void push(T value) {
		DLNode<T> temp = new DLNode<T>(value);
		if(head == null) {
			head = temp;
			tail = temp;
		} else {
			temp.prev = tail;
			tail.next = temp;
			tail = tail.next;
		}
	}
	
	public T pop() {
		T val = null;
		if(tail != null) {
			val = tail.value;
			tail = tail.prev;
			tail.next.prev = null;
			tail.next = null;
		}
		return val;
	}
	
	public void addFront(T value) {
		DLNode<T> temp = new DLNode<T>(value);
		if(head == null) {
			head = temp;
			tail = temp;
		} else {
			temp.next = head;
			head.prev = temp;
			head = head.prev;
		}
	}
	
	public T remFront() {
		T val = null;
		if(head != null) {
			val = head.value;
			head = head.next;
			head.prev.next = null;
			head.prev = null;
		}
		return val;
	}
	
	public void reverse() {
		DLNode<T> runner = head;
		DLNode<T> backward = tail;
		while(runner != backward && runner.prev != backward) {
			T temp = runner.value;
			runner.value = backward.value;
			backward.value = temp;
			runner = runner.next;
			backward = backward.prev;
		}
	}
	
	public String toString() {
		String output = "[";
		DLNode<T> runner = head;
		while(runner.next != null) {
			output += runner.value + ", ";
			runner = runner.next;
		}
		return output + runner.value + "]";
	}
	
}
