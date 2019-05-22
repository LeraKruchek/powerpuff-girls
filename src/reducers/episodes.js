import { ACTIONS } from '../actions/episodes';

// episodes reducer
export default function episodes(state = null, action) {
  switch (action.type) {
    case ACTIONS.SAVE_EPISODE:
      const { season, number } = action.payload;
      const id = String(season) + String(number);

      return {
        ...state,
        [id]: action.payload,
      };
    
    // initial state
    default:
      return state;
  }
}
