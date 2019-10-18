import React, { Component } from "react";
import PertandinganView from "./PertandinganView";
import socketIOClient from "socket.io-client";
import axios from "axios";

export default class Pertandingan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [],
      match: {
        teamA: 1,
        teamB: 1,
        scoreA: 0,
        scoreB: 0
      },
      message: "",
      status: ""
    };
  }

  socket = socketIOClient(this.props.ip_database);

  async UNSAFE_componentWillMount() {
    await axios.get(this.props.ip_database).then(response => {
      this.setState({
        team: response.data.data
      });
    });
  }

  handleChange = event => {
    console.log(event.target.name);
    let match = this.state.match;
    match[event.target.name] = Number(event.target.value);
    console.log(match);
    this.setState({ match });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.match);
    const match = this.state.match;
    axios.post(`${this.props.ip_database}/update`, match).then(response => {
      console.log(response.data.message);
      this.setState({
        message: response.data.message,
        status: response.data.status
      });
      setTimeout(() => {
        this.setState({
          message: "",
          status: ""
        });
      }, 2000);

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
          message={this.state.message}
          status={this.state.status}
        />
      </div>
    );
  }
}
