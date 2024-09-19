// var JWT = window.sessionStorage.getItem('JWT');
// 	if (JWT == null || JWT == ''){
// 		window.location.href = "login.html";
// 	}
// var xhr = new XMLHttpRequest();
// var url = "http://localhost:5000/cliente";
// xhr.open("GET", url, true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Token", window.sessionStorage.getItem('JWT'));
// xhr.onload = function () {
// 		if (xhr.status !== 200) {
//             alert("Token expirado, faça login novamente!");
// 			window.location.href = 'login.html';
// 		}
// };
// xhr.responseType="text";
// xhr.send();    


// //MODO DARK
const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

const icons = [
    { id: "calendario-icon", light: "/Front/src/calendario.png", dark: "/Front/src/calenBranco.png" },
    { id: "grafico-icon", light: "/Front/src/grafico-de-barras-preto.png", dark: "/Front/src/grafico-de-barrasBranco.png" },
    { id: "notificacao-icon", light: "/Front/src/desbloquear.png", dark: "/Front/src/notficacaoBranca.png" },
    { id: "aluno-icon", light: "/Front/src/aluno.png", dark: "/Front/src/alunobranco.png" },
    { id: "aviso-icon", light: "/Front/src/aviso.png", dark: "/Front/src/avisoBranco.png" },
    { id: "mais-icon", light: "/Front/src/Mais-Preto.png", dark: "/Front/src/Mais-Branca.png" }
];

icon.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    // Muda o ícone do tema
    themeIcon.src = isDark ? "/Front/src/sol.png" : "/Front/src/lua.png";

    // Atualiza todos os ícones com base no tema
    icons.forEach(({ id, light, dark }) => {
        document.getElementById(id).src = isDark ? dark : light;
    });
});