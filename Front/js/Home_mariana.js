//MODO DARK
const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "/Front/src/sol.png";
        document.getElementById("calendario-icon").src = "/Front/src/calenBranco.png";
        document.getElementById("grafico-icon").src = "/Front/src/grafico-de-barrasBranco.png";
        document.getElementById("notificacao-icon").src = "/Front/src/notficacaoBranca.png";
        document.getElementById("carlos-icon").src = "/Front/src/calenBranco.png";
        document.getElementById("aluno-icon").src = "/Front/src/alunobranco.png";
        document.getElementById("aviso-icon").src = "/Front/src/avisoBranco.png";  
    } else {
        themeIcon.src = "/Front/src/lua.png";
        document.getElementById("calendario-icon").src = "/Front/src/calendario.png";
        document.getElementById("grafico-icon").src = "/Front/src/grafico-de-barras-preto.png";
        document.getElementById("notificacao-icon").src = "/Front/src/desbloquear.png";
        document.getElementById("carlos-icon").src = "/Front/src/calendario.png";
        document.getElementById("aluno-icon").src = "/Front/src/aluno.png";
        document.getElementById("aviso-icon").src = "/Front/src/aviso.png"; 

    }
});