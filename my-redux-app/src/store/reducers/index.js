import { combineReducers } from "redux";
import { jokesReducer as jokes } from "./jokesReducer";
import { oneJokeReducer as oneJoke } from "./oneJokeReducer";
export default combineReducers({
  jokes,
  oneJoke,
});
