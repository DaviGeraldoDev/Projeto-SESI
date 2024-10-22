import pyodbc
from seg_senha import encrypt_md5
import base64
"Mariane Nutri" "SESI123"

#Conexão com o Banco de dados
cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=SERVIDORPROF\SQLEXPRESS;DATABASE=sesialimentacao;uid=corporacaotrl;pwd=odaiv0nurb')
cursor = cnxn.cursor()

#Criação da tabela "clientes"
# cursor.execute("""
#                IF NOT EXISTS (SELECT 1 FROM SYS.OBJECTS WHERE NAME = 'clientes')
#                 BEGIN
#                     CREATE TABLE clientes(
#                     id INTEGER IDENTITY(1,1) PRIMARY KEY,
#                     nome VARCHAR(255) NOT NULL,
#                     usuario VARCHAR(255) NOT NULL,
#                     senha VARCHAR(100) NOT NULL,
#                     genero VARCHAR(10),
#                     data_nascimento DATE,
#                     CONSTRAINT UK_usuario UNIQUE (usuario))
#                 END
#                """)
# cursor.commit()

def verifica_usuario_existente_db(usuario):
    select_usuario_existente = cursor.execute(f"SELECT usuario,senha FROM usuario WHERE usuario = '{usuario}'").fetchall()
    resposta = [tuple(row) for row in select_usuario_existente]
    if not resposta:
        return True
    return False

def insert_tabela(cliente):
    cursor.execute(f"INSERT INTO clientes VALUES('{cliente.nome}', '{cliente.usuario}', '{cliente.senha}', '{cliente.genero}', '{cliente.data_nascimento}')")
    cursor.commit()

def verifica_login_db(login, senha):
    #encripta a senha do input
    senha_encrypt = encrypt_md5(senha)
    #Busca a existência de um cliente com as credenciais descritas
    select_verificacao = cursor.execute(f"SELECT id_usuario,senha FROM usuarios WHERE id_usuario = '{login}'").fetchall()
    resposta = [tuple(row) for row in select_verificacao]
    #Verifica se será um select vazio
    if not resposta:
        return 'Cliente inexistente', 401
    #Armazena em lista os resultados 
    lista_resultado = resposta[0]
    #Divide a lista em variáveis
    usuario_comparacao = lista_resultado[0]
    senha_comparacao = lista_resultado[1]
    #Verificação final
    if login == str(usuario_comparacao) and senha_encrypt == senha_comparacao:
        return True
    return 'Acesso negado', 401

def recuperar_imagem():
    # Consultando a imagem
    comando_sql = "SELECT imagem FROM cardapio WHERE data_inicial = ? AND data_final = ?"
    data_inicio = '2024-05-01'  # Defina as datas como critério de busca
    data_final = '2024-05-08'
    
    resultado = cursor.execute(comando_sql, (data_inicio, data_final)).fetchone()

    # Retorna a imagem binária se existir
    if resultado:
        # Converte a imagem binária para Base64
        imagem_base64 = base64.b64encode(resultado[0]).decode('utf-8')
        return imagem_base64
    else:
        return None

def converter_imagem_para_varbinary(caminho_imagem):
    with open(caminho_imagem, 'rb') as arquivo_imagem:
        dados_binarios = arquivo_imagem.read()
    return dados_binarios

def inserir_imagem(imagem_binaria, data_inicio, data_fim):
    # Inserção da imagem e das datas na tabela
    comando_sql = """
        INSERT INTO cardapio (imagem, data_inicial, data_final) 
        VALUES (?, ?, ?)
    """
    # Execute o comando com os parâmetros
    cursor.execute(comando_sql, (imagem_binaria, data_inicio, data_fim))
    cursor.commit()
