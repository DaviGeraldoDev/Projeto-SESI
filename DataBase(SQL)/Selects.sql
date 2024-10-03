1-
SELECT *FROM users;

2-
SELECT u.nome_usuario, u.serie_usuario, u.turma_usuario, c.cafe_2feira, c.almoco_2feira, c.lanche_2feira
FROM users u JOIN comer_ou_nao c ON u.rm_usuario = c.rm_usuario;

3-
SELECT count(cafe_2feira) as PessoasQVaoTomarCafe2Feira 
FROM comer_ou_nao where cafe_2feira = 1 GROUP BY cafe_2feira ;

4-
SELECT nome_usuario, serie_usuario, turma, segunda_cafe FROM users
JOIN acesso_refeicoes a ON serie_usuario = serie AND turma_usuario = turma
WHERE segunda_cafe = 1;

5-
SELECT serie, turma
FROM acesso_refeicoes
WHERE quarta_cafe = 0;