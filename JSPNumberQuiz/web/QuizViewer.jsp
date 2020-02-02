<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 02/02/2020
  Time: 14:32
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
    <h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is ${quiz.score}.</p>
    <p>Attempt 0 / 3 </p>
    <p>Guess the next number in the sequence!</p>

    <p>[ ${question} <font style='color:red'><b> ? </b></font>]</p>
    <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
    <p><input type='submit' name='btnNext' value='Next' /><input type='submit' name='btnStart' value='Restart!' onclick="return confirm('Do you want to start over?')"/></p>
    <p style='color:red'></p>
    <p><input type='button' name='btnHint' value='Hint?' onclick="alert('PI')"/></p>
</form>
</body>

</html>
