import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light" >
      <div className = "container">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="navbar-nav ml-auto">
          <li class="nav-item ">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li class="nav-item ">
            <Link className="nav-link" to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
