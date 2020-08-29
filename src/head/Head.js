import React from "react";
import tempbee from "../images/tempbee.png";

export default function Head() {
  return (
    <header className="head">
      <h1>Karmafleet University</h1>
      <div className="logo">
        <img src={tempbee} alt="Logo" />
      </div>
      <p>EVE is hard, but it does not have to be.</p>
      <p>Let KFU show you "DA WAE"</p>
    </header>
  );
}
