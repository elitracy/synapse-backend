// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Lecture, User, Note, Outline, Group, GroupUser } = initSchema(schema);

export {
  Lecture,
  User,
  Note,
  Outline,
  Group,
  GroupUser
};