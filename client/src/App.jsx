import React, { Component } from "react";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";
import NewPlayer from "./components/NewPlayer";
import NewGame from "./components/NewGame";
// import EditPlayer from "./components/EditPlayer";
import {
  fetchPlayers,
  fetchGames,
  savePlayer,
  saveGame
  // fetchOnePlayer,
  // savePlayer,
  // fetchGames,
  // fetchOneGame,
  // saveGame
} from "./services/api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      games: []
    };
    this.createPlayer = this.createPlayer.bind(this);
    this.createGame = this.createGame.bind(this);
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
  createPlayer(player) {
    savePlayer(player).then(data => {
      fetchPlayers().then(data => this.setState({ players: data }));
    });
  }

  createGame(game) {
    saveGame(game).then(data => {
      fetchGames().then(data => this.setState({ games: data }));
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
      <div className="App">
        <div className="">
          <img src="./Roster-Roll.svg" alt="Roster Roll logo" />
        </div>
        <Home />
        <PlayersList players={this.state.players} />
        <GamesList games={this.state.games} />
        <NewPlayer onSubmit={this.createPlayer} />
        <NewGame onSubmit={this.createGame} />
        {/* <EditPlayer
          player={this.state.players[0]}
          onSubmit={this.handleEditPlayer}
        /> */}
      </div>
    );
  }
}

export default App;
