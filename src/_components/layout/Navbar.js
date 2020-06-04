import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LoggedButton from "./LoggedButton";
import AuthButtons from "../auth/AuthButtons";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <h1 className="title">The Writer's Mind</h1>
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/stories" className="navbar-item">
            Stories
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {loggedIn ? <LoggedButton /> : <AuthButtons />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
