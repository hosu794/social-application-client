import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { authActions, alertActions } from "../../_actions";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;
  const loading = useSelector((state) => state.authentication.loading);
  const logginIn = useSelector((state) => state.authentication.logginIn);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const [error, setError] = useState({
    isTrue: false,
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }

  function clearAlerts() {
    setError((error) => ({
      isTrue: false,
      message: "",
    }));
  }

  function handleAlertButton() {
    clearAlerts();
  }

  useEffect(() => {
    dispatch(authActions.logout());
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();

    clearAlerts();

    isValidPasswordAndUsername();

    checkIsUsernameThenPasswordExistAndLogin(username, password);
  }

  function checkIsUsernameThenPasswordExistAndLogin(username, password) {
    if (username && password) {
      clearAlerts();
      dispatch(authActions.login(username, password));
      if (!loading) {
        areCrudentialsAreCorrect(alert);
      }
    }
  }

  function isValidPasswordAndUsername() {
    if (!username) {
      setError((error) => ({
        isTrue: true,
        message: "Username is required!",
      }));
    } else if (!password) {
      setError((error) => ({
        isTrue: true,
        message: "Password is required!",
      }));
    }
  }

  function areCrudentialsAreCorrect(alert) {
    if (alert.type == "alert-danger") {
      setError((error) => ({
        isTrue: true,
        message: "Bad Crudientials!",
      }));
    }
  }

  const showError = error.isTrue;

  return (
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <form onSubmit={handleSubmit} class="container has-text-centered">
          {showError && (
            <div class="notification is-danger">
              <button onClick={handleAlertButton} class="delete"></button>
              {error.message}
            </div>
          )}
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="username"
                onChange={handleChange}
                value={username}
                type="text"
                placeholder="Username"
              />

              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                name="password"
                onChange={handleChange}
                value={password}
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <button
              type="submit"
              class="button is-primary is-fullwidth is-light"
            >
              {loading ? "loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

Login.propTypes = {
  loading: PropTypes.bool,
  logginIn: PropTypes.bool,
  alert: PropTypes.object,
  authActions: PropTypes.object,
};
export default Login;
