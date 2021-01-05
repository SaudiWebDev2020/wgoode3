package ArtSupplies.Abstracts;

public abstract class Art {

	private String title;
	private String author;
	private Integer year;
	private String description;
	
	public Art() {}
	
	public Art(String title, String author, Integer year, String description) {
		this.title = title;
		this.author = author;
		this.year = year;
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String toString() {
		return "<" + title + " by " + author + " />";
	}
	
//	public void exhibit() {}
	
}
