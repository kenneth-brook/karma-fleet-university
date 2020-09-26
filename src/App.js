import React from "react";
import { Route } from "react-router-dom";
import "./sassMaster/index.scss";

import Head from "./head/Head";
import Nav from "./nav/Nav";
import Foot from "./foot/Foot";

function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <Foot />
    </div>
  );
}

export default App;
