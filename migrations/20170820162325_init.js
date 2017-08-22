export const up = async knex => knex.schema.createTable('users', (users) => {
  users.uuid('id').primary();
  users.text('name').nullable();
});

export const down = async (knex) => knex.schema.dropTable('user');
