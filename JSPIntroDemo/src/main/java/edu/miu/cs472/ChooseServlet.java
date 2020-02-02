package edu.miu.cs472;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ChooseServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
        dispatch.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String choice = request.getParameter("radioJSPCool");
        if (choice != null) {
            System.out.println("choice= " + choice);
            if (choice.equals("1")) {
                request.setAttribute("jspCoolYes", "checked");
                request.setAttribute("jspCoolNo", "");
            } else {
                request.setAttribute("jspCoolYes", "");
                request.setAttribute("jspCoolNo", "checked");
            }
        } else
            System.out.println("No choice made");
        RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
        dispatch.forward(request, response);
    }
}
