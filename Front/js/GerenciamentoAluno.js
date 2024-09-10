//MODO DARK
const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");
const icons = [
    {id: "cadastro-icon", light:"/Front/src/cadastro.png" , dark:"/Front/src/cadastroBranco.png"},
    {id: "lupa-icon", light:"/Front/src/lupa.png" , dark:"/Front/src/lupaBranca.png"},
    {id: "Presenca-icon", light:"/Front/src/telepresenca.png" , dark:"/Front/src/telepresencaBranca.png"}
]


icon.addEventListener("click", () =>{
    const isDark = document.body.classList.toggle("dark");

    themeIcon.src = isDark ? "/Front/src/sol.png" : "/Front/src/lua.png";

    icons.forEach(({id, light, dark})=>{
        document.getElementById(id).src = isDark ? dark : light;
    })
})