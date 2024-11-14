$('#bt_confirmar').click(  function () {
    var vou_comer = document.getElementsByClassName("refeicaoAtiva")
    var n_vou_comer = document.getElementsByClassName("refeicaoAtiva refeicaoInativa")

    console.log(vou_comer)
    console.log(n_vou_comer)

    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:5000/cliente/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (login == "Mariane Nutri"){
                window.sessionStorage.setItem('JWT',xhr.responseText);
                window.location.href = "Home_mariana.html";
            }

            else{
                window.sessionStorage.setItem('JWT',xhr.responseText);
                window.location.href = "Menu.html";
            }

        }if(xhr.readyState === 4 && xhr.status === 401){
          alert("Usuário ou senha incorretos");
        }
    };
    var data = JSON.stringify(
        {
            
        }
     );
    xhr.send(data);    

});