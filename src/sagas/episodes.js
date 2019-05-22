import { call, fork, put, takeLatest } from 'redux-saga/effects';
import api from "../core/api";
import { ACTIONS, saveEpisode } from '../actions/episodes';

export function* fetchEpisodeDetails(action) {
  const { season, number } = action.payload;
  
  // call the api to get the episode details list
  const episode = yield call(api.getEpisodeDetails, season, number);
  
  // save the episode in state
  yield put(saveEpisode(episode));
}

export function* episodeSagas() {
  yield [
    fork(takeLatest, ACTIONS.FETCH_EPISODE, fetchEpisodeDetails)
  ];
}
