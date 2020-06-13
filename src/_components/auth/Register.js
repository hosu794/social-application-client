import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { authActions, alertActions, userActions } from "../../_actions";
import { userService } from "../../_services";
import { createNewUser } from "../../_helpers";
import { rearg } from "lodash";

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordReapet: "",
  });

  const dispatch = useDispatch();

  const isUsernameAvailable = useSelector(
    (state) => state.user.isUsernameAvailable
  );
  const isEmailAvailable = useSelector((state) => state.user.isEmailAvailable);
  const alert = useSelector((state) => state.alert);
  const registering = useSelector((state) => state.registration.registration);
  const { name, password, passwordReapet, username, email } = user;

  const [error, setError] = useState({
    isTrue: false,
    message: "",
  });

  useEffect(() => {
    dispatch(authActions.logout());
  }, []);

  function clearAlerts() {
    setError((error) => ({
      isTrue: false,
      message: "",
    }));
  }

  function arePasswordSame(password, repeatedPassword) {
    const competePassword = password === repeatedPassword;

    console.log("Compete Passwords");
    if (!competePassword) {
      setError((error) => ({
        isTrue: true,
        message: "Password are not same!",
      }));
      return false;
    } else {
      return true;
    }
  }

  function checkEmailAvailability(email) {
    dispatch(userActions.checkEmailAvailability(email));
    if (!isEmailAvailable) {
      setError((error) => ({
        isTrue: true,
        message: "Email is already taken",
      }));
    }
  }

  function checkUsernameAvailability(username) {
    dispatch(userActions.checkUsernameAvailability(username));
    if (!isUsernameAvailable) {
      setError((error) => ({
        isTrue: true,
        message: "Username is already taken",
      }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function validateUserFields() {
    if (!user.username) {
      setError((error) => ({
        isTrue: true,
        message: "Username is required!",
      }));
    } else if (!user.name) {
      setError((error) => ({
        isTrue: true,
        message: "User is required!",
      }));
    } else if (!user.email) {
      setError((error) => ({
        isTrue: true,
        message: "Email is required!",
      }));
    } else if (!user.password) {
      setError((error) => ({
        isTrue: true,
        message: "Password is required!",
      }));
    } else if (!user.email) {
      setError((error) => ({
        isTrue: true,
        message: "Email is required!",
      }));
    } else if (!user.passwordReapet) {
      setError((error) => ({
        isTrue: true,
        message: "Reapet Password",
      }));
    }
  }

  function handleAlertButton() {
    clearAlerts();
  }

  function handleSubmit(e) {
    e.preventDefault();

    clearAlerts();

    validateUserFields();

    arePasswordSame(password, passwordReapet);

    checkUsernameAvailability(username);
    checkEmailAvailability(email);

    const validateCrudentialsAndCheckIsError =
      username && name && password && passwordReapet;

    if (arePasswordSame && validateCrudentialsAndCheckIsError) {
      clearAlerts();
      dispatch(authActions.register(createNewUser(user)));
    }
  }

  const showError = error.isTrue;

  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <form onSubmit={handleSubmit} className="container has-text-centered">
          {showError && (
            <div className="notification is-danger">
              <button onClick={handleAlertButton} className="delete"></button>
              {error.message}
            </div>
          )}
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="username"
                onChange={handleChange}
                value={username}
                type="text"
                placeholder="Username"
              />

              <span className="icon is-small is-left">
                <i className="fas fa-users"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="name"
                onChange={handleChange}
                value={name}
                type="text"
                placeholder="Name"
              />

              <span className="icon is-small is-left">
                <i className="fas fa-users"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="email"
                onChange={handleChange}
                value={email}
                type="email"
                placeholder="Email"
              />

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                name="password"
                onChange={handleChange}
                value={password}
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                name="passwordReapet"
                onChange={handleChange}
                value={passwordReapet}
                type="password"
                placeholder="Reapet password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <button
              type="submit"
              className="button is-primary is-fullwidth is-light"
            >
              {registering ? "Registering" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
