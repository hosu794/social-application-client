import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../../_actions";
import PropTypes from "prop-types";

function CreateComment({ id }) {
  const dispatch = useDispatch();

  return (
    <section className="column">
      <div className="card">
        <Formik
          className="hero-body"
          initialValues={{
            body: "",
          }}
          validationSchema={Yup.object().shape({
            body: Yup.string().required("Text is required"),
          })}
          onSubmit={(fields) => {
            dispatch(
              commentActions.createComment({
                body: fields.body,
                storyId: id,
              })
            );
          }}
          render={({ errors, status, touched }) => (
            <Form>
              <h1
                className="title"
                style={{
                  color: "hsl(0, 0%, 21%)",
                }}
              >
                Write a comment
              </h1>

              <div className="form-group">
                <Field
                  placeholder="Write some text..."
                  name="body"
                  type="body"
                  className={
                    "input" + (errors.body && touched.body ? " is-danger" : "")
                  }
                />
                <ErrorMessage
                  name="body"
                  component="div"
                  className="help is-danger"
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className={"button is-info is-medium "}
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
    </section>
  );
}

CreateComment.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CreateComment;
