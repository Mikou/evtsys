
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table
      .string('name')
      .notNullable()
      .unique()
    table
      .string('email')
      .notNullable()
      .unique()
    table.string('password').notNullable()
    table
      .string('role')
      .notNullable()
      .defaultTo('MEMBER')
    table.string('picture')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
