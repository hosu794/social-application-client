import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { authActions } from "../../_actions";

import PropTypes from "prop-types";

function ChangePassword() {
  const dispatch = useDispatch();

  function updatePassword(password) {
    dispatch(authActions.updatePassword(password));
  }

  return (
    <div className="column">
      <Formik
        className="hero-body"
        initialValues={{
          password: "",
          repeatPassword: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .min(6, "Username must have at least 6 characters")
            .required("Password is required"),
          repeatPassword: Yup.string()
            .min(6, "Username must have at least 6 characters")
            .oneOf([Yup.ref("password"), null], "Passwords must be same")
            .required("Password is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          updatePassword(fields.password);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <h1 class="title">Change Password</h1>
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
              <label htmlFor="repeatPassword">Reapet Username</label>
              <Field
                name="repeatPassword"
                type="password"
                className={
                  "input" +
                  (errors.repeatPassword && touched.repeatPassword
                    ? " is-danger"
                    : "")
                }
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="help is-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="button is-info is-medium is-full-width"
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
    </div>
  );
}

export default ChangePassword;

ChangePassword.propTypes = {
  authActions: PropTypes.object,
};
