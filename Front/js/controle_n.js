function render_cardapio(info_diaSemana) {

    const cardapio = document.getElementById('cardapio')

    const diaSemana = document.createElement('div')
    diaSemana.setAttribute('class', 'diaSemana')

    const dia = document.createElement('p')
    dia.textContent = info_diaSemana.dia

    const cafe = document.createElement('div')
    cafe.setAttribute('class', 'refeicao')
    cafe.textContent = info_diaSemana.cafe

    const almoco = document.createElement('div')
    almoco.setAttribute('class', 'refeicao')
    almoco.textContent = info_diaSemana.almoco

    const lanche = document.createElement('div')
    lanche.setAttribute('class', 'refeicao')
    lanche.textContent = info_diaSemana.lanche

    
    diaSemana.appendChild(dia)
    diaSemana.appendChild(cafe)
    diaSemana.appendChild(almoco)
    diaSemana.appendChild(lanche)

    cardapio.appendChild(diaSemana)

}

const cardapio = [
    {dia: 'Seg', cafe: '780', almoco: '800', lanche: '500'},
    {dia: 'Ter', cafe: '500', almoco: '800', lanche: '750'},
    {dia: 'Qua', cafe: '700', almoco: '475', lanche: '650'},
    {dia: 'Qui', cafe: '400', almoco: '550', lanche: '780'},
    {dia: 'Sex', cafe: '300', almoco: '450', lanche: '480'},
]

cardapio.forEach(info_diaSemana => {
    render_cardapio(info_diaSemana)
});


