const demoBoards = [{ id: '1', name: 'My Board', description: 'My Little Zen Garden' },
{ id: '2', name: 'Company Board', description: 'Important business stuff! Keep out!' },
{ id: '3', name: 'Mystery Board', description: 'Secret stuff :O' }]

const demoBoard1Lists = [{
  id: '1',
  name: 'Backlog',
  board_id: '1'
},
{
  id: '2',
  name: 'Todo',
  board_id: '1'
},
{
  id: '3',
  name: 'In-progress',
  board_id: '1'
},
{
  id: '4',
  name: 'Done',
  board_id: '1'
}

]

exports.demoBoards = demoBoards

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('boards').del()
  await knex('boards').insert(demoBoards)

  await knex('lists').del()
  await knex('lists').insert(demoBoard1Lists)
};
