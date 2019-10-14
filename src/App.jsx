import React from "react";
import Pertandingan from "./components/Pertandingan";
import Klasemen from "./components/Klasemen";

function App() {
  return (
    <div className="container-fluid bg-light p-4">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Pertandingan />
        </div>
        <div className="col-md-6 col-sm-12">
          <Klasemen />
        </div>
      </div>
    </div>
  );
}

export default App;
