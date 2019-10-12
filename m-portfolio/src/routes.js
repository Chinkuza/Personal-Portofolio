import React from "react";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Form.jsx";

const routes = {
  "/": () => <AboutMe />,
  "/Portfolio": () => <Portfolio />,
  "/Contact": () => <Contact />
};

export default routes;
