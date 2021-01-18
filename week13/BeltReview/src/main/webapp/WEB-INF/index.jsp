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
		<div class="row my-5">
			<div class="col-sm-8">
				<div class="card">
					<div class="card-header bg-dark text-light">Register</div>
					<div class="card-body">
						<form:form action="/register" method="post"
							modelAttribute="newUser">
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label>First Name:</label>
										<form:input path="firstName" class="form-control" />
										<form:errors path="firstName" class="text-danger" />
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Last Name:</label>
										<form:input path="lastName" class="form-control" />
										<form:errors path="lastName" class="text-danger" />
									</div>
								</div>
								<div class="col-sm-12">
									<div class="form-group">
										<label>Email:</label>
										<form:input path="email" class="form-control" />
										<form:errors path="email" class="text-danger" />
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Password:</label>
										<form:password path="password" class="form-control" />
										<form:errors path="password" class="text-danger" />
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Confirm Password:</label>
										<form:password path="confirm" class="form-control" />
										<form:errors path="confirm" class="text-danger" />
									</div>
								</div>
							</div>
							<input type="submit" value="Register"
								class="btn btn-block btn-primary" />
						</form:form>
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="card">
					<div class="card-header bg-dark text-light">Login</div>
					<div class="card-body">
						<form:form action="/login" method="post" modelAttribute="newLogin">
							<div class="form-group">
								<label>Email:</label>
								<form:input path="email" class="form-control" />
								<form:errors path="email" class="text-danger" />
							</div>
							<div class="form-group">
								<label>Password:</label>
								<form:password path="password" class="form-control" />
								<form:errors path="password" class="text-danger" />
							</div>
							<input type="submit" value="Login" class="btn btn-block btn-info" />
						</form:form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>