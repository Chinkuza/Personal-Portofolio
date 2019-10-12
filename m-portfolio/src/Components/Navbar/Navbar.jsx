import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-fix navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://bit.ly/2ZlYnjG"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              About Me <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Portfolio">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contacts">
              Contact Me!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
