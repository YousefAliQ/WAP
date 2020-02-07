<%--<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix='c' uri='http://java.sun.com/jsp/jstl/core' %>--%>
<html>
    <head>
        <title>Party Planner</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="resources/js/guests.js"></script>
    </head>
    <body>
            <p>Enter a name to be added to the guest list </p>
            <p>First <input id='first' type='text' name='first'  /></p> 
            <p>Last <input id='last' type='text' name='last'  /></p> 
            <p><input id='send' type='button' value='Send'  /></p>
            <p>Names so far</p>
            <table>
            <div id='guestList' >
              <%--  <c:forEach var="guest" items="${guestList}" >
                    <tr>
                        <td>${guest.first}</td>
                        <td>${guest.last}</td>
                    </tr>
                </c:forEach>--%>
            </div>
            </table>
    </body>
</html>





