<%--
  Created by IntelliJ IDEA.
  User: yousef
  Date: 04/02/2020
  Time: 17:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Pet Gallery</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="ajaxpets.js"></script>
</head>
<body>
<div>
  <label><input type="radio" name="animal" id="kitties" /> Kitties</label>
  <label><input type="radio" name="animal" id="puppies" /> Puppies</label>
</div>
<div id="pictures">
</div>
</body>
</html>