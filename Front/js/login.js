window.sessionStorage.removeItem('JWT');

$(document).ready(function() {
    $('#Botao').click(  function () {
        var login = document.getElementById("login").value;
        localStorage.setItem('nome', login);
        var senha = document.getElementById("senha").value;

        var xhr = new XMLHttpRequest();
        var url = "http://127.0.0.1:5000/cliente/login";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                window.sessionStorage.setItem('JWT',xhr.responseText);
                window.location.href = "Menu.html";

            }if(xhr.readyState === 4 && xhr.status === 401){
              alert("Usuário ou senha incorretos");
            }
        };
        var data = JSON.stringify(
            {
                "login": login, 
                "senha": senha
            }
         );
        xhr.send(data);    

    });
});       