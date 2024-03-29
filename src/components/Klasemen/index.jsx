import React, { Component } from "react";
import KlasemenTable from "./KlasemenTable";
import socketIOClient from "socket.io-client";
import axios from "axios";

export default class Klasemen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  socket = socketIOClient(this.props.ip_database);

  async UNSAFE_componentWillMount() {
    await axios.get(this.props.ip_database).then(response => {
      this.setState({
        teams: response.data.data
      });
      this.sortLeaderboard();
    });

    this.socket.on("updatetim", update => {
      this.setState({ teams: update });
      this.sortLeaderboard();
    });
  }

  sortLeaderboard = () => {
    let teams = this.state.teams;
    const sortest = teams.sort((a, b) => b.pts - a.pts);
    this.setState({
      teams: sortest
    });
  };

  render() {
    return (
      <div>
        <KlasemenTable teams={this.state.teams} />
      </div>
    );
  }
}
