<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Planets</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<h1>${ title }</h1>
		</div>
		<ul class="list-group">
			<li class="list-group-item bg-dark text-light">Favorite Planets:</li>
			<c:forEach items="${ planets }" var="planet">
				<c:if test="${planet.charAt(0) == 'M'}">
					<li class="list-group-item"><span class="text-danger">${ planet }</span></li>
				</c:if>
				<c:if test="${planet.charAt(0) != 'M'}">
					<li class="list-group-item">${ planet }</li>
				</c:if>
			</c:forEach>
		</ul>
	</div>
</body>
</html>