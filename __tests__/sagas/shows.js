import { call, put } from 'redux-saga/effects';
import { fetchShow } from '../../src/sagas/shows';
import api from '../../src/core/api';

describe('Users saga', () => {
  describe('fetchShow()', () => {
    const generator = fetchShow();

    it('should return the api.getShow call', () => {
      expect(generator.next().value).toEqual(call(api.getShow));
    });

    it('should return the SAVE_SHOW action', () => {
      expect(generator.next().value).toEqual(put({ type: 'SAVE_SHOW' }));
    });

    it('should be finished', () => {
      expect(generator.next().done).toBe(true);
    });
  });
});
