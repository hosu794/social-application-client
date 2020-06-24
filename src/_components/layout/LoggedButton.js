import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../_actions";
import PropTypes from "prop-types";
import loading from "../../img/loading.gif";
import { Link } from "react-router-dom";

function LoggedButton() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  function logoutUserOnClick() {
    dispatch(authActions.logout());
  }

  return (
    <React.Fragment>
      <Link to="/account" className="button is-primary">
        <strong>
          {user ? (
            user.username
          ) : (
            <img className="is-light" src={loading} alt="loading..." />
          )}
        </strong>
      </Link>
      <a onClick={logoutUserOnClick} className="button is-light">
        Log out
      </a>
    </React.Fragment>
  );
}

LoggedButton.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.bool.isRequired,
    username: PropTypes.bool.isRequired,
    name: PropTypes.bool.isRequired,
  }),
  authActions: PropTypes.object,
};

export default LoggedButton;
