import { call, fork, put } from 'redux-saga/effects';
import api from "../core/api";
import { takeLatest } from 'redux-saga';
import { ACTIONS, saveShow } from '../actions/shows';

// fetch the user's list
export function* fetchShow(action) {
  // call the api to get the users list
  const show = yield call(api.getShow);

  // save the users in state
  yield put(saveShow(show));
}

// add/edit a user
export function* usersAddEdit(action) {
  // call the api to add/edit the user
  yield call(api.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the user
  yield put({
    type: action.user.id ? 'USERS_EDIT_SAVE' : 'USERS_ADD_SAVE',
    user: action.user,
  });

  // success
  action.callbackSuccess();
}

// delete a user
export function* usersDelete(action) {
  // call the api to delete the user
  yield call(api.delete);

  // update the state by removing the user
  yield put({
    type: 'USERS_DELETE_SAVE',
    user_id: action.user_id,
  });
}

export function* showSagas() {
  yield [
    fork(takeLatest, ACTIONS.FETCH_SHOW, fetchShow)
  ];
}
