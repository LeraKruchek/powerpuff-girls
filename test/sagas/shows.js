import { call, put } from "redux-saga/effects";
import assert from "assert";
import { fetchShow } from "../../src/sagas/shows";
import api from "../../src/core/api";

// unit tests for the users saga
describe('Users saga', () => {
  describe('fetchShow()', () => {
    const generator = fetchShow();

    it('should return the api.getShow call', () => {
      assert.deepEqual(generator.next().value, call(api.getShow));
    });

    it('should return the SAVE_SHOW action', () => {
      assert.deepEqual(generator.next().value, put({type: 'SAVE_SHOW'}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
