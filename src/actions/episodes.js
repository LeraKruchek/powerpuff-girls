import { createActions } from 'redux-actions';

export const ACTIONS = {
  FETCH_EPISODE: 'FETCH_EPISODE',
  SAVE_EPISODE: 'SAVE_EPISODE',
};

export const { fetchEpisode, saveEpisode } = createActions(
  ACTIONS.FETCH_EPISODE,
  ACTIONS.SAVE_EPISODE,
);
