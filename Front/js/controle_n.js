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

const refeicao = [
    {dia: 'Seg', cafe: ['60','37','20','90'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Ter', cafe: ['60','37','20','90'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Qua', cafe: ['60','37','20','90'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Qui', cafe: ['60','37','20','90'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
    {dia: 'Sex', cafe: ['60','37','20','90'], almoco: ['700','50','100','2'], lanche: ['700','50','100','2']},
]


document.querySelectorAll('.diaSemana').forEach((dia, index) => {
    dia.addEventListener('click', function () {
        const pagina = document.getElementById('pagina');
        const paginaInfo = document.getElementById('pagina-info');

        paginaInfo.innerHTML = '';

        const infoDia = refeicao[index];

        const tabela = document.createElement('table');
        tabela.style.width = '100%';
        tabela.style.borderCollapse = 'collapse';
        tabela.style.marginBottom = '20px';


        paginaInfo.style.display = 'flex';
        paginaInfo.style.justifyContent = 'center';
        paginaInfo.style.alignItems = 'center';
        paginaInfo.style.minHeight = '80vh';


        



        const cabecalho = document.createElement('tr');
        const colunas = ['Horário', 'Vão Comer', 'Não Vão Comer', 'Não Responderam', 'Dieta Especial'];
        colunas.forEach(coluna => {
            const th = document.createElement('th');
            th.textContent = coluna;
            th.style.border = '1px solid red';
            th.style.padding = '8px';
            th.style.textAlign = 'center';
            th.style.backgroundColor = '#f5f5f5';
            cabecalho.appendChild(th);
        });
        tabela.appendChild(cabecalho);


        const horarios = ['07:50', '08:40', '09:20', '09:30'];


        const dadosCafe = infoDia.cafe;
        const naoVaoComer = ['20', '8', '5', '10'];
        const naoResponderam = ['10', '15', '5', '8'];
        const dietaEspecial = ['2', '1', '0', '2'];

        horarios.forEach((horario, j) => {
            const linha = document.createElement('tr');

            const tdHorario = document.createElement('td');
            tdHorario.textContent = horario;
            tdHorario.style.border = '1px solid red';
            tdHorario.style.padding = '8px';
            tdHorario.style.textAlign = 'center';
            linha.appendChild(tdHorario);


            const colunasDados = [
                dadosCafe[j],
                naoVaoComer[j],
                naoResponderam[j],
                dietaEspecial[j]
            ];

            colunasDados.forEach(valor => {
                const td = document.createElement('td');
                td.textContent = valor;
                td.style.border = '1px solid red';
                td.style.padding = '8px';
                td.style.textAlign = 'center';
                linha.appendChild(td);
            });

            tabela.appendChild(linha);
        });


        const tituloRefeicoes = document.createElement('h3');
        tituloRefeicoes.textContent = `Cardápio de ${infoDia.dia}`;
        paginaInfo.appendChild(tituloRefeicoes);

        paginaInfo.appendChild(tabela);
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






