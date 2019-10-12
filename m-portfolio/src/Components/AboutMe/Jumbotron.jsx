import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron border border-success">
      <h1 className="display-4">Hello, Visitors!</h1>
      <p className="lead">This was built for you using the React Library.</p>
      <hr className="my-4" />
      <p>It uses JSX and componetized building.</p>
      <a className="btn btn-primary btn-lg" href="localhost:3000" role="button">
        Resume To go!
      </a>
    </div>
  );
}

export default Jumbotron;
