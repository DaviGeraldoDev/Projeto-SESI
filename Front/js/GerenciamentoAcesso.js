$(document).ready(function(){
    // Faz a requisição para a API
    $.getJSON("http://127.0.0.1:5000/obter-imagem", function(data) {
        console.log("Resposta recebida: ", data); // Depuração da resposta
        if (data.imagem) {
            $('#imagem-cardapio').attr('src', 'data:image/png;base64,' + data.imagem);
        } else {
            alert("Imagem não encontrada!");
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Erro ao carregar a imagem: " + textStatus + " " + errorThrown);
    });
});


document.getElementById('filtro').addEventListener('change', function() {
    var valor = this.value;
    var linhas = document.querySelectorAll('tbody tr');
    
    linhas.forEach(function(linha) {
        if (valor === "" || linha.classList.contains('categoria-' + valor)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
});

function apagarEscolha() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}


