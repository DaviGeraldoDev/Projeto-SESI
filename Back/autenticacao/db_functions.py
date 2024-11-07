import pyodbc
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
    #with open(caminho_imagem, 'rb') as arquivo_imagem:
    dados_binarios = caminho_imagem.read()
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
