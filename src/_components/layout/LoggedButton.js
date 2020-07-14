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
      {user ? (
        <div>
          <Link to="/account" className="button is-primary">
            <div className="level">
              <div
                className="level-item level-left "
                style={{ marginRight: "0.5rem" }}
              >
                <img
                  src={
                    user.avatarDownloadUri
                      ? user.avatarDownloadUri
                      : "https://bulma.io/images/placeholders/128x128.png"
                  }
                />
              </div>
              <div className="level-item level-right">
                <strong>{user.username}</strong>
              </div>
            </div>
          </Link>
          <a onClick={logoutUserOnClick} className="button is-light">
            Log out
          </a>
        </div>
      ) : (
        <div>
          <button className="button is-loading"></button>
          <a onClick={logoutUserOnClick} className="button is-light">
            Log out
          </a>
        </div>
      )}
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
