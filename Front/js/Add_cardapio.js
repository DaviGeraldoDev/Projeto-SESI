function render_refeicao(refeicao, diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class', 'refeicao')
    div.textContent = refeicao
    diaSemana.appendChild(div)
}

function render_cardapio(info_diaSemana) {

    const cardapio = document.getElementById('cardapio')

    const diaSemana = document.createElement('div')
    diaSemana.setAttribute('class', 'diaSemana')

    const dia_semana = document.createElement('p')
    dia_semana.textContent = info_diaSemana.dia_semana
    
    diaSemana.appendChild(dia_semana)

    render_refeicao(info_diaSemana.cafe, diaSemana)
    render_refeicao(info_diaSemana.almoco, diaSemana)
    render_refeicao(info_diaSemana.lanche, diaSemana)

    const dia = document.createElement('p')
    dia.textContent = info_diaSemana.dia
    
    diaSemana.appendChild(dia)

    cardapio.appendChild(diaSemana)

}

const cardapio = [
    {dia: '02/09', dia_semana: 'Seg', cafe: '', almoco: '', lanche: ''},
    {dia: '03/09', dia_semana: 'Ter', cafe: '', almoco: '', lanche: ''},
    {dia: '04/09', dia_semana: 'Qua', cafe: '', almoco: '', lanche: ''},
    {dia: '05/09', dia_semana: 'Qui', cafe: '', almoco: '', lanche: ''},
    {dia: '06/09', dia_semana: 'Sex', cafe: '', almoco: '', lanche: ''},
]

cardapio.forEach(info_diaSemana => {
    render_cardapio(info_diaSemana)
});

const bt_limpar = document.getElementById('bt_limpar')
const bt_confirmar = document.getElementById('bt_confirmar')


function press_bt_limpar(){
    refeicao.forEach(element => {
        element.classList.add("refeicaoInativa")
    });
    
}

bt_limpar.addEventListener("click", press_bt_limpar)

function press_bt_confirmar(){
    alert('As informações foram enviadas com sucesso!')
    window.location = 'Menu.html'
}

bt_confirmar.addEventListener("click", press_bt_confirmar)

//MODO DARK
const icon = document.getElementById("MudarTema");
const themeIcon = document.getElementById("MudarTema");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.src = "/Front/src/sol.png";

    } else {
        themeIcon.src = "/Front/src/lua.png";


    }
});