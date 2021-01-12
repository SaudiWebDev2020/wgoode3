<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
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
		<div class="row">
			<div class="col-sm-6 offset-sm-3">
				<div class="card">
					<div class="card-header bg-dark text-light">${shop.name}</div>
					<div class="card-body">
						<p>Location: ${shop.location}</p>
						<p>Description: ${shop.description}</p>
						<p>
							Opens:
							<fmt:formatDate type="time" value="${shop.open}" />
							| Closes:
							<fmt:formatDate type="time" value="${shop.close}" />
						</p>
						<p>Number of items available: ${shop.menu.size()}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="card mt-3">
			<div class="card-header bg-dark text-light">Menu</div>
			<div class="card-body">
				<div class="row">
					<div class="col-sm-6">
						<table class="table">
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Calories</th>
							</tr>
							<c:forEach items="${shop.menu}" var="drink">
								<tr>
									<td>${drink.name}</td>
									<td>$${String.format("%1$,.2f", drink.price)}</td>
									<td>${drink.calories}</td>
								</tr>
							</c:forEach>
						</table>
						
					</div>
					<div class="col-sm-6">
						<form:form action="/shop/${shop.id}/adddrink" method="post"
							modelAttribute="newDrink">
							<input type="hidden" name="shop" value="${shop.id}" />
							<div class="form-group">
								<label>Drink Name:</label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
							<div class="form-group">
								<label>Drink Price:</label>
								<form:input path="price" type="number" step="0.01"
									class="form-control" />
								<form:errors path="price" class="text-danger" />
							</div>
							<div class="form-group">
								<label>Drink Calories:</label>
								<form:input path="calories" type="number" class="form-control" />
								<form:errors path="calories" class="text-danger" />
							</div>
							<input type="submit" value="Add Drink" class="btn btn-success" />
						</form:form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>