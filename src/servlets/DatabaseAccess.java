package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DatabaseAccess")
public class DatabaseAccess extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	public static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	public static final String DB_URL="jdbc:mysql://localhost/TEST";
	public static final String USER = "root";
	public static final String PASSWORD = "longmace123";
	
	public Statement stmt;
	public Connection conn;
	
 
    public DatabaseAccess() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String title = "Database Result";
		String docType = 
				"<!doctype html public \"-//w3c//dtd html 4.0 " +
				"transitional//en\">\n";
				out.println(docType + 
				"<html>\n" +
				"<head><title>" + title + "</title></head>\n" +
				"<body bgcolor=\"#f0f0f0\">\n" +
				"<h1 align=\"center\">" + title + "</h1>\n");
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
					stmt = conn.createStatement();
					String sql;
					sql = "SELECT id, first, last, age FROM Employees";
					ResultSet rs = stmt.executeQuery(sql);
					
					while (rs.next()) {
						int id = rs.getInt("id");
						int age = rs.getInt("age");
						String first = rs.getString("first");
						String last = rs.getString("last");
						
						out.println("ID: " + id + "<br>");
						out.println(", Age: " + age + "<br>");
						out.println(", First: " + first + "<br>");
						out.println(", Last: " + last + "<br>");
					}
					out.println("</body><html>");
					
					rs.close();
					stmt.close();
					conn.close();
				} catch (SQLException se) {
					se.printStackTrace();
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					try {
						if (stmt != null)
							stmt.close();
					} catch (SQLException se2) {
						
					}
					try {
						if (conn != null) 
							conn.close();
						} catch (SQLException se) {
							se.printStackTrace();
						}
				}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
