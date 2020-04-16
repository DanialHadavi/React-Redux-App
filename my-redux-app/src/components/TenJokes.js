import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Joke from "./Joke";

import { fetchTenJokes } from "../store/actions/jokeActions";

const TenJokes = (props) => {
  useEffect(() => {
    props.fetchTenJokes();
  }, []);

  return (
    <div>
      <Joke />
      <h1> 😂 Try 10 Jokes 🤣 </h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}

      {props.joke.map((z) => (
        <div key={z.id}>
          <h3>{z.setup}</h3>
          <h4>{z.punchline}</h4>
        </div>
      ))}

      <button onClick={props.fetchTenJokes}>Ten New Jokes?</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.jokes.joke,
    joke1: state.jokes.joke1,
    isFetching: state.jokes.isFetching,
    error: state.jokes.error,
  };
};

export default connect(mapStateToProps, { fetchTenJokes })(TenJokes);
