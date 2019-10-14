import React from "react";
import Pertandingan from "./components/Pertandingan";

function App() {
  return (
    <div className="container-fluid bg-light p-4">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Pertandingan />
        </div>
        <div className="col-md-6 col-sm-12"></div>
      </div>
    </div>
  );
}

export default App;
