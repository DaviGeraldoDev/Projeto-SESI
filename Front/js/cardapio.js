function render_refeicao(diaSemana){
    const div = document.createElement('div')
    div.setAttribute('class', 'refeicaoAtiva')
    //div.setAttribute('estado','0')
    diaSemana.appendChild(div)
}

function render_cardapio(info_diaSemana) {

    const cardapio = document.getElementById('cardapio')

    const diaSemana = document.createElement('div')
    diaSemana.setAttribute('class', 'diaSemana')

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

const refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicaoAtiva"))

function press(){
    this.classList.toggle("refeicaoInativa")
    /*if (this.state == '0') {
        this.state = '1'
    }else{
        this.state = '0'
    }*/
    console.log("this.state =",this.estado)  
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

$(document).ready(function(){
    // Faz a requisição para a API
    $.getJSON("http://127.0.0.1:5000/obter-imagem", function(data) {
        console.log("Resposta recebida: ", data); // Depuração da resposta
        if (data.imagem) {
            $('#imagem-cardapio').attr('src', 'data:image/png;base64,' + data.imagem);
            data.refeicoes.forEach(info_diaSemana => {
                render_cardapio(info_diaSemana)
            });
            const seg = data.refeicoes[0].dia
            const ter = data.refeicoes[1].dia
            const qua = data.refeicoes[2].dia
            const qui = data.refeicoes[3].dia
            const sex = data.refeicoes[4].dia

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
            {dia: seg, dia_semana: 'Seg', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: ter, dia_semana: 'Ter', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: qua, dia_semana: 'Qua', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: qui, dia_semana: 'Qui', cafe_manha: false, almoco: false, cafe_tarde: false},
            {dia: sex, dia_semana: 'Sex', cafe_manha: false, almoco: false, cafe_tarde: false}
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

