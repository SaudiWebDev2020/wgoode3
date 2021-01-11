package Espresso.Common;

public class SLNode<T> {

	protected T value;
	public SLNode<T> next;
	
	public SLNode(T value) {
		this.value = value;
	}
	
}
