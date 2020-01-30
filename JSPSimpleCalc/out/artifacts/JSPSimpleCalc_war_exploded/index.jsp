<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 30/01/2020
  Time: 14:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Simple Calc</title>
  </head>
  <body>

  <h1>Simple Calculator</h1>
  <hr>

  <form action = "simpleCalc" method='post'>
  <div>
    <span><input type="number" id="sum1" name = "sum1"/></span>
    <label>+</label>
    <span><input type="number" id="sum2" name = "sum2"/></span>
    <label>=</label>
    <span><input type="number" id="sumResult"/></span>
  </div>
  <br>
  <div>
    <span><input type="number" id="mul1" name = "mul1"/></span>
    <label>*</label>
    <span><input type="number" id="mul2" name = "mul2"/></span>
    <label>=</label>
    <span><input type="number" id="mulResult"/></span>
  </div>
    <br>
    <input type='submit' value='Calculate'/>
  </form>
  </body>
</html>
