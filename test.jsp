<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <title>Sign Up</title>
</head>
<body>
<%@page import="java.sql.*" %>
<%
      String s1 = request.getParameter("username");
      String s2 = request.getParameter("email");  
      String s3 = request.getParameter("password");
      String s4 = request.getParameter("confirmPassword");
      Class.forName("com.mysql.jdbc.Driver");
      Connection c=DriverManager.getConnection
        ("jdbc:mysql://localhost/TM","root","root");
      Statement s=c.createStatement();
   s.executeUpdate("INSERT INTO users (username, email, password, confirmPassword) VALUES ('" + s1 + "', '" + s2 + "', '" + s3 + "', '" + s4 + "')");
      out.println("Signup Successfully!");
      s.close();
      c.close();
%>
</body>
</html>