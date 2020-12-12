import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('itens').insert([
        {title: 'Lampadas', image: 'lampadas.svg'},
        {title: 'Pilhas e Baterias', image: 'baterias.svg'},
        {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        {title: 'Resíduos eletronicos', image: 'eletronicos.svg'},
        {title: 'Resíduos organicos', image: 'organicos.svg'},
        {title: 'Óleo de cozinha', image: 'oleo.svg'},       
    ])
}