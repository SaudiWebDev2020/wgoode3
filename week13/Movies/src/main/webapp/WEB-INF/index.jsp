<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Movie Pandas</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container">
    <form:form action="/create" method="post" modelAttribute="newCast">
    	<div class="form-group">
    		<label>Movie Role</label>
    		<form:input path="role" class="form-control" />
    		<form:errors path="role" class="text-danger" />
    	</div>
    	<div class="form-group">
    		<label>Actor / Actress</label>
    		<form:input path="actorName" class="form-control" list="actors" />
    		<form:errors path="actorName" class="text-danger"  />
    		<datalist id="actors">
    			<c:forEach items="${allActors}" var="a">
    				<option value="${a.name}" />
    			</c:forEach>
    		</datalist>
    	</div>
    	<div class="form-group">
    		<label>Movie Title</label>
    		<form:input path="movieTitle" class="form-control" list="movies" />
    		<form:errors path="movieTitle" class="text-danger"  />
    		<datalist id="movies">
    			<c:forEach items="${allMovies}" var="m">
    				<option value="${m.title}" />
    			</c:forEach>
    		</datalist>
    	</div>
    	<input type="submit" value="Add" class="btn btn-lg btn-block btn-outline-danger" /> 
    </form:form>
    
    <table class="table table-striped mt-5">
    	<tr>
    		<th>Actor / Actress</th>
    		<th>Movie</th>
    		<th>Role</th>
    	</tr>
    	<c:forEach items="${allCasts}" var="c" >
    		<tr>
    			<td>${c.actor.name}</td>
    			<td>${c.movie.title}</td>
    			<td>${c.role}</td>
    		</tr>
    	</c:forEach>
    </table>
  </div>
</body>
</html>