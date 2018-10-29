import React, { Component } from "react";

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      team: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label">Add Player</label>
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
            <button type="submit" className="button is-small is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPlayer;
