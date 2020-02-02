<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 02/02/2020
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Number Quiz (JSP Edition)</title>
</head>
<html>
<head>
<body onload='javascript:myform.txtAnswer.focus()'>
<form name='myform' method='post'>
    <h3>Congrats, NumberQuiz is over!</h3>
    <p>Your score is ${quiz.score}.</p>

    <br>
    <a href=Quiz>Restart!</a>
</form>
</body>

</html>
