1-
SELECT rm_usuario, senha_usuario, nome_usuario, serie_usuario, turma_usuario
FROM users;

2-
SELECT rm_usuario, cafe_2feira, almoco_2feira, lanche_2feira, cafe_3feira, almoco_3feira, lanche_3feira,
cafe_4feira, almoco_4feira, lanche_4feira, cafe_5feira, almoco_5feira, lanche_5feira,cafe_6feira, almoco_6feira, lanche_6feira
FROM comer_ou_nao;

3-
SELECT id, serie, turma, segunda_cafe, segunda_almoco, segunda_lanche, terca_cafe, terca_almoco, terca_lanche,
quarta_cafe, quarta_almoco, quarta_lanche, quinta_cafe, quinta_almoco, quinta_lanche,sexta_cafe, sexta_almoco, sexta_lanche
FROM acesso_refeicoes;

4-
SELECT rm_usuario, nome_usuario, turma_usuario
FROM users
WHERE serie_usuario = '3EM';

5-
SELECT rm_usuario, cafe_2feira, almoco_2feira, lanche_2feira
FROM comer_ou_nao;

6-
SELECT serie, turma
FROM acesso_refeicoes
WHERE quarta_cafe = 0;