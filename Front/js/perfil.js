const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

icon.addEventListener("click", () =>{
    const isDark = document.body.classList.toggle("dark");

    themeIcon.src = isDark ? "/Front/src/sol.png" : "/Front/src/lua.png";

    icon.forEach(({id, light, dark})=>{
        document.getElementById(id).src = isDark ? dark : light;
    })
})