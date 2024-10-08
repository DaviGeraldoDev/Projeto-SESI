insert into users(rm_usuario, senha_usuario, nome_usuario, serie_usuario, turma_usuario) values 
(4055,'sesi1234', 'João Silva', 1, 'A'),
(8647, 'sesi5678', 'Maria Souza', 2, 'B'),
(1819,'sesi9101','Pedro Santos', 3, 'C'),
(8724, 'sesi1213','Ana Lima', 4, 'A'),
(8983,'sesi1415','Lucas Alves', 5, 'B'),
(6179, 'sesi1617','Carla Ribeiro',6, 'C'),
(4007, 'sesi1819','Bruno Castro', 7, 'A'),
(4085, 'sesi2021', 'Paula Moraes', 8, 'B'),
(5103, 'sesi2223', 'Gabriel Costa', 9, 'C'),
(8886, 'sesi2425','Julia Mendes', 1, 'A'),
(5632, 'sesi2627', 'Rodrigo Mello', 2, 'B'),
(9256, 'sesi2829', 'Fernanda Dias',3, 'C'),
(3780, 'sesi3031', 'Felipe Alves', 1, 'A'),
(3411, 'sesi3233', 'Beatriz Freitas', 2, 'B'),
(2813, 'sesi3435', 'Igor Almeida', 3, 'C' ),
(2620, 'sesi3637', 'Sabrina Lopes', 4, 'A'),
(2678, 'sesi3839', 'Thiago Nunes', 5, 'B'),
(5708, 'sesi4041', 'Mariana Silva', 6, 'C'),
(7483, 'sesi4243', 'Rafael Souza', 7, 'A'),
(7803, 'sesi4445', 'Larissa Cruz', 8, 'B');

update users set serie_usuario = '1EM' where rm_usuario in (3780)
update users set serie_usuario = '2EM' where rm_usuario in (3411)
update users set serie_usuario = '3EM' where rm_usuario in (2813)

ALTER TABLE users ADD restricao INT DEFAULT 0 WITH VALUES;

insert into turmas values
('A'),
('B'),
('C');

Insert into series values 
('1'),
('2'),
('3'),
('4'),
('5'),
('6'),
('7'),
('8'),
('9'),
('1EM'),
('2EM' ),
('3EM');

insert into acesso_refeicoes( serie, turma, segunda_cafe, segunda_almoco, segunda_lanche, terca_cafe,terca_almoco,terca_lanche, quarta_cafe,quarta_almoco,quarta_lanche,quinta_cafe,quinta_almoco,quinta_lanche,sexta_cafe, sexta_almoco,sexta_lanche) values 
('1', 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('1', 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('2', 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('2', 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('3', 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('3', 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('4', 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('4', 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('5', 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('5', 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),

('6', 'A', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),
('6', 'B', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),
('6', 'C', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),
('7', 'A', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),
('7', 'B', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),
('7', 'C', 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1),

('8', 'A', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('8', 'B', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('8', 'C', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('9', 'A', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('9', 'B', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('9', 'C', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),

('1EM', 'A', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('1EM', 'B', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),
('1EM', 'C', 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0),

('2EM', 'A', 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0),

('3EM', 'A', 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0);

Insert into comer_ou_nao (rm_usuario,cafe_2feira,almoco_2feira , lanche_2feira ,cafe_3feira , almoco_3feira ,lanche_3feira ,cafe_4feira ,almoco_4feira ,lanche_4feira , cafe_5feira ,almoco_5feira ,lanche_5feira ,cafe_6feira , almoco_6feira,lanche_6feira) values 
(4055, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0),
(8647, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1),
(1819, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0),
(8724, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1),
(8983, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1),
(6179, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0),
(4007, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1),
(4085, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
(5103, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1),
(8886, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1),
(5632, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0),
(9256, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1),
(3780, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
(3411, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1),
(2813, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1),
(2620, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0),
(2678, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1),
(5708, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1),
(7483, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0),
(7803, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1);
