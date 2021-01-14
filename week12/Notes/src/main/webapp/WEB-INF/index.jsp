<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pandas</title>
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container">
    <ul class="list-group">
    	<li class="list-group-item bg-dark text-light">Notes</li>
    	<c:forEach items="${allNotes}" var="note">
    		<li class="list-group-item">${note.text}</li>
    	</c:forEach>
    	<li class="list-group-item">
    		<form:form action="/note" method="post" modelAttribute="newNote">
    			<form:input path="text" placeholder="Your note here..."/>
    			<form:errors path="text" class="text-danger" />
    			<input type="submit" value="Add Note" class="btn btn-sm btn-primary" />
    		</form:form>
    	</li>
    </ul>
  </div>
</body>
</html>