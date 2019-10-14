import React, { Component } from "react";
import KlasemenTable from "./KlasemenTable";

export default class Klasemen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <KlasemenTable />
      </div>
    );
  }
}
