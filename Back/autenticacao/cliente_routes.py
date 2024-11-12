from flask_cors import CORS
from flask import Blueprint, request, jsonify
from cliente_service import cadastra_cardapio, AgendarRefeicao
from db_functions import recuperar_imagem

cliente_app = Blueprint('cliente_app',  __name__)

CORS(cliente_app)

@cliente_app.route('/refeicaoAgendada', methods=['POST'])
def refeicaoAgendada():
    data = request.get_json()
    refeicaoAgendada = AgendarRefeicao(data)
    return refeicaoAgendada

@cliente_app.route('/obter-imagem', methods=['GET'])
def obter_imagem():
    imagem_base64 = recuperar_imagem()
    if imagem_base64:
        # Retorna a imagem em formato JSON
        return jsonify({'imagem': imagem_base64})
    else:
        return jsonify({'erro': 'Imagem não encontrada'}), 404

@cliente_app.route('/cliente/cardapio', methods=['GET','POST'])
def cadastra_cardapio_rota():
    
    cadastro_cardapio = cadastra_cardapio(request.files['file'], request.form['data_inicio'], request.form['data_fim'])
   
    return cadastro_cardapio