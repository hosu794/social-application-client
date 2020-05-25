import React from "react";
import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <React.Fragment>
      <Link to="/register" className="button is-primary">
        <strong>Sign up</strong>
      </Link>
      <Link to="/login" className="button is-light">
        Log in
      </Link>
    </React.Fragment>
  );
}

export default AuthButtons;
