package cs472.miu.edu;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SimpleCalcServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String sum1 = request.getParameter("sum1").trim();
        String sum2 = request.getParameter("sum2").trim();
        String mul1 = request.getParameter("mul1").trim();
        String mul2 = request.getParameter("mul2").trim();

        PrintWriter out = response.getWriter();
        // its not good practise to check the validate the form inputs on the server side. this is just for practising
        if (sum1.isEmpty() || sum2.isEmpty() || mul1.isEmpty() || mul2.isEmpty()){

            out.print("<html><head><title>Simple Calc</title></head><body>");
            out.print("<form method='post'>");
            out.print("<h1>Simple Calculator</h1>");

            out.print("<h3>Error! please fill the values</h3>");
            out.print("<hr><div> <span><input type=\"number\" id=\"sum1\" value= \"" + sum1 +"\" name = \"sum1\"/></span> <label> + </label> <span><input type=\"number\" id=\"sum2\" value= \""+ sum2 + "\" name = \"sum2\"/></span> <label> = </label>");
            out.print("<span><input type=\"number\" value= \""+ 0 + "\"  id=\"sumResult\"/>");
            out.print("</span> </div><br> <div><span><input type=\"number\" id=\"mul1\" value= \""+ mul1 + "\" name = \"mul1\"/></span><label> * </label> <span><input type=\"number\" id=\"mul2\" value= \""+ mul2 + "\" name = \"mul2\"/></span> <label> = </label>");
            out.print("<span><input type=\"number\" value= \""+ 0 + "\" id=\"mulResult\"/></span></div>");
            out.print("<br><input type='submit' value='Calculate'/>");
            out.print("</form>");
            out.print("</body></html>");

        }

        Double sum = Double.parseDouble(sum1) + Double.parseDouble(sum2);
        Double mul = Double.parseDouble(mul1) * Double.parseDouble(mul2);



        out.print("<html><head><title>Simple Calc</title></head><body>");
        out.print("<form method='post'>");
        out.print("<h1>Simple Calculator</h1>");

        out.print("<hr><div> <span><input type=\"number\" id=\"sum1\" value= \"" + sum1 +"\" name = \"sum1\"/></span> <label> + </label> <span><input type=\"number\" id=\"sum2\" value= \""+ sum2 + "\" name = \"sum2\"/></span> <label> = </label>");
        out.print("<span><input type=\"number\" value= \""+ sum + "\"  id=\"sumResult\"/>");
        out.print("</span> </div><br> <div><span><input type=\"number\" id=\"mul1\" value= \""+ mul1 + "\" name = \"mul1\"/></span><label> * </label> <span><input type=\"number\" id=\"mul2\" value= \""+ mul2 + "\" name = \"mul2\"/></span> <label> = </label>");
        out.print("<span><input type=\"number\" value= \""+ mul + "\" id=\"mulResult\"/></span></div>");
        out.print("<br><input type='submit' value='Calculate'/>");
        out.print("</form>");
        out.print("</body></html>");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



    }
}
