import pyodbc
import base64
from datetime import datetime, timedelta
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
    comando_sql = "SELECT imagem,data_inicial,data_final FROM cardapio WHERE data_inicial = ? AND data_final = ?"
    data_inicio = '2024-05-01'
    data_final = '2024-05-08'
    
    resultado = cursor.execute(comando_sql, (data_inicio, data_final)).fetchone()

    data_inicio = datetime.strptime(resultado[1], '%Y-%m-%d')
    data_final = datetime.strptime(resultado[2], '%Y-%m-%d')
    data_inicio_2 = data_inicio + timedelta(days=1)
    data_inicio_3 = data_inicio + timedelta(days=2)
    data_inicio_4 = data_inicio + timedelta(days=3)

    data_inicio_formatada = data_inicio.strftime('%d/%m')
    data_inicio_2_formatada = data_inicio_2.strftime('%d/%m')
    data_inicio_3_formatada = data_inicio_3.strftime('%d/%m')
    data_inicio_4_formatada = data_inicio_4.strftime('%d/%m')
    data_final_formatada = data_final.strftime('%d/%m')
    imagem_base64 = base64.b64encode(resultado[0]).decode('utf-8')

    resultado_formatado = {'imagem': imagem_base64,
                           'refeicoes':
                           [{"dia": data_inicio_formatada, "dia_semana": 'Seg'},
                           {"dia": data_inicio_2_formatada, "dia_semana": 'Ter'},
                           {"dia": data_inicio_3_formatada, "dia_semana": 'Qua'},
                           {"dia": data_inicio_4_formatada, "dia_semana": 'Qui'},
                           {"dia": data_final_formatada, "dia_semana": 'Sex'}]}
    
    if resultado_formatado != None:        
        return resultado_formatado
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

def AgendarRefeicaoDb(id_usuario, Refeicoes):
    for Refeicao in Refeicoes:
        comando_sql = f"""
            insert into REFEICAO_AGENDADA (id_data, id_usuario, cafe_manha, almoco, cafe_tarde) 
            values 
            ('{Refeicao['data']}', {id_usuario}, {int(Refeicao['cafe_manha'])}, {int(Refeicao['almoco'])}, {int(Refeicao['cafe_tarde'])})
        """
        cursor.execute(comando_sql)

    cursor.commit()