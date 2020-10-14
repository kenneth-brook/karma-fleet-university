import React from "react";
import Paralax from "./HomeImage"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Karmafleet University</h1>
      <p>General welcome statment and site instructions go here</p>
      <div className="paralaxWrap">
       <Paralax /> 
      </div> 
    </div>
  );
}

export default Home;
