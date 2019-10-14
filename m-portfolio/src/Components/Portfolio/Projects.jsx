import React from "react";

function Proyectos() {
  return (
    <div className="card-deck">
      <div className="card">
        <img
          src="/img/1stcard-portofolio.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">E-commerce Website</h5>
          <p className="card-text">
            Made a E-cmmerce website using react and node.js and implemantation
            of a SQL database.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img
          src="/img/2ndcard.png"
          className="card-img-top"
          alt="..."
          height=" 800px"
        />
        <div className="card-body">
          <h5 className="card-title">Calculator App</h5>
          <p className="card-text">
            My First App!! a simple to use calculator that does some simple
            mathematical equations!
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img src="/img/3card.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">
            A Weather app that can accuratley display weather conditions for 1
            city only. (V2 coming soon).
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
