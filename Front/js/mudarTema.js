const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "./Front/src/sol.png";
        document.getElementById("calendario-icon").src = "./Front/src/calenBranco.png"; 
        document.getElementById("cardapio-icon").src = "./Front/src/cardapBranco.png"; 
        document.querySelectorAll(".notificacao-icon").forEach(icon => {
            icon.src = "./Front/src/sinoBranco.png"; 
        });
    } else {
        themeIcon.src = "./Front/src/lua.png"; 
        document.getElementById("calendario-icon").src = "./Front/src/calendario.png"; 
        document.getElementById("cardapio-icon").src = "./Front/src/cardapio.png"; 
        document.querySelectorAll(".notificacao-icon").forEach(icon => {
        icon.src = "./Front/src/notificacao.png";
        });
    }
});
