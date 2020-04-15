import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchJoke } from "../store/actions/jokeActions";

const Joke = (props) => {
  useEffect(() => {
    props.fetchJoke();
  }, []);

  return (
    <div>
      <h1> 😂 Try Some Jokes 🤣 </h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.joke && <h3>"{props.joke}"</h3>}
      {props.punchline && <h3>"{props.punchline}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchJoke}>New Joke?</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    joke: state.jokes.joke,
    punchline: state.jokes.punchline,
    isFetching: state.jokes.isFetching,
    error: state.jokes.error,
  };
};

export default connect(mapStateToProps, { fetchJoke })(Joke);
