package edu.miu.cs472;

import javax.servlet.jsp.tagext.*;
import javax.servlet.jsp.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTime extends SimpleTagSupport {

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();

        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        out.println("Current Date: " + ft.format(dNow));
    }
}