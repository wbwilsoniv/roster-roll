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

  componentDidUpdate(prevProps) {
    if (this.props.player.id !== prevProps.player.id) {
      this.setState({
        id: this.props.player.id,
        firstname: this.props.player.firstname,
        team: this.props.player.team
      });
    }
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
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Edit Player</label>
          <div className="field">
            <label className="label">Name: </label>
            <div className="control">
              <input
                placeholder="First Name"
                className="input"
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Team: </label>
            <div className="control">
              <input
                placeholder="Team Name"
                className="input"
                type="text"
                name="team"
                value={this.state.team}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button">
              Save
            </button>
            <button className="button" onClick={this.deletePlayer}>
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPlayer;
