import React, { Component } from "react";

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      team: ""
    };

    this.handleInput = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <div>
          <label for="firstName">Name: </label>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label for="team">Team: </label>
          <input
            placeholder="Team Name"
            type="text"
            name="team"
            value={this.state.team}
            onChange={this.handleInputChange}
          />
        </div>
        <input type="submit" value="Add New Player" />
      </form>
    );
  }
}

export default NewPlayer;
