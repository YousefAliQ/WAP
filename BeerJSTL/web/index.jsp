<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 06/02/2020
  Time: 22:40
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ct" uri="/WEB-INF/custom.tld" %>
<%@page import="java.util.*"%>
<%@ page import="java.text.SimpleDateFormat" %>
<html>
<head>
  <title>Beer Recommendations JSP</title>
</head>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>
  <c:forEach var="item" items="${styles}">
    <br/>Try: ${item}
  </c:forEach>

<br>
  <ct:CurrentDateTime />

</p>
</body>
</html>