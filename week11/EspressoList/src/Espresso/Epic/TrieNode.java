package Espresso.Epic;

import java.util.HashMap;

public class TrieNode {

	public String value;
	public HashMap<Character, TrieNode> children;
	public Boolean isWord;
	
	public TrieNode(String value) {
		this.value = value;
		children = new HashMap<Character, TrieNode> ();
	}
	
}
