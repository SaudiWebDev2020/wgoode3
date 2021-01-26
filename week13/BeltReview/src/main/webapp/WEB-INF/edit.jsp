<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>YoloTrips</title>
<link rel="stylesheet"
	href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
<script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
<script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<a href="/logout" class="btn btn-danger">Logout</a> 
		<a href="/home" class="btn btn-info">Back to home!</a>
		<form:form action="/trip/${existingTrip.id}/update" method="post" modelAttribute="existingTrip">
			<div class="row my-5">
				<div class="col-sm-12">
					<h3>Overall Trip:</h3>
				</div>
				<div class="col-sm-12">
					<div class="form-group">
						<label>Trip Name:</label>
						<form:input path="name" class="form-control" />
						<form:errors path="name" class="text-danger" />
					</div>
				</div>
				<div class="col-sm-6">
					<div class="form-group">
						<label>Overall Start:</label>
						<form:input type="date" path="start" class="form-control" />
						<form:errors path="start" class="text-danger" />
					</div>
				</div>
				<div class="col-sm-6">
					<div class="form-group">
						<label>Overall End:</label>
						<form:input type="date" path="end" class="form-control" />
						<form:errors path="end" class="text-danger" />
					</div>
				</div>
			</div>
			<input type="submit" value="Update Trip" class="btn btn-primary" />
		</form:form>


	</div>
</body>
</html>