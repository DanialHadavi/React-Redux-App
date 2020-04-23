import axios from "axios";

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_JOKE_START" });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        console.log("dadadad");
        dispatch({ type: "FETCH_JOKE_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_JOKE_FAILURE1",
          payload: `Error ${err.response.status}: ${err.response.data.status}`,
        });
      });
  };
};
export const fetchTenJokes = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_JOKE_START1" });
    axios
      .get("https://official-joke-api.appspot.com/random_ten")
      .then((res) => {
        dispatch({ type: "FETCH_JOKE_SUCCESS3", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_JOKE_FAILURE1",
          payload: `Error ${err.response.status}: ${err.response.data.status}`,
        });
      });
  };
};
