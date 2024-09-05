//MODO DARK
const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "/Front/src/sol.png";
        document.getElementById("cadastro-icon").src = "/Front/src/cadastroBranco.png";
        document.getElementById("lupa-icon").src = "/Front/src/lupaBranca.png";
        document.getElementById("Presenca-icon").src = "/Front/src/telepresencaBranca.png";




    } else {
        themeIcon.src = "/Front/src/lua.png";
        document.getElementById("cadastro-icon").src = "/Front/src/cadastro.png";
        document.getElementById("lupa-icon").src = "/Front/src/lupa.png";
        document.getElementById("Presenca-icon").src = "/Front/src/telepresenca.png";

    }
});