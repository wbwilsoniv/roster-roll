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
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      games: [],
      playerSelected: false
    };
    this.createGame = this.createGame.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleEditPlayer = this.handleEditPlayer.bind(this);
  }

  componentDidMount() {
    fetchPlayers().then(data => this.setState({ players: data }));
    fetchGames().then(data => this.setState({ games: data }));
  }
  // handleEditPlayer(player) {
  //   // const player = this.state.players[0];
  //   // this.setState({
  //   //   player: player
  //   // });
  // }

  createGame(game) {
    saveGame(game).then(data => {
      fetchGames().then(data => this.setState({ games: data }));
    });
  }

  deletePlayer(id) {
    deletePlayer(id).then(data => {
      fetchPlayers().then(data => this.setState({ players: data }));
    });
  }

  handleSelect(id) {
    fetchOnePlayer(id).then(data => {
      this.setState({ selectedPlayer: data });
    });
  }

  handleCreatePlayer(player) {
    const players = this.state.players;
    this.setState({
      players: [...players, player]
    });
    console.log(players, player);
  }

  handleCreateGame(game) {
    const games = this.state.games;
    this.setState({
      games: [...games, game]
    });
  }

  render() {
    return (
      <Router>
        <div className="main">
          <div className="navbar is-light">
            <div class="navbar-brand">
              <div class="navbar-item">
                <img
                  src="https://user-images.githubusercontent.com/38361826/47593746-82313080-d946-11e8-868d-8fef1bd919b9.png"
                  alt="logo"
                  style={{ width: `auto` }}
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
