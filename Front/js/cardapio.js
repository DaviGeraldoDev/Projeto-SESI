$(document).ready(function(){
    // Faz a requisição para a API
    $.getJSON("http://127.0.0.1:5000/obter-imagem", function(data) {
        console.log("Resposta recebida: ", data); // Depuração da resposta
        if (data.imagem) {
            $('#imagem-cardapio').attr('src', 'data:image/png;base64,' + data.imagem);
            console.log("Imagem carregada com sucesso.");
        } else {
            alert("Imagem não encontrada!");
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Erro ao carregar a imagem: " + textStatus + " " + errorThrown);
    });

    $('#bt_confirmar').click(  function () {
        var vou_comer = document.getElementsByClassName("refeicaoAtiva");
        var array_resultado = Array.prototype.slice.call(vou_comer).map(function(element) {
          return element.classList.contains("refeicaoInativa") ? 0 : 1;
        });

        var boolean_resultado = array_resultado.map(function(valor) {
          return valor === 1; 
        });

        var user_data = {
          'id_usuario': 1,
          'refeicoes': [
            {dia: '02/09', dia_semana: 'Seg', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: '03/09', dia_semana: 'Ter', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: '04/09', dia_semana: 'Qua', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: '05/09', dia_semana: 'Qui', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: '06/09', dia_semana: 'Sex', cafe_manha: false, almoco: false, cafe_tarde: false}
          ]
        };

        // Associar os valores booleanos ao JSON
        boolean_resultado.forEach(function(valor, index) {
          if (valor) {
            switch (index % 3) {
              case 0:
                user_data.refeicoes[Math.floor(index / 3)].cafe_manha = true;
                break;
              case 1:
                user_data.refeicoes[Math.floor(index / 3)].almoco = true;
                break;
              case 2:
                user_data.refeicoes[Math.floor(index / 3)].cafe_tarde = true;
                break;
            }
          }
        });
        console.log(user_data);

        var xhr = new XMLHttpRequest();
        var url = "http://127.0.0.1:5000/refeicaoAgendada";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Refeição agendada com sucesso!");

            }if(xhr.readyState === 4 && xhr.status === 401){
              alert("Usuário ou senha incorretos");
            }
        };
        var data = JSON.stringify(
            {user_data}
                
         );
        xhr.send(data);    

    });
});

function render_refeicao(refeicao, diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class', 'refeicaoAtiva')
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


const refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicaoAtiva"))
const bt_limpar = document.getElementById('bt_limpar')

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

function press_bt_confirmar(){
    alert('As informações foram enviadas com sucesso!')
    window.location = 'Menu.html'
}

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