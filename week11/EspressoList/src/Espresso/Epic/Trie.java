package Espresso.Epic;

import java.util.ArrayList;
import java.util.Map;

// this is now a trie multiset!
public class Trie {

	private TrieNode root;

	public Trie() {
		root = new TrieNode("");
	}

	public void insert(String word) {

		String temp = "";
		TrieNode runner = root;

		for (int i = 0; i < word.length(); i++) {
			temp += word.charAt(i);
			if (!runner.children.containsKey(word.charAt(i))) {
				runner.children.put(word.charAt(i), new TrieNode(temp));
			}
			runner = runner.children.get(word.charAt(i));
		}
		runner.count++;

	}

	public void printWords() {
		printWords(root);
	}

	private void printWords(TrieNode current) {
		if (current.count > 0) {
			System.out.println(current.value + " " + current.count);
		}
		for (Map.Entry kvPair : current.children.entrySet()) {
			printWords((TrieNode) kvPair.getValue());
		}
	}
	
	public ArrayList<String> mostLikelyWords(String start) {
		ArrayList<String> results = new ArrayList<String>();
		// TODO - your code here
		return results;
	}

}
