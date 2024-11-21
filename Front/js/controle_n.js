function render_campo(info_comer,  refeicao){
    const comer = document.createElement('div')
    comer.setAttribute('class', 'campo_comer')
    comer.textContent = info_comer[0]

    const nao_comer = document.createElement('div')
    nao_comer.setAttribute('class', 'campo_nao_comer')
    nao_comer.textContent = info_comer[1]

    const nao_resp = document.createElement('div')
    nao_resp.setAttribute('class', 'campo_nao_resp')
    nao_resp.textContent = info_comer[2]

    const dieta_esp = document.createElement('div')
    dieta_esp.setAttribute('class', 'campo_dieta_esp')
    dieta_esp.textContent = info_comer[3]

    refeicao.appendChild(comer)
    refeicao.appendChild(nao_comer)
    refeicao.appendChild(nao_resp)
    refeicao.appendChild(dieta_esp)
}

function render_refeicao(refeicao, diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class','refeicao')
    render_campo(refeicao, div)
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
    {dia: 'Seg', cafe: ['700','50','100','2'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Ter', cafe: ['700','50','100','2'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Qua', cafe: ['700','50','100','2'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Qui', cafe: ['700','50','100','2'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Sex', cafe: ['700','50','100','2'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
]

cardapio.forEach(info_diaSemana => {
    render_cardapio(info_diaSemana)
});

  document.querySelectorAll('.diaSemana').forEach(dia => {
      dia.addEventListener('click', function () {
          const pagina = document.getElementById('pagina');
          const paginaInfo = document.getElementById('pagina-info');
          paginaInfo.innerHTML = this.innerHTML;
          pagina.style.display = 'block';
      });
  });

const pagina = document.getElementById('pagina');
const span = document.querySelector('.fechar');

span.addEventListener('click', function () {
    pagina.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === pagina) {
        pagina.style.display = 'none';
    }
});
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






