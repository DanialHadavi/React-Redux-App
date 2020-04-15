import axios from "axios";

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_JOKE_START" });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        console.log("res", res);
        dispatch({ type: "FETCH_JOKE_SUCCESS", payload: res.data.setup });
        dispatch({ type: "FETCH_JOKE_SUCCESS2", payload: res.data.punchline });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "FETCH_JOKE_FAILURE",
          payload: `Error ${err.response.status}: ${err.response.data.status}`,
        });
      });
  };
};
