const initialState = {
  loading: 1,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: ++state.loading };
    }
    case "STOP_LOADING": {
      console.log("current loading count: ", state.loading);
      const loading = --state.loading;
      console.log("after minus", loading);
      return { ...state, loading: loading > 0 ? loading : 0 };
    }
    default:
      return state;
  }
};

export default loadingReducer;
