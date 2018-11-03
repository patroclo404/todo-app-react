import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component{

  render() {
    return(
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/todo/'>
              Todo
            </Link>
          </li>
          <li>
            <Link to='/about/'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;