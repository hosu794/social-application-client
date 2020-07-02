import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { authActions, alertActions, userActions } from "../../_actions";

import { userService } from "../../_services";

import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function Register() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentication);
  const isUsernameAvailable = useSelector(
    (state) => state.user.isUsernameAvailable
  );
  const isEmailAvailable = useSelector((state) => state.user.isEmailAvailable);

  const registering = useSelector((state) => state.registration.registration);
  const isAvailable = useSelector((state) => state.user.isUsernameAvailable);
  useEffect(() => {
    dispatch(authActions.logout());
  }, []);

  function validateUsername(value) {
    dispatch(userActions.checkUsernameAvailability(value));
    if (isAvailable) return isAvailable;
  }

  function validateEmail(value) {
    dispatch(userActions.checkEmailAvailability(value));
    if (isEmailAvailable) return isEmailAvailable;
  }

  function register(name, username, email, password) {
    const newUser = {
      name,
      username,
      email,
      password,
    };

    dispatch(authActions.register(newUser));
  }

  return (
    <section class="hero is-success is-fullheight">
      <Formik
        className="hero-body"
        initialValues={{
          username: "",
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Password is required"),
          username: Yup.string()
            .required("Username is required")
            .min(6, "Password must have at least 6 characters")
            .test("Check username", "Username is exists", (value) =>
              validateUsername(value)
            ),
          name: Yup.string()
            .required("Name is required")
            .min(3, "Name must have at least 3 characters"),
          email: Yup.string()
            .email()
            .min(6, "Email must have at least 6 characters")
            .test("validate email", "Email is exist", (value) =>
              validateEmail(value)
            )
            .required("Email is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={(fields) => {
          register(fields.name, fields.username, fields.email, fields.password);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <h1 class="title">Change Password</h1>

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
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                className={
                  "input" + (errors.name && touched.name ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className="help is-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <Field
                name="email"
                type="email"
                className={
                  "input" + (errors.email && touched.email ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="email"
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
              <label htmlFor="c">Confirm password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "input" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-danger"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="help is-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className={
                  "button is-info is-medium is-full-width " +
                  (registering ? "is-loading" : "")
                }
                style={{
                  margin: "2rem 0 2rem 0",
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      />
    </section>
  );
}

Register.propTypes = {
  auth: PropTypes.object,
  isUsernameAvailable: PropTypes.bool,
  isEmailAvailable: PropTypes.bool.isRequired,
  registering: PropTypes.bool,
  isAvailable: PropTypes.bool,
};

export default Register;
