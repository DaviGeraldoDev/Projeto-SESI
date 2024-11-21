select * from REFEICAO_AGENDADA

---cafe da manha !=0
select cafe_manha, id_data,
count(*) as total
from REFEICAO_AGENDADA
where cafe_manha != '0'
and id_data = '2024-11-12'
group by 
cafe_manha, id_data
order by
cafe_manha, id_data

---cafe da manha != 1
select cafe_manha, id_data,
count(*) as total
from REFEICAO_AGENDADA
where cafe_manha != '1'
and id_data = '2024-11-12'
group by 
cafe_manha, id_data
order by
cafe_manha, id_data


