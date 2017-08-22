import knexConfig from '../knexfile';
import Knex from 'knex';

const { NODE_ENV = 'development' } = process.env;

// Initialize knex connection.
export default Knex(knexConfig[NODE_ENV]);