import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import episodes from './episodes';
import show from "./show";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  show: show,
  episodes: episodes,
});
