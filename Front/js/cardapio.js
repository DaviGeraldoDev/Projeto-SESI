function render_refeicao(diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class', 'refeicaoAtiva')
    div.setAttribute('estado','1')
    diaSemana.appendChild(div)
}

function render_cardapio(info_diaSemana) {

    const cardapio = document.getElementById('cardapio')

    const diaSemana = document.createElement('div')
    diaSemana.setAttribute('class', 'diaSemana')
    diaSemana.setAttribute('data', info_diaSemana.dia)

    const dia_semana = document.createElement('p')
    dia_semana.textContent = info_diaSemana.dia_semana
    
    diaSemana.appendChild(dia_semana)

    render_refeicao(diaSemana)
    render_refeicao(diaSemana)
    render_refeicao(diaSemana)

    const dia = document.createElement('p')
    dia.textContent = info_diaSemana.dia
    
    diaSemana.appendChild(dia)

    cardapio.appendChild(diaSemana)

}

function press(){
    this.classList.toggle("refeicaoInativa")

    if (this.getAttribute('estado') == '0') {
        this.setAttribute('estado','1')
    }else{
        this.setAttribute('estado','0')
    }
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

let refeicao = null

$(document).ready(function(){
    // Faz a requisição para a API
    $.getJSON("http://127.0.0.1:5000/obter-imagem", function(data) {
        console.log("Resposta recebida: ", data); // Depuração da resposta
        if (data.imagem) {
            $('#imagem-cardapio').attr('src', 'data:image/png;base64,' + data.imagem);

            data.refeicoes.forEach(info_diaSemana => {
                render_cardapio(info_diaSemana)
            });

            refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicaoAtiva"))

            refeicao.forEach(element => {
                element.addEventListener("click", press)
            });
    

        } else {
            alert("Imagem não encontrada!");
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Erro ao carregar a imagem: " + textStatus + " " + errorThrown);
    });

    $('#bt_confirmar').click(  function () {
        var dias = Array.prototype.slice.call(document.getElementsByClassName("diaSemana"))
        var vou_comer = document.getElementsByClassName("refeicaoAtiva");
        var array_resultado = Array.prototype.slice.call(vou_comer).map(function(element) {
          return element.getAttribute('estado');
        });

        var boolean_resultado = array_resultado.map(function(valor) {
          return valor == 1; 
        });

        var user_data = {
          'id_usuario': 4,
          'refeicoes': [
            {data: dias[1].getAttribute('data'), dia_semana: 'Seg', cafe_manha: false, almoco: false, cafe_tarde: false},
            {data: dias[2].getAttribute('data'), dia_semana: 'Ter', cafe_manha: false, almoco: false, cafe_tarde: false},
            {data: dias[3].getAttribute('data'), dia_semana: 'Qua', cafe_manha: false, almoco: false, cafe_tarde: false},
            {data: dias[4].getAttribute('data'), dia_semana: 'Qui', cafe_manha: false, almoco: false, cafe_tarde: false},
            {data: dias[5].getAttribute('data'), dia_semana: 'Sex', cafe_manha: false, almoco: false, cafe_tarde: false}
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
            user_data   
         );
        xhr.send(data);    

    });
});


function press_bt_limpar(){
    refeicao.forEach(element => {
        element.classList.add("refeicaoInativa")
        element.setAttribute('estado', '0')
    });
}

