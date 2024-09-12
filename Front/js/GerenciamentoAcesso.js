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