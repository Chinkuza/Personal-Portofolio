import React from "react";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";

const routes = {
  "/": () => <AboutMe />,
  "/Portfolio": () => <Portfolio />,
  "/Contacts": () => <Contacts />
};

export default routes;
