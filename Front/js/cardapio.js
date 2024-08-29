var JWT = window.sessionStorage.getItem('JWT');
	if (JWT == null || JWT == ''){
		window.location.href = "login.html";
	}
var xhr = new XMLHttpRequest();
var url = "http://localhost:5000/cliente";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Token", window.sessionStorage.getItem('JWT'));
xhr.onload = function () {
		if (xhr.status !== 200) {
            alert("Token expirado, faça login novamente!");
			window.location.href = 'login.html';
		}
};
xhr.responseType="text";
xhr.send();    

function render_cardapio(info_diaSemana) {

    const cardapio = document.getElementById('cardapio')

    const diaSemana = document.createElement('div')
    diaSemana.setAttribute('class', 'diaSemana')

    const dia = document.createElement('p')
    dia.textContent = info_diaSemana.dia

    const cafe = document.createElement('div')
    cafe.setAttribute('class', 'refeicao')
    cafe.textContent = info_diaSemana.cafe

    const almoco = document.createElement('div')
    almoco.setAttribute('class', 'refeicao')
    almoco.textContent = info_diaSemana.almoco

    const lanche = document.createElement('div')
    lanche.setAttribute('class', 'refeicao')
    lanche.textContent = info_diaSemana.lanche

    
    diaSemana.appendChild(dia)
    diaSemana.appendChild(cafe)
    diaSemana.appendChild(almoco)
    diaSemana.appendChild(lanche)

    cardapio.appendChild(diaSemana)

}

const cardapio = [
    {dia: 'seg', cafe: 'Pão de leite; Pão de leite; Pão de leite;', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'ter', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'qua', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'qui', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
    {dia: 'sex', cafe: 'Pão de leite', almoco: 'Pão de leite', lanche: 'Pão de leite'},
]

cardapio.forEach(info_diaSemana => {
    render_cardapio(info_diaSemana)
});


const refeicao = Array.prototype.slice.call(document.getElementsByClassName("refeicao"))
const bt_limpar = document.getElementById('bt_limpar')

function press(){
    this.classList.toggle("refeicaoAtiva")
}

function press_bt_limpar(){
    refeicao.forEach(element => {
        element.classList.remove("refeicaoAtiva")
    });
    
}

refeicao.forEach(element => {
    element.addEventListener("click", press)
});

bt_limpar.addEventListener("click", press_bt_limpar)

