import React, { Component } from "react";
import KlasemenTable from "./KlasemenTable";
import socketIOClient from 'socket.io-client';
import axios from 'axios';

export default class Klasemen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  socket = socketIOClient("http://localhost:4000");

  componentWillMount() {
    // axios.get(this.state.url,).then(response => {
    //   console.log(response);
    // })

    // this.socket.on("update", update => {
    //   console.log(update);
    // });
  }
  

  render() {
    return (
      <div>
        <KlasemenTable />
      </div>
    );
  }
}
