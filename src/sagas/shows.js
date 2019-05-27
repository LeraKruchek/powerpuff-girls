import { call, fork, put, takeLatest } from 'redux-saga/effects';
import api from '../core/api';
import { ACTIONS, saveShow } from '../actions/shows';

// fetch the show
export function* fetchShow(action) {
  const show = yield call(api.getShow);

  yield put(saveShow(show));
}

export function* showSagas() {
  yield [fork(takeLatest, ACTIONS.FETCH_SHOW, fetchShow)];
}
