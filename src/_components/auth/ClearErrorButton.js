import React, { Children, useEffect } from "react";

import { useDispatch } from "react-redux";
import { authActions } from "../../_actions";

function ClearErrorButton({ children }) {
  let dispatch = useDispatch();

  function clearAlert() {
    dispatch(authActions.clearError());
  }

  useEffect(() => {
    clearAlert();
  }, []);

  return (
    <div className="notification is-danger">
      <button className="button-clear" onClick={clearAlert}></button>
      {children}
    </div>
  );
}
