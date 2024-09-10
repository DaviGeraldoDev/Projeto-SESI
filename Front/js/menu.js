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

//TEMA DARK
const icons = [
    {id: "config-icon", light:"/Front/src/Configuracao-Preta (1).png" , dark:"/Front/src/Configuracao-Branca.png"},
    {id: "cardapio-icon", light:"/Front/src/cardapio.png" , dark:"/Front/src/cardapBranco.png"},
    {id: "notificacao-icon", light:"/Front/src/sinoBranco.png" , dark:"/Front/src/notificacao.png"}
]

icon.addEventListener("click",()=>{
    const isDark = document.body.classList.toggle("dark");
    themeIcon.src = isDark ? "/Front/src/sol.png" : "/Front/src/lua.png";

    icons.forEach(({id, light, dark})=>{
        document.getElementById(id).src = isDark ? dark : light;
    })
})