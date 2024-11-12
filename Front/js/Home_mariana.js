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