from db_functions import converter_imagem_para_varbinary, inserir_imagem

def cadastra_cardapio(cardapio, data_inicio, data_fim):
    imagem_varbinary = converter_imagem_para_varbinary(cardapio)
    inserir_imagem(imagem_varbinary, data_inicio, data_fim)
    return 'Cardapio cadastrado com sucesso', 200