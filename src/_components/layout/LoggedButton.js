import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../_actions";

import loading from "../../img/loading.gif";

function LoggedButton() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function logoutUserOnClick() {
    dispatch(authActions.logout());
  }

  return (
    <React.Fragment>
      <a className="button is-primary">
        <strong>
          {user ? (
            user.username
          ) : (
            <img className="is-light" src={loading} alt="loading..." />
          )}
        </strong>
      </a>
      <a onClick={logoutUserOnClick} className="button is-light">
        Log out
      </a>
    </React.Fragment>
  );
}

export default LoggedButton;
