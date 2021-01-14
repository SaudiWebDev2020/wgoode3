# Spring Boot Checklist

### Step 0 - Starting the project

Inside of `Package Explorer` right click -> new -> Spring Starter Project

Inside of the Pop-up we need to:

* Create a unique project name, example `Pandas`
* Make sure the type is `Maven`
* Set Java Version to `11`
* Set Packaging to `War`
* Group name convention... `com.username` <-- your username here
* Package name convention... `com.username.pandas` <-- your project name here!

Once these are set choose `Next`

Select/Search for the following packages:

* Spring Boot DevTools
* Spring Web

Last, click `Finish`

### Step 1 - pom.xml

Add these to the `<dependencies></dependencies>` tag in the file and save it

```xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
</dependency>
<dependency>
    <groupId>org.webjars</groupId>
    <artifactId>bootstrap</artifactId>
    <version>4.5.0</version>
</dependency>
<dependency>
    <groupId>org.webjars.bower</groupId>
    <artifactId>jquery</artifactId>
    <version>3.5.1</version>
</dependency>
```

### Step 2 - Create our first View

Create the folder `src/main/webapp/WEB-INF`
Create the file `src/main/webapp/WEB-INF/index.jsp`

Add this code in `index.jsp`

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pandas</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container">
    <h1>Hello World!</h1>
  </div>
</body>
</html>
```

Next add this line to the `src/main/resources/application.properties` file

```
spring.datasource.url=jdbc:mysql://localhost:3306/PandaDB?useUnicode=yes&characterEncoding=UTF-8&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update

spring.mvc.view.prefix=/WEB-INF/
```

#### Important!

Don't forget to create the `PandaDB` schema in MySQL.

(if you want to do this from the command line you can access the MySQL shell this way)

```sh
mysql -u root -p
# when prompted enter the password: root
```

```sql
CREATE SCHEMA PandaDB;
exit;
```

### Step 3 - Make out Models

Go to `/src/main/java/` and add a new package inside your project example `com.username.pandas.models`

Inside the new `...models` package create a new `Java Class` called `Note`

In our `Note.java` file add the following...

```java
package com.username.pandas.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="notes")
public class Note {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Your note cannot be blank")
	private String text;
	
	public Note() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
```

### Step 4 - Make out Repositories

Go to `/src/main/java/` and add a new package inside your project example `com.username.pandas.repositories`

Inside the new `...repositories` package create a new `Java Interface` called `NoteRepository`

In our `NoteRepository.java` file add the following...

```java
package com.username.pandas.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.username.pandas.models.Note;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {}
```

### Step 5 - Make our Services

Go to `/src/main/java/` and add a new package inside your project example `com.username.pandas.services`

Inside the new `...services` package create a new `Java Class` called `NoteService`

In our `NoteService.java` file add the following...

```java
package com.username.pandas.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.username.pandass.models.Note;
import com.username.pandas.repositories.NoteRepository;

@Service
public class NoteService {

	private NoteRepository noteRepo;
	
	public NoteService(NoteRepository noteRepo) {
		this.noteRepo = noteRepo;
	}
	
	public ArrayList<Note> getAll() {
		return (ArrayList<Note>) noteRepo.findAll();
	}
	
	public Note create(Note newNote) {
		return noteRepo.save(newNote);
	}
	
}
```

### Step 6 - Make our Controllers

Go to `/src/main/java/` and add a new package inside your project example `com.username.pandas.controllers`

Inside the new `...controlers` package create a new `Java Class` called `HomeController`

In our `HomeController.java` file add the following...

```java
package com.username.pandas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.username.pandas.models.Note;
import com.username.pandas.services.NoteService;

@Controller
public class HomeController {

	private NoteService noteServ;
	
	public HomeController(NoteService noteServ) {
		this.noteServ = noteServ;
	}
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newNote", new Note()); // binds to form helper in index.jsp
		model.addAttribute("allNotes", noteServ.getAll()); // displays all notes 
		return "index.jsp";
	}
	
	@PostMapping("/note")
	public String create(@Valid @ModelAttribute("newNote") Note newNote, 
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			// still display notes if validation error
			model.addAttribute("allNotes", noteServ.getAll()); 
			return "index.jsp";
		}
		// otherwise create a note and redirect back
		noteServ.create(newNote);
		return "redirect:/";
	}
	
}
```

### Step 7 - add to index.jsp

Inside of `index.jsp` add the following...

```html
<ul class="list-group">
    	<li class="list-group-item">Notes</li>
    	<c:forEach items="${allNotes}" var="note">
    		<li class="list-group-item">${note.text}</li>
    	</c:forEach>
    	<li class="list-group-item">
    		<form:form action="/note" method="post" modelAttribute="newNote">
    			<form:input path="text" placeholder="Your note here..."/>
    			<form:errors path="text" class="text-danger" />
    			<input type="submit" value="Add Note" class="btn btn-sm btn-primary" />
    		</form:form>
    	</li>
    </ul>
```

### Step 8 - running the server

Right click on the `PandasApplication.java` -> run as -> Spring Boot App

Check our server at `http://localhost:8080`
