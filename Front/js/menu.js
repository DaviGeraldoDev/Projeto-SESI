const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

//Conferência do Token JWT
var JWT = window.sessionStorage.getItem('JWT');
	if (JWT == null || JWT == ''){
		window.location.href = "login.html";
	}
var xhr = new XMLHttpRequest();
var url = "http://localhost:5000/cliente";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Token", window.sessionStorage.getItem('JWT'));
xhr.onload = function () {
		if (xhr.status !== 200) {
            alert("Token expirado, faça login novamente!");
			window.location.href = 'login.html';
		}
};
xhr.responseType="text";
xhr.send();    

//Trocar de tema
icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "/Front/src/sol.png";
        document.getElementById("calendario-icon").src = "/Front/src/calenBranco.png"; 
        document.getElementById("cardapio-icon").src = "/Front/src/cardapBranco.png"; 
        document.querySelectorAll(".notificacao-icon").forEach(icon => {
            icon.src = "/Front/src/sinoBranco.png"; 
        });

    } else {
        themeIcon.src = "/Front/src/lua.png"; 
        document.getElementById("calendario-icon").src = "/Front/src/calendario.png"; 
        document.getElementById("cardapio-icon").src = "/Front/src/cardapio.png"; 
        document.querySelectorAll(".notificacao-icon").forEach(icon => {
        icon.src = "/Front/src/notificacao.png";
        });
    }
});
