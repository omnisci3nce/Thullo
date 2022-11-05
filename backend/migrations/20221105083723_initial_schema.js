exports.up = function(knex) {
    return knex.schema.createTable('boards', table => {
        table.uuid('id').primary()
        table.string('name')
        table.string('description')
    })
    .createTable('lists', table => {
        table.uuid('id').primary()
        table.string('name')
        table.uuid('board_id').references('id').inTable('boards')

    })
    .createTable('cards', table => {
        table.uuid('id').primary()
        table.string('title')
        table.string('description')
        table.uuid('list_id').references('id').inTable('lists')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('lists')
    .dropTableIfExists('boards')
    .dropTableIfExists('cards')
};
