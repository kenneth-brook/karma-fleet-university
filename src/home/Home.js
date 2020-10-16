import React from "react";
import Paralax from "./HomeImage"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Karmafleet University</h1>
      <p>Need components left and right of log</p>
      <div className="paralaxWrap">
       <Paralax /> 
      </div> 
    </div>
  );
}

export default Home;
