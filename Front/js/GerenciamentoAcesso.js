function atualizarStatus(refeicao, elemento) {
    const celulasStatus = elemento.closest('tr').querySelectorAll('td');
    const estaMarcado = elemento.checked;

    if (refeicao === 'almoco') {
        celulasStatus[1].classList.remove('status-bloqueado');
        celulasStatus[1].classList.add(estaMarcado = 'status-permitido');
    } else if (refeicao === 'cafe') {
        celulasStatus[2].classList.remove('status-bloqueado');
        celulasStatus[2].classList.add(estaMarcado = 'status-permitido');
    } else if (refeicao === 'cafe-manha') {
        celulasStatus[3].classList.remove('status-bloqueado');
        celulasStatus[3].classList.add(estaMarcado = 'status-permitido');
    }
}

// Lida com mudanças nos checkboxes de Almoço
document.querySelectorAll('.checkbox-almoco').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        atualizarStatus('almoco', this);
    });
});


document.querySelectorAll('.checkbox-cafe').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        atualizarStatus('cafe', this);
    });
});


document.querySelectorAll('.checkbox-cafe-manha').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        atualizarStatus('cafe-manha', this);
    });
});

document.getElementById('filtro').addEventListener('change', function() {
    var value = this.value;
    var rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(function(row) {
        if (value === "" || row.classList.contains('categoria-' + value)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
