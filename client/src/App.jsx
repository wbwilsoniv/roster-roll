import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";
import {
  fetchPlayers,
  fetchGames,
  saveGame,
  deletePlayer,
  fetchOnePlayer
  // fetchOneGame,
} from "./services/api";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div className="navbar is-light">
            <div class="navbar-brand">
              <div class="navbar-item">
                <img
                  src="https://user-images.githubusercontent.com/38361826/47681453-ddaa2b00-db9f-11e8-8d1f-0786f61b9e23.png"
                  alt="logo"
                  style={{ height: "153px", width: `auto` }}
                />
              </div>
            </div>
            <header className="container is-medium has-background-danger">
              <div className="level is-grouped is-centered">
                <div className="level-item">
                  <Link to="/">
                    <button className="button is-info is-rounded">Home</button>
                  </Link>
                </div>
                <div className="level-item">
                  <Link to="/players">
                    <button className="button is-info is-rounded">
                      Players
                    </button>
                  </Link>
                </div>
                <div className="level-item">
                  <Link to="/games">
                    <button className="button is-info is-rounded">Games</button>
                  </Link>
                </div>
              </div>
            </header>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={PlayersList} />
            <Route exact path="/games" component={GamesList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
