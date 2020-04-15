const initialState = {
  joke: "",
  punchline: "",
  isFetching: false,
  error: "",
};

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOKE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_JOKE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        joke: action.payload,
        error: "",
      };
    case "FETCH_JOKE_SUCCESS2":
      return {
        ...state,
        isFetching: false,
        punchline: action.payload,
        error: "",
      };
    case "FETCH_JOKE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
