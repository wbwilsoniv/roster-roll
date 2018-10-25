import React, { Component } from "react";

class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.player.id,
      firstname: this.props.player.firstname,
      team: this.props.player.team
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      firstname: this.state.firstname,
      team: this.state.team,
      id: this.state.id
    };
    this.props.onSubmit(data);
  }

  deletePlayer(evt) {
    evt.preventDefault();
    this.props.deletePlayer(this.state.id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            placeholder="First Name"
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Team: </label>
          <input
            placeholder="Team Name"
            type="text"
            name="team"
            value={this.state.team}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="button">
          Save
        </button>
        <button className="button" onClick={this.deletePlayer}>
          Delete
        </button>
      </form>
    );
  }
}

export default EditPlayer;
