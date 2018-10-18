import React, { Component } from "react";
import Home from "./components/Home";
import PlayersList from "./components/PlayersList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          name: "Tim",
          team: "Sliders"
        },
        {
          id: 2,
          name: "Frank",
          team: "Sliders"
        },
        {
          id: 3,
          name: "Johnny",
          team: "Sliders"
        }
      ],
      games: [
        {
          gdate: "10/10/18",
          gtime: "8:00PM",
          home: false,
          team: "Sliders"
        },
        {
          gdate: "10/10/18",
          gtime: "8:00PM",
          home: false,
          team: "Sliders"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <img src="./Roster-Roll.svg" alt="Roster Roll logo" />
        </div>
        <Home />
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
