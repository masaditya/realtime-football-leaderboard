import React from "react";

const KlasemenTable = ({ teams }) => {
  console.log(teams);
  return (
    <div>
      <center> <h2>Leaderboard</h2>  </center>
      <table className="table table-bordered">
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
                <td> {team.name} </td>
                <td> {team.p} </td>
                <td> {team.w} </td>
                <td> {team.d} </td>
                <td> {team.l} </td>
                <td> {team.f} </td>
                <td> {team.a} </td>
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
