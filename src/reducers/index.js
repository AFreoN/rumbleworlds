import { combineReducers } from "redux";
import characterSelectReducer from "./character-select.reducer";
import loadingReducer from "./loading.reducer";

const rootReducer = combineReducers({
  characterSelect: characterSelectReducer,
  loading: loadingReducer,
});

export default rootReducer;
