package ArtSupplies.Models;

import ArtSupplies.Abstracts.Art;
import ArtSupplies.Interfaces.BelongsInAMusuem;

public class Sculpture extends Art implements BelongsInAMusuem {

	private String medium;
	private String dimensions;
	
	public Sculpture() {
		super();
	}
	public Sculpture(String title, String author, Integer year, String description, String medium, String dimensions) {
		super(title, author, year, description);
		this.medium = medium;
		this.dimensions = dimensions;
	}
	
	public String getMedium() {
		return medium;
	}
	
	public void setMedium(String medium) {
		this.medium = medium;
	}
	
	public String getDimensions() {
		return dimensions;
	}
	
	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}
	
	public void exhibit() {
		System.out.println("Sculpture");
		System.out.println("========================================");
		System.out.println("Title:       " + getTitle());
		System.out.println("Author:      " + getAuthor());
		System.out.println("Year:        " + getYear());
		System.out.println("Description: " + getDescription());
		System.out.println("Medium:      " + medium);
		System.out.println("Dimensions:  " + dimensions);
		System.out.println();
	}
	
}
