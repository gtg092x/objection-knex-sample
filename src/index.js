import { User } from './models';
import knex from './knex';
const run = async () => {
  const users = await User.query().where({ name: 'Brad' });
  await Promise.all(users.map(async (user) => {
    user.views ++;
    return user.$query().patch();
  }));
  return JSON.stringify(users, null, 4);
};

run().then(console.log).then(() => knex.destroy());