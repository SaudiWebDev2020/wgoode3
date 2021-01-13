package Espresso.Uncommon;

public class DLNode<T> {

	public T value;
	public DLNode<T> next;
	public DLNode<T> prev;
	
	public DLNode(T value) {
		this.value = value;
	}
	
}
