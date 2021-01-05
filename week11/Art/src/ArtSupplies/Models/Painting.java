package ArtSupplies.Models;

import ArtSupplies.Abstracts.Art;
import ArtSupplies.Interfaces.BelongsInAMusuem;

public class Painting extends Art implements BelongsInAMusuem {

	private String paintType;

	public Painting() {
		super();
	}

	public Painting(String title, String author, Integer year, String description, String paintType) {
		super(title, author, year, description);
		this.paintType = paintType;
	}

	public String getPaintType() {
		return paintType;
	}

	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}
	
	public void exhibit() {
		System.out.println("Painting");
		System.out.println("========================================");
		System.out.println("Title:       " + getTitle());
		System.out.println("Author:      " + getAuthor());
		System.out.println("Year:        " + getYear());
		System.out.println("Description: " + getDescription());
		System.out.println("Type:        " + paintType);
		System.out.println();
	}
	
}
