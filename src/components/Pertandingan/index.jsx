import React, { Component } from "react";
import PertandinganView from "./view";
import socketIOClient from "socket.io-client";
import axios from "axios";

export default class Pertandingan extends Component {
  constructor() {
    super();

    this.state = {
      team: [],
      match: {
        teamA: null,
        teamB: null,
        scoreA: 0,
        scoreB: 0
      },
      url: "http://localhost:8089"
    };
  }
  socket = socketIOClient("http://localhost:8089");

  async UNSAFE_componentWillMount() {
    await axios.get(this.state.url).then(response => {
      this.setState({
        team: response.data.data
      });
    });
    // this.socket.on("updatetim", update => {
    //   console.log(update);
    // });
  }

  handleChange = event => {
    console.log(event.target.name);
    let match = this.state.match;
    match[event.target.name] = event.target.value;
    console.log(match);
    this.setState({ match });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.match);
    const match = this.state.match;
    axios.post("http://localhost:8089/update", match).then(response => {
      this.socket.emit("update", response);
    });
  };

  render() {
    return (
      <div>
        <PertandinganView
          team={this.state.team}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
