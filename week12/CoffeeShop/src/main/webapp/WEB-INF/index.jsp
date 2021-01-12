<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>   

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CoffeeShop</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container">
  	<div class="jumbotron">
	    <h1>Java Shop</h1>
  	</div>
  	<form action="/search" class="my-3">
  		<input type="text" name="q" />
  		<input type="submit" value="Search" />
  	</form>
  	<div class="row">
  		<div class="col-sm-8">  		
		  	<form:form action="/shop" method="post" modelAttribute="shop">
		  		<div class="form-group">
		  			<label>Shop Name:</label>
		  			<form:input path="name" class="form-control" />
		  			<form:errors path="name" class="text-danger" />
		  		</div>
		  		<div class="form-group">
		  			<label>Shop Location:</label>
		  			<form:input path="location" class="form-control" />
		  			<form:errors path="location" class="text-danger" />
		  		</div>
		  		<div class="form-group">
		  			<label>Description:</label>
		  			<form:textarea path="description" class="form-control"/>
		  			<form:errors path="description" class="text-danger" />
		  		</div>
		  		<div class="form-group">
		  			<label>Date Founded:</label>
		  			<form:input path="founded" type="date" class="form-control" />
		  			<form:errors path="founded" class="text-danger" />
		  		</div>
		  		<div class="row">
		  			<div class="col-sm-6">
						<div class="form-group">
							<label>Open Time:</label>
							<form:input path="open" type="time" class="form-control" />
						</div>
					</div>
		  			<div class="col-sm-6">
		  				<div class="form-group">
							<label>Close Time:</label>
							<form:input path="close" type="time" class="form-control" />
						</div>
		  			</div>
		  		</div>
		  		<input type="submit" value="Add Shop" class="btn btn-dark" />
		  	</form:form>
  		</div>
  		<div class="col-sm-4">
  			<ul class="list-group">
  				<li class="list-group-item bg-dark text-light">Java Shops:</li>
  				<c:forEach items="${shops}" var="s">
  					<li class="list-group-item">
  						${s.name}
  						<a href="/shop/${s.id}/edit" class="btn btn-sm btn-outline-info float-right">Edit</a>
  						<a href="/shop/${s.id}" class="btn btn-sm btn-outline-primary float-right mr-2">View</a>
  					</li>
  				</c:forEach>
  			</ul>
  		</div>
  	</div>
  </div>
</body>
</html>