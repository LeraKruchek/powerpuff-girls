import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { showSagas, usersAddEdit, usersDelete } from "./shows";

// main saga generators
export function* sagas() {
  yield [
    fork(showSagas),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
  ];
}
