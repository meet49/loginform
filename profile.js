function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email")
    window.location.href = "login.html"
}