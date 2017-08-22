import uuid from 'uuid/v4';

export const seed = async (knex) => {
  await knex('users').del();
  return knex('users').insert([
    {id: uuid(), name: 'Matt'},
    {id: uuid(), name: 'Bob'},
    {id: uuid(), name: 'Brad'}
  ]);
};