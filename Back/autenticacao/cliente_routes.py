from JWT import verifica_e_decodifica_jwt, iniciandoJWT
from flask_cors import CORS
from flask import Blueprint, request, jsonify
from cliente_service import verifica_login, cadastro_cliente, cadastra_cardapio
from db_functions import recuperar_imagem

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

@cliente_app.route('/obter-imagem', methods=['GET'])
def obter_imagem():
    imagem_base64 = recuperar_imagem()
    if imagem_base64:
        # Retorna a imagem em formato JSON
        return jsonify({'imagem': imagem_base64})
    else:
        return jsonify({'erro': 'Imagem não encontrada'}), 404

@cliente_app.route('/cliente/cardapio', methods=['POST'])
def cadastra_cardapio_rota():
    dados = request.get_json()
    cadastro_cardapio = cadastra_cardapio(dados['file'], dados['data_inicio'], dados['data_fim'])
   
    return cadastro_cardapio