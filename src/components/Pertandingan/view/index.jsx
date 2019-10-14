import React from "react";

const PertandinganView = ({ team, handleTeamA }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <select
            className="custom-select"
            id="teamA"
            onChange={e => handleTeamA(e.target.value)}
          >
            {team.map((tim, i) => {
              return (
                <option value={tim} key={i}>
                  {tim.nama}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-6">
          <select className="custom-select" id="teamB">
            {team.map((tim, i) => {
              return <option key={i}>{tim.nama}</option>;
            })}
          </select>
        </div>
      </div>
      <button className="btn btn-success my-4">Submit</button>
    </div>
  );
};

export default PertandinganView;
