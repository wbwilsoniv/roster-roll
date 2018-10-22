import React, { Component } from "react";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";
import NewPlayer from "./components/NewPlayer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          firstName: "Tim",
          team: "Sliders"
        },
        {
          id: 2,
          firstName: "Frank",
          team: "Sliders"
        },
        {
          id: 3,
          firstName: "Johnny",
          team: "Sliders"
        }
      ],
      games: [
        {
          id: 1,
          gdate: "10/10/18",
          gtime: "8:00PM",
          home: false,
          team: "Sliders"
        },
        {
          id: 2,
          gdate: "10/18/18",
          gtime: "7:00PM",
          home: false,
          team: "Sliders"
        },
        {
          id: 3,
          gdate: "10/24/18",
          gtime: "8:00PM",
          home: true,
          team: "Sliders"
        }
      ]
    };
    this.handleCreatePlayer = this.handleCreatePlayer.bind(this);
  }

  handleCreatePlayer(player) {
    const players = this.state.players;
    this.setState({
      players: [...players, player]
    });
    console.log(players, player);
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
        <NewPlayer onSubmit={this.handleCreatePlayer} />
      </div>
    );
  }
}

export default App;
