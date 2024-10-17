from JWT import verifica_e_decodifica_jwt, iniciandoJWT
from flask_cors import CORS
from flask import Blueprint, request
from cliente_service import verifica_login, cadastro_cliente, cadastra_cardapio

cliente_app = Blueprint('cliente_app',  __name__)

CORS(cliente_app)

@cliente_app.route('/cliente',methods=['POST'])
def criar_cliente():
    dados = request.get_json()
    resultado_cadastro = cadastro_cliente(dados['nome'], dados['usuario'],dados['senha'],dados['genero'],dados['data_nascimento'])
    return resultado_cadastro

@cliente_app.route('/cliente', methods=['GET'])
def acesso():
    jwt = request.headers.get('Token')
    retorno_jwt = verifica_e_decodifica_jwt(jwt)
    return retorno_jwt

@cliente_app.route('/cliente/login', methods=['POST'])
def verfica_login_rota():
    dados = request.get_json()
    verificacao_login = verifica_login(dados['login'], dados['senha'])
    if verificacao_login == True:
        return iniciandoJWT()
    return verificacao_login

@cliente_app.route('/cliente/cardapio', methods=['POST'])
def cadastra_cardapio_rota():
    dados = request.get_json()
    cadastro_cardapio = cadastra_cardapio(dados['file'])
   
    return cadastro_cardapio
   