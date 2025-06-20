const initialState = {
  character: 0,
};

const characterSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE": {
      return { ...state, character: action.payload };
    }
    default:
      return state;
  }
};

export default characterSelectReducer;
