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