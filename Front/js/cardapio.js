function render_refeicao(refeicao, diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class', 'refeicaoAtiva')
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
    {dia: '02/09', dia_semana: 'Seg', cafe: 'Pão de leite; Pão de leite; Pão de leite;', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: '03/09', dia_semana: 'Ter', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: '04/09', dia_semana: 'Qua', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: '05/09', dia_semana: 'Qui', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: '06/09', dia_semana: 'Sex', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
]

cardapio.forEach(info_diaSemana => {
    render_cardapio(info_diaSemana)
});


const refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicaoAtiva"))
const bt_limpar = document.getElementById('bt_limpar')
const bt_confirmar = document.getElementById('bt_confirmar')

function press(){
    this.classList.toggle("refeicaoInativa")
}

refeicao.forEach(element => {
    element.addEventListener("click", press)
});

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
