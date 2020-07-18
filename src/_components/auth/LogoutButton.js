import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../_actions";

function LogoutButton() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function logoutUserOnClick() {
    dispatch(authActions.logout());
  }

  return (
    <a onClick={logoutUserOnClick} className="button is-light">
      Log out
    </a>
  );
}

export default LogoutButton;
