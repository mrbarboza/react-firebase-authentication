import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`user/${id}`).set({
    username,
    email,
  });

export const onceGetUser = () =>
  db.ref('users').once('value');

// Other Entity APIs ...
