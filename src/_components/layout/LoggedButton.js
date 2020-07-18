import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../_actions";
import PropTypes from "prop-types";
import loading from "../../img/loading.gif";
import { Link } from "react-router-dom";

import LogoutButton from "../auth/LogoutButton";

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
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "10rem",
                  }}
                  src={
                    user.avatarDownloadUri
                      ? user.avatarDownloadUri
                      : "https://bulma.io/images/placeholders/128x128.png"
                  }
                />
                <div
                  style={{
                    position: "absolute",
                  }}
                ></div>
              </div>
            </div>
          </Link>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <button className="button is-loading"></button>
          <LogoutButton />
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
