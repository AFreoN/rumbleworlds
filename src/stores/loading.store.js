import { createStore } from "redux";
import loadingReducer from "reducers/loading.reducer";

function loadingStore(state = { loading: 0 }) {
  return createStore(loadingReducer(state));
}

export default loadingStore;
