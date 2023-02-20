// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema.js';

const { User } = initSchema(schema);

export {
  User
};
