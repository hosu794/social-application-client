import React, { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav class="navbar " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h1 className="title">The Writer's Mind</h1>
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          class={`navbar-burger burger ${isActive ? "is-active" : ""}`}
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
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Stories</a>
          <a class="navbar-item">Dashboard</a>
          <a class="navbar-item">About</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
