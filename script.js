
function login() {
    // Your login logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy authentication, replace with your logic
    if (username === "abhi" && password === "abhi") {
       
        window.location.href = "step1.html"; // Redirect to the main page
        // Prevent form submission
        return false;
    } else {
        alert("Login failed. Please check your username and password.");
        return false; // Prevent form submission
    }
}

