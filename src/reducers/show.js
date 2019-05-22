import { ACTIONS } from '../actions/shows';

// show reducer
export default function show(state = null, action) {
  switch (action.type) {
    case ACTIONS.SAVE_SHOW:
      return action.payload;

    // initial state
    default:
      return state;
  }
}
