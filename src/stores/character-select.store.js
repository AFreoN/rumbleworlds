import { createStore } from "redux";
import characterSelectReducer from "reducers/character-select.reducer";

function characterSelectStore(state = { character: 0 }) {
  return createStore(characterSelectReducer(state));
}

export default characterSelectStore;