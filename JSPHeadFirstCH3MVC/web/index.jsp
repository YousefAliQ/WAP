<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 30/01/2020
  Time: 20:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <h1 align="center"> Juice Selection Page</h1>
  <form method="POST"
        action="SelectJuice.do">
    <p>Select Juice characteristics</p>
    Color:
    <select name="color" size="1">
      <option value="orange">Orange</option>
      <option value="lemon">lemon</option>
    </select>
    <br><br>
    <center>
      <input type = "SUBMIT">
    </center>
  </form>
  </body>
</html>
