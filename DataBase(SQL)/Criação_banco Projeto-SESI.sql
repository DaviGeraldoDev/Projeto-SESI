CREATE TABLE users(
    rm_usuario int primary key,
    senha_usuario varchar(100) not null,
    nome_usuario varchar(45) not null,
    serie_usuario varchar(3) not null,
    turma_usuario char(1) not null,
);

CREATE TABLE comer_ou_nao(
    rm_usuario int primary key,
    cafe_2feira bit,
    almoco_2feira bit,
    lanche_2feira bit,
    cafe_3feira bit,
    almoco_3feira bit,
    lanche_3feira bit,
    cafe_4feira bit,
    almoco_4feira bit,
    lanche_4feira bit,
    cafe_5feira bit,
    almoco_5feira bit,
    lanche_5feira bit,
    cafe_6feira bit,
    almoco_6feira bit,
    lanche_6feira bit,
);

CREATE TABLE acesso_refeicoes(
	id INTEGER IDENTITY(1,1) PRIMARY KEY,
	serie VARCHAR(3) not null,
	turma CHAR(1)not null,
	segunda_cafe bit,
	segunda_almoco bit,
	segunda_lanche bit,
	terca_cafe bit,
	terca_almoco bit,
	terca_lanche bit,
	quarta_cafe bit,
	quarta_almoco bit,
	quarta_lanche bit,
	quinta_cafe bit,
	quinta_almoco bit,
	quinta_lanche bit,
	sexta_cafe bit,
	sexta_almoco bit,
	sexta_lanche bit
) 

CREATE TABLE series(
    serie varchar(3) primary key,
);

CREATE TABLE turmas(
    turma char(1) primary key,
);

ALTER TABLE comer_ou_nao ADD FOREIGN KEY (rm_usuario) REFERENCES users (rm_usuario)

ALTER TABLE acesso_refeicoes ADD FOREIGN KEY (serie) REFERENCES series (serie)
ALTER TABLE acesso_refeicoes ADD FOREIGN KEY (turma) REFERENCES turmas (turma)