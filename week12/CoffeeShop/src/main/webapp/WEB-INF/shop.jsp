<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>

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
  	<div class="alert alert-info my-3">
  		You have submitted the form ${count} time(s)!
  	</div>
  	<div class="card">
  		<div class="card-header">New Shop</div>
  		<div class="card-body">
  			<p>Name: ${shop.name}</p>
  			<p>Location: ${shop.location}</p>
  			<p>Description: ${shop.description}</p>
  			<p>Opens: <fmt:formatDate type = "time" value = "${shop.open}" /> | 
  			Closes: <fmt:formatDate type = "time" value = "${shop.close}" /></p>
  			<a href="/" class="btn btn-info">Back</a>
  		</div>
  	</div>
  </div>
</body>
</html>