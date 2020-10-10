import React from "react";
import Card from "./HomeImage"

function Home() {
  return (
    <div className="home">
      <h1>HOME</h1>
      <p>General welcome statment and site instructions go here</p>
      <div className="paralaxWrap">
       <Card /> 
      </div> 
    </div>
  );
}

export default Home;
