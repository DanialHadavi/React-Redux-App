import React from "react";
import "./App.css";
import TenJokes from "./components/TenJokes";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="App">
      {/* <Joke /> */}
      <TenJokes />
    </div>
  );
}

export default App;
