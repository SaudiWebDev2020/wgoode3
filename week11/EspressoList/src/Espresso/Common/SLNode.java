package Espresso.Common;

public class SLNode<T> {

	protected T value;
	protected SLNode<T> next;
	
	public SLNode(T value) {
		this.value = value;
	}
	
}
