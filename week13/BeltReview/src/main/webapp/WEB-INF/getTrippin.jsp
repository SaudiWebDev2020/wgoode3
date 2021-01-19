<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

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
			<div class="col-sm-4">
				<div class="card">
					<div class="card-header bg-dark text-light">
						<h3 class="my-3">${theTrip.name}</h3>
					</div>
					<div class="card-body">
						<p>
							Start:
							<fmt:formatDate type="date" value="${theTrip.start}" />
						</p>
						<p>
							End:
							<fmt:formatDate type="date" value="${theTrip.end}" />
						</p>
						<p>Planner: ${theTrip.planner.firstName}
							${theTrip.planner.lastName}</p>
					</div>
				</div>
			</div>
			<div class="col-sm-8">
				<h3>Itenerary</h3>
				<c:forEach items="${theTrip.intenerary}" var="a">
					<div class="card mt-3">
						<div class="card-header">${a.city},${a.country}</div>
						<div class="card-body">
							<p>
								Start:
								<fmt:formatDate type="date" value="${a.start}" />
								/ End:
								<fmt:formatDate type="date" value="${a.end}" />
							</p>
							<p style="white-space: pre;">${a.description}</p>
						</div>
					</div>
				</c:forEach>

				<form:form action="/trips/${theTrip.id}/add_activity" method="post" modelAttribute="newAct">
					<div class="row mt-3">
						<div class="col-sm-12 mb-3">
							<label>Description:</label>
							<form:textarea path="description" class="form-control" />
							<form:errors path="description" class="text-danger" />
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label>City / Area:</label>
								<form:input path="city" class="form-control" />
								<form:errors path="city" class="text-danger" />
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label>Country:</label>
								<form:input path="country" class="form-control" />
								<form:errors path="country" class="text-danger" />
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label>Start:</label>
								<form:input type="date" path="start" class="form-control" />
								<form:errors path="start" class="text-danger" />
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label>End:</label>
								<form:input type="date" path="end" class="form-control" />
								<form:errors path="end" class="text-danger" />
							</div>
						</div>
					</div>
					<input type="submit" value="Add activity" class="btn btn-primary" />
				</form:form>

			</div>
		</div>
	</div>
</body>
</html>