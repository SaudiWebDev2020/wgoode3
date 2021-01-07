# Spring Boot Checklist

### Step 0 - Starting the project

Inside of `Package Explorer` right click -> new -> Spring Starter Project

Inside of the Pop-up we need to:

* Create a unique project name `Pandas`
* Make sure the type is `Maven`
* Set Java Version to `11`
* Set Packaging to `War`
* Group name converion... `com.username`
* Package name convention... `com.username.Pandas` <-- your project name here!

Once these are set choose `Next`

Select/Search for the following packages:

* Spring Boot DevTools
* Spring Web

Last, click `Finish`

### Step 1 - pom.xml

Add these to the `<dependencies></dependencies>` tag in the file and save it

```xml
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
Creare the file `src/main/webapp/WEB-INF/index.jsp`

Add this code in `index.jsp`

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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
spring.mvc.view.prefix=/WEB-INF/
```

### Step 3 - Make our Controllers

Go to `/src/main/java/` and add a new package inside your project example `com.username.planets.controllers`

Inside the new `...controlers` package create a new `Java Class` called `HomeController`

In our `HomeController.java` file add the following...

```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping("/")
	public String index() {
		return "index.jsp";
	}

}
```

### Step 4 - running the server

Right click on the `PandasApplication.java` -> run as -> Spring Boot App

Check our server at `http://localhost:8080`