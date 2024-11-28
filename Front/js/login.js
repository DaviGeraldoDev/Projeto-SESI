function Login(){
    var login = document.getElementById("login")

    if (login.value == "Mariane Nutri"){
        window.location.href = "Home_mariana.html";
    }
    else{
        window.location.href = "Menu.html";
    }
}