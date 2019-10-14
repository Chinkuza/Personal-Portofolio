import React from "react";

function Table() {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Language Used</th>
          {/* <th scope="col">Last</th>
          <th scope="col">Handle</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>SQL</td>
          <td> Database of inventory for E-commerce site</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>JavaScript</td>
          <td>Functionality to user input and commands</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Node.js</td>
          <td>To use express framework for server use</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
