package Espresso.Epic;

public class Trie {

	private TrieNode root;
	
	public Trie() {
		root = new TrieNode("");
	}
	
	public void insert(String word) {
		
		String temp = "";
		TrieNode runner = root;
		
		for(int i=0; i<word.length(); i++) {
			temp += word.charAt(i);
			if(!runner.children.containsKey(word.charAt(i))) {
				runner.children.put(word.charAt(i), new TrieNode(temp));
			}
			runner = runner.children.get(word.charAt(i));
		}
		runner.isWord = true;
		
	}
	
}
