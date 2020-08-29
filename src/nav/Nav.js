import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
            <NavLink className="link" to="/Skills" activeClassName="active">
              Policies
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Blog" activeClassName="active">
              Our-Mission
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Portfolio" activeClassName="active">
              Staff
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Hire" activeClassName="active">
              Basics
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Hire" activeClassName="active">
              Industry
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Hire" activeClassName="active">
              PvE
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Hire" activeClassName="active">
              PvP
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <div>
        <Route exact path="/" component={Home} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Hire" component={Hire} />
      </div> */}
    </div>
  );
}

export default Nav;
