package com.google.sps.servlets;

import java.util.ArrayList;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        //response.getWriter().println("<h1>Hello world!</h1>");
        String messages = getMessages();
        response.getWriter().println(messages);
    }

    public String getMessages(){
        ArrayList<String> messages = new ArrayList<String>();
        messages.add("I have a husky named Max.");
        messages.add("I like to listen to salas and cumbias.");
        messages.add("My family is from a small town in Puebla, Mexico called San Baltazar.");

        Gson gson = new Gson();
        String json = gson.toJson(messages);
        return json;
    }
}
