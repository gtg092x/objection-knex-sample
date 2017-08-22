export const up = async knex => knex.schema.alterTable('users', (users) => {
  users.integer('views').defaultsTo(0);
});

export const down = async (knex) => knex.schema.alterTable('users', (users) => {
  users.dropColumn('views');
});

