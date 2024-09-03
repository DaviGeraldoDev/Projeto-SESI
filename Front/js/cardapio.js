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


const refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicao"))
const bt_limpar = document.getElementById('bt_limpar')

function press(){
    this.classList.toggle("refeicaoAtiva")
}

function press_bt_limpar(){
    refeicao.forEach(element => {
        element.classList.remove("refeicaoAtiva")
    });
    
}

refeicao.forEach(element => {
    element.addEventListener("click", press)
});

bt_limpar.addEventListener("click", press_bt_limpar)

