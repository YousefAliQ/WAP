package edu.miu.cs472;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.*;
import com.google.gson.GsonBuilder;

public class PetsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        if (request.getParameter("animal").equals("kitty")) {
            List kitties = new ArrayList<String>(Arrays.asList("kitty1", "kitty2", "kitty3", "kitty4"));

            Animals animals = new Animals("pets",kitties);
            GsonBuilder builder = new GsonBuilder();
            Gson gson = builder.create();
            out.print(gson.toJson(animals));
        } else {
            List puppies = new ArrayList<String>(Arrays.asList("puppy1", "puppy2", "puppy3", "puppy4"));
            Animals animals = new Animals("pets",puppies);
            GsonBuilder builder = new GsonBuilder();
            Gson gson = builder.create();
            out.print(gson.toJson(animals));
        }
    }
}

class Animals {

    String tag = "pets";
    List arrayList = null;
    public Animals(String tag, List arrayList){
        this.arrayList = arrayList;
        this.tag = tag;
    }


}

