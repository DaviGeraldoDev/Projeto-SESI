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
