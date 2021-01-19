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
		<h1>Welcome ${user.firstName}!</h1>
		<a href="/logout" class="btn btn-danger">Logout</a> <a
			href="/trips/new" class="btn btn-info">Plan a new trip!</a>

		<table class="table table-striped my-5">
			<tr class="bg-dark text-light">
				<th>Trip Name</th>
				<th>Trip Location</th>
				<th>Planner</th>
				<th>Itenerary Size</th>
				<th>Dates</th>
				<th>Actions</th>
			</tr>
			<c:forEach items="${allTrips}" var="t">
				<tr>
					<td><a href="/trips/${t.id}">${t.name}</a></td>
					<td>${t.itenerary.get(0).country}</td>
					<td>${t.planner.firstName} ${t.planner.lastName}</td>
					<td>${t.itenerary.size()}</td>
					<td>Start: <fmt:formatDate type="date" value="${t.start}" />
						/ End: <fmt:formatDate type="date" value="${t.end}" />
					</td>
					<td>
						<c:if test="${user.id == t.planner.id}">
							<a href="#" class="btn btn-sm btn-outline-danger">Cancel</a>
						</c:if>
						<c:if test="${user.id != t.planner.id}">
							<c:if test="${t.isOnTrip(user.id)}">
								<a href="/trip/${t.id}/leave" class="btn btn-sm btn-outline-info">Leave</a>
							</c:if>
							<c:if test="${!t.isOnTrip(user.id)}">
								<a href="/trip/${t.id}/join" class="btn btn-sm btn-outline-primary">Join</a>
							</c:if>
						</c:if>
					</td>
				</tr>
			</c:forEach>
		</table>

	</div>
</body>
</html>