<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JavaStore</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<h1>Java Store</h1>
		</div>

		<div class="row">
			<div class="col-sm-8">
				<c:forEach items="${products}" var="product">
					<div class="card mb-3">
						<div class="card-header bg-dark text-light">${product.name}</div>
						<div class="card-body">
							<h4>$${String.format("%1$,.2f", product.price)}</h4>
							<h4>
								<c:forEach items="${product.categories}" var="cat">
									<span class="badge badge-primary badge-pill">
										${cat.name}
										<a href="/remove/${product.id}/${cat.id}" class="close ml-2 text-light">&times;</a>
									</span>
								</c:forEach>
							</h4>
						</div>
					</div>
				</c:forEach>
			</div>
			<div class="col-sm-4">
				<div class="card">
					<div class="card-header bg-dark text-light">Add Product</div>
					<div class="card-body">
						<form:form action="/product" method="post"
							modelAttribute="newProduct">
							<div class="form-group">
								<label>Product Name:</label>
								<form:input path="name" class="form-control" />
								<form:errors path="name" class="text-danger" />
							</div>
							<div class="form-group">
								<label>Product Price:</label>
								<form:input path="price" type="number" step="0.01" class="form-control" />
								<form:errors path="price" class="text-danger" />
							</div>
							<div class="form-group">
								<label>Categories:</label>
								<form:textarea path="categoryInput" class="form-control" />
								<small class="form-text text-muted">Seperate each
									category with a ",".</small>
								<form:errors path="categoryInput" class="text-danger" />
							</div>
							<input type="submit" value="Create Product"
								class="btn btn-primary" />
						</form:form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>