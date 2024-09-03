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

    const dia = document.createElement('p')
    dia.textContent = info_diaSemana.dia
    
    diaSemana.appendChild(dia)

    render_refeicao(info_diaSemana.cafe, diaSemana)
    render_refeicao(info_diaSemana.almoco, diaSemana)
    render_refeicao(info_diaSemana.lanche, diaSemana)

    cardapio.appendChild(diaSemana)

}

const cardapio = [
    {dia: 'seg', cafe: 'Pão de leite; Pão de leite; Pão de leite;', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'ter', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'qua', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'qui', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'sex', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
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
