import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import routes from "../src/routes";
import { useRoutes } from "hookrouter";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="main-container">
      <Navbar />
      {routeResult}
      <Footer />
    </div>
  );
}

export default App;
