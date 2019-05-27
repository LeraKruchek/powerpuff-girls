import { fork } from 'redux-saga/effects';
import { showSagas } from './shows';
import { episodeSagas } from './episodes';

// main saga generators
export function* sagas() {
  yield [fork(showSagas), fork(episodeSagas)];
}
