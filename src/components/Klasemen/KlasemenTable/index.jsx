import React from "react";


// untuk view
const KlasemenTable = ({ teams }) => {
  return (
    <div>
      <center>
        <h2>Leaderboard</h2>
      </center>
      <table className="table table-bordered bg-light">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Team</th>
            <th scope="col">P</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">F</th>
            <th scope="col">A</th>
            <th scope="col">PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => {
            return (
              <tr key={team.id_team}>
                <td> {i + 1} </td>
                <td> {team.nama_team} </td>
                <td> {team.P} </td>
                <td> {team.W} </td>
                <td> {team.D} </td>
                <td> {team.L} </td>
                <td> {team.F} </td>
                <td> {team.A} </td>
                <td> {team.pts} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KlasemenTable;
