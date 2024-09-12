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