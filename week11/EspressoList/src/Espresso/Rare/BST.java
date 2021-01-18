package Espresso.Rare;

public class BST {
	
	private BTNode root;
	
	public void Add(Integer value) {
		BTNode acorn = new BTNode(value);
		if(root == null) {
			root = acorn;
			return;
		}
		BTNode squirrel = root;
		while(squirrel != null) {
			if(value < squirrel.value) {
				if(squirrel.left == null) {
					squirrel.left = acorn;
					return;
				} else {
					squirrel = squirrel.left;
				}
			} else {
				if(squirrel.right == null) {
					squirrel.right = acorn;
					return;
				} else {
					squirrel = squirrel.right;
				}
			}
		}
	}
	
	public int Size() {
		return Size(root);
	}
	
	public int Size(BTNode squirrel) {
		if(squirrel == null) {
			return 0;
		} else {
//			System.out.print(squirrel.value + " ");
			return 1 + Size(squirrel.left) + Size(squirrel.right);
		}
	}
	

}
