import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "../home/Home";
import Policies from "../policies/Policies";
import Mission from "../mission/Mission";
import Staff from "../staff/Staff";
import Basics from "../basics/Basics";
import Industry from "../industry/Industry";
import PvE from "../pve/PvE";
import PvP from "../pvp/PvP";

function Nav() {
  return (
    <div className="navWrap">
      <nav>
        <ul>
          <li>
            <NavLink className="link" exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Policies" activeClassName="active">
              Policies
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Mission" activeClassName="active">
              Our-Mission
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Staff" activeClassName="active">
              Staff
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Basics" activeClassName="active">
              Basics
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Industry" activeClassName="active">
              Industry
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/PvE" activeClassName="active">
              PvE
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/PvP" activeClassName="active">
              PvP
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Policies" component={Policies} />
        <Route path="/Mission" component={Mission} />
        <Route path="/Staff" component={Staff} />
        <Route path="/Basics" component={Basics} />
        <Route path="/Industry" component={Industry} />
        <Route exact path="/PvE" component={PvE} />
        <Route exact path="/PvP" component={PvP} />
      </div>
    </div>
  );
}

export default Nav;
