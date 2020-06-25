import React from "react";
import { NavLink } from "react-router-dom";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => NavBar
 *  PARENT: Routes
 *  CHILDREN:
 */

function NavBar() {


  return (
      <div>
        NavBar
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/register">Register</NavLink>
            </li>
          </ul>
      </div>
  );

}

export default NavBar;