import { createActions } from 'redux-actions'

export const ACTIONS = {
  FETCH_SHOW: 'FETCH_SHOW',
  SAVE_SHOW: 'SAVE_SHOW'
};

export const { fetchShow, saveShow } = createActions(ACTIONS.FETCH_SHOW, ACTIONS.SAVE_SHOW);

