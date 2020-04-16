const initialState = {
  joke: [],
  isFetching: false,
  error: "",
};

export const oneJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOKE_START":
      return {
        ...state,
        isFetching: true,
      };

    case "FETCH_JOKE_SUCCESS":
      console.log("action", action.payload);
      return {
        ...state,
        isFetching: false,
        joke1: action.payload,
        error: "",
      };
    case "FETCH_JOKE_FAILURE1":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
