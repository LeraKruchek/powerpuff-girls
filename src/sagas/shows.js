import { call, fork, put, takeLatest } from 'redux-saga/effects';
import api from "../core/api";
import { ACTIONS, saveShow } from '../actions/shows';

// fetch the user's list
export function* fetchShow(action) {
  // call the api to get the users list
  const show = yield call(api.getShow);

  // save the users in state
  yield put(saveShow(show));
}

export function* showSagas() {
  yield [
    fork(takeLatest, ACTIONS.FETCH_SHOW, fetchShow)
  ];
}
