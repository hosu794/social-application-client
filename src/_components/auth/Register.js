import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { authActions, alertActions } from "../../_actions";
import { userService } from "../../_services";

function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordReapet: "",
  });

  const dispatch = useDispatch();

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

  function createNewUser(user) {
    const newUser = {
      name,
      username,
      email,
      password,
    };

    return newUser;
  }

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
      console.log("Password are not same");
      setError((error) => ({
        isTrue: true,
        message: "Password are not same!",
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

  function isResponseSuccessfully() {
    if (alert.type == "alert-success") {
      console.log("Success");
    } else {
      setError((error) => ({
        isTrue: true,
        message: alert.message,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(alertActions.clear());

    validateUserFields();

    arePasswordSame(password, passwordReapet);

    const validateCrudentialsAndCheckIsError =
      username && name && password && passwordReapet && error;

    if (validateCrudentialsAndCheckIsError) {
      dispatch(authActions.register(createNewUser(user)));

      isResponseSuccessfully();
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
                <i class="fas fa-users"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="name"
                onChange={handleChange}
                value={name}
                type="text"
                placeholder="Name"
              />

              <span class="icon is-small is-left">
                <i class="fas fa-users"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="email"
                onChange={handleChange}
                value={email}
                type="email"
                placeholder="Email"
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
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                name="passwordReapet"
                onChange={handleChange}
                value={passwordReapet}
                type="password"
                placeholder="Reapet password"
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
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
