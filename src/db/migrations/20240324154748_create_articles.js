/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('articles', function(table) {
    table.increments('id').primary();
    table.string('title', 100).notNullable();
    table.text('description');
    table.string('category', 50);
    table.date('createdate');
    table.jsonb('plan');
    table.specificType('img_data', 'BYTEA[]');
  })
  .createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('phone_number', 20);
    table.string('email', 255);
    table.text('description');
    table.timestamp('create_date').defaultTo(knex.fn.now());
    table.timestamp('update_date').defaultTo(knex.fn.now());
    table.string('state', 50);
  })

  .createTable('superuser', function(table) {
    table.increments('id').primary();
    table.string('username', 50).notNullable();
    table.string('password', 250).notNullable();
  });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("articles");
};
