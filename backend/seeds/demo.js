const demoBoards = [{ id: '1', name: 'My Board', description: 'My Little Zen Garden' },
{ id: '2', name: 'Company Board', description: 'Important business stuff! Keep out!' },
{ id: '3', name: 'Mystery Board', description: 'Secret stuff :O' }]

exports.demoBoards = demoBoards

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('boards').del()
  await knex('boards').insert(demoBoards)
};
