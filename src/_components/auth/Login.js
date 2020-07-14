import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { authActions, alertActions } from "../../_actions";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

function Login() {
  const loading = useSelector((state) => state.authentication.loading);

  const auth = useSelector((state) => state.authentication);
  const [badCredentials, setBadCredentials] = useState(false);

  function clearAlert() {
    dispatch(authActions.clearError());
  }

  useEffect(() => {
    clearAlert();
  }, []);

  const dispatch = useDispatch();

  function login(username, password) {
    dispatch(authActions.login(username, password));
  }

  return (
    <section class="hero is-success is-fullheight">
      <Formik
        className="hero-body"
        initialValues={{
          password: "",
          username: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Password is required"),
          username: Yup.string().required("Username is required"),
        })}
        onSubmit={(fields) => {
          login(fields.username, fields.password);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <h1 class="title">Log in</h1>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                className={
                  "input" +
                  (errors.username && touched.username ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="help is-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "input" +
                  (errors.password && touched.password ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="help is-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className={
                  "button is-info is-medium is-full-width " +
                  (loading ? "is-loading" : "")
                }
                style={{
                  margin: "2rem 0 2rem 0",
                }}
              >
                Submit
              </button>
              {auth.error ? (
                <div class="notification is-danger">
                  <button onClick={clearAlert}></button>
                  {auth.error}
                </div>
              ) : null}
            </div>
          </Form>
        )}
      />
    </section>
  );
}

Login.propTypes = {
  loading: PropTypes.bool,
  auth: PropTypes.object,
  authActions: PropTypes.object,
};

export default Login;
