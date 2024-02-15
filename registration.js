function saveData() {
    let name, email, password
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value

    let record = new Array();
    record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (record.some((v) => {
        return v.email == email
    })) {
        alert("Alredy Registre email Enter Another One")
    }
    else {
        record.push({
            "name": name,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(record))
        window.location.href = "login.html"
    }
}

