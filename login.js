function saveData() {
    let  email, password
    email = document.getElementById("email").value
    password = document.getElementById("password").value

    let record = new Array();
    record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (record.some((v) => {
        return v.email==email && v.password == password
    })) {
        alert("Login Successfull")
        let current = record.filter((v)=>{
            return v.email==email && v.password==password
        })[0]

        localStorage.setItem("name",current.name)
        localStorage.setItem("email",current.email)
        window.location.href = "profile.html"


    }
    else {
        alert("login Fail")
    }
}