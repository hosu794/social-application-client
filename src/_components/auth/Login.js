import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../_actions";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
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
    clearAlerts();
  }, []);

  function handleSubmit(e) {
    console.log("Submit");
    e.preventDefault();
    clearAlerts();
    isValidPasswordAndUsername();
    isAlertEqualDanger(alert);

    setSubmitted(true);

    if (username && password) {
      dispatch(authActions.login(username, password));
    }
  }

  function isValidPasswordAndUsername() {
    const isValidUsername = submitted && !username;
    const isValidPassword = submitted && !password;

    if (isValidUsername) {
      setError((error) => ({
        isTrue: true,
        message: "Username is required!",
      }));
    } else if (isValidPassword) {
      console.log("password");
      setError((error) => ({
        isTrue: true,
        message: "Password is required!",
      }));
    }
  }

  function isAlertEqualDanger(alert) {
    if (alert.type == "alert-danger") {
      console.log("Danger");

      setError((error) => ({
        isTrue: true,
        message: "Bad Crudientials!",
      }));
    }
  }

  return (
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <form onSubmit={handleSubmit} class="container has-text-centered">
          {error.isTrue && (
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
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
