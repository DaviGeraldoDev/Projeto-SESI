select * from REFEICAO_AGENDADA
select * from horarios

---cafe da manha !=0
select cafe_manha, id_data, horario,
count(*) as total
from REFEICAO_AGENDADA, horarios
where cafe_manha != '0'
and id_data = '2024-11-12'
and horario = '07:50'
group by 
cafe_manha, id_data, horario
order by
cafe_manha, id_data, horario

---cafe da manha != 1
select cafe_manha, id_data, horario,
count(*) as total
from REFEICAO_AGENDADA, horarios
where cafe_manha != '1'
and id_data = '2024-11-12'
and horario = '07:50'
group by 
cafe_manha, id_data, horario
order by
cafe_manha, id_data, horario


