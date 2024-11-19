const icons = [
    {id: "config-icon", light: "/Front/src/Configuracao-Preta (1).png", dark: "/Front/src/Configuracao-Branca.png"},
    {id: "cardapio-icon", light: "/Front/src/cardapio.png", dark: "/Front/src/cardapBranco.png"}
];

document.getElementById("MudarTema").addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    const MudarTema = document.getElementById("MudarTema");
    MudarTema.src = isDark ? "/Front/src/sol.png" : "/Front/src/lua.png";
    
    icons.forEach(({id, light, dark}) => {
        document.getElementById(id).src = isDark ? dark : light;
    });
    document.querySelectorAll(".notificacao-icon").forEach(icon => {
        icon.src = isDark ? "/Front/src/sinoBranco.png" : "/Front/src/notificacao.png";
    });
});
