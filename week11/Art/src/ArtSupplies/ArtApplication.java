package ArtSupplies;

import java.util.ArrayList;
import java.util.Collections;

import ArtSupplies.Interfaces.BelongsInAMusuem;
import ArtSupplies.Models.Painting;
import ArtSupplies.Models.Sculpture;

public class ArtApplication {

	public static void main(String[] args) {
		ArrayList<BelongsInAMusuem> museum = new ArrayList<BelongsInAMusuem> ();
		Painting p1 = new Painting(
				"Mona Lisa", 
				"Leonardo diVinci", 
				1503, 
				"painting of a woman smiling", 
				"oil on canvas");
		Sculpture s1 = new Sculpture(
				"David",
				"Michaelangelo",
				1504,
				"a man standing",
				"marble",
				"it's very big");
		Painting p2 = new Painting(
				"Starry Night", 
				"Van Gogh", 
				1889, 
				"this might be what the sky looks like", 
				"oil on canvas");
		Painting p3 = new Painting(
				"Girl with Pearl Earing", 
				"Johannes Vermeer", 
				1665, 
				"just like what the title says", 
				"oil on canvas");
		museum.add(p1);
		museum.add(s1);
		museum.add(p2);
		museum.add(p3);
		// System.out.println(museum);
		// view the art in a random order!
		Collections.shuffle(museum);
		for(BelongsInAMusuem art : museum) {
			art.exhibit();
		}
	}
	
}
