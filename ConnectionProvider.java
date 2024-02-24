import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ConnectionProvider {
    // Adjust the database URL, username, and password based on your database
    // configuration
    private static final String DB_URL = "jdbc:mysql://localhost:3306/vc";
    private static final String USER = "root";
    private static final String PASSWORD = "root";

    public static Connection getCon() throws SQLException {
        return DriverManager.getConnection(DB_URL, USER, PASSWORD);
    }

    public static void registerUser(String username, String email, String password, String confirmPassword) {
        try (Connection con = getCon();
                PreparedStatement pst = con
                        .prepareStatement("INSERT INTO student (username, email, password) VALUES (?, ?, ?)")) {

            pst.setString(1, username);
            pst.setString(2, email);
            pst.setString(3, password);

            // Execute the query
            int rowsAffected = pst.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Registration successful");
                // Redirect or show the next page
            } else {
                System.out.println("Registration failed");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error occurred during registration");
        }
    }

    public static void main(String[] args) {
        // Get user input from wherever you have it (e.g., command line arguments or
        // other sources)
        String username = "testuser";
        String email = "test@example.com";
        String password = "testpassword";
        String confirmPassword = "testpassword";

        // Call the registerUser method with the provided input
        registerUser(username, email, password, confirmPassword);
    }
}
