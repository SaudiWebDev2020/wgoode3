<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CoffeeShop</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<h1>Java Shop</h1>
		</div>

		<form action="/search" class="my-3">
			<input type="text" name="q" /> <input type="submit" value="Search" />
		</form>

		<table class="table">
			<tr>
				<th>Name</th>
				<th>Price</th>
				<th>Calories</th>
			</tr>
			<c:forEach items="${top3drinks}" var="drink">
				<tr>
					<td>${drink.name}</td>
					<td>$${String.format("%1$,.2f", drink.price)}</td>
					<td>${drink.calories}</td>
				</tr>
			</c:forEach>
		</table>
</body>
</html>