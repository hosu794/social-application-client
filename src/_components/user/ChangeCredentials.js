import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions, authActions } from "../../_actions";

function ChangeCredentials() {
  function onSubmitChangeName() {}

  function handleChange() {}

  const dispatch = useDispatch();
  const isAvailable = useSelector((state) => state.user.isUsernameAvailable);

  function updateUsername(username) {
    dispatch(authActions.updateUsername(username));
  }

  function updatePassword(password) {
    dispatch(authActions.updatePassword(password));
  }

  function validateName(value) {
    dispatch(userActions.checkUsernameAvailability(value));
    if (isAvailable) return isAvailable;
  }
  return (
    <div class="container has-text-centered columns">
      <div className="column">
        <Formik
          className="hero-body"
          initialValues={{
            username: "",
            lastName: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .min(6, "Username must have at least 6 characters")
              .required("Username is required")
              .test("is incorrent", "Name is exists", (value) => {
                return validateName(value);
              }),
            lastName: Yup.string()
              .min(6, "Username must have at least 6 characters")
              .oneOf([Yup.ref("username"), null], "Usernames must be same")
              .required("Last Name is required"),
          })}
          onSubmit={(fields) => {
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            updateUsername(fields.username);
          }}
          render={({ errors, status, touched }) => (
            <Form>
              <h1 class="title">Change Username</h1>
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
                <label htmlFor="lastName">Reapet Username</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "input" +
                    (errors.lastName && touched.lastName ? " is-danger" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
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
                  type="text"
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
                  type="text"
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
      <div className="column">
        <Formik
          initialValues={{ file: null }}
          onSubmit={(values) => {
            alert(
              JSON.stringify(
                {
                  fileName: values.file.name,
                  type: values.file.type,
                  size: `${values.file.size} bytes`,
                },
                null,
                2
              )
            );
          }}
          validationSchema={Yup.object().shape({
            file: Yup.mixed().required(),
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="file">File upload</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="form-control"
                  />
                  <Thumb file={values.file} />
                </div>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
}

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}

export default ChangeCredentials;
