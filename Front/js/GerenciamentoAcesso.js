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


