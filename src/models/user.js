import { Model } from 'objection';
import knex from '../knex';

// Give the connection to objection.
Model.knex(knex);
// Person model.
export default class User extends Model {
  static tableName = 'users';
  static jsonSchema = {
    type: 'object',
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      views: {type: 'number'},
    },
  };
}
