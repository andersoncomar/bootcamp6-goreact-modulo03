import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/users';
import { addUser } from './users';

export default function* rootSage() {
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)]);
}
