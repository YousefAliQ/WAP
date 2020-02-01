<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 01/02/2020
  Time: 10:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> Introduction to JSP demo – postback page </title>
</head>
<body>
<p>This is the postback message</p>

<%! int count = 0; %>
The count is now:
<%= ++count %>
<%-- This is a jsp scriptlet that increments the count --%>
<!-- This is an html comment inserted by the increment comment -->
<% count = count * 10; %>
The count is now:
<%= count %>

</body>
</html>
