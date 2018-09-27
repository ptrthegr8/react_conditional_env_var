import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import bulbasaur from "./bulbasaur.png";
import squirtle from "./squirtle.png";
import charmander from "./charmander.png";
const { REACT_APP_POKEMON } = process.env;

class App extends Component {
  render() {
    let pokemon;
    if (REACT_APP_POKEMON === "charmander") {
      pokemon = charmander;
    } else if (REACT_APP_POKEMON === "squirtle") {
      pokemon = squirtle;
    } else if (REACT_APP_POKEMON === "bulbasaur") {
      pokemon = bulbasaur;
    } else {
      console.log("No environment variable :-(");
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {REACT_APP_POKEMON ? (
          <img src={pokemon} alt="pocket monster" />
        ) : (
          "woopsie"
        )}
      </div>
    );
  }
}

export default App;
