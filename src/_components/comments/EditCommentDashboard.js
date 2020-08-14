import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import RichTextEditor from "../stories/TextEditor/RichTextEditor";

import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { ConfigProvider, Radio, Button, Typography } from "antd";

import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";

import * as Yup from "yup";

import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import { commentActions } from "../../_actions";

function EditCommentDashboard(props) {
  const dispatch = useDispatch();

  function loadCurrentComment() {
    dispatch(commentActions.getCommentById(props.match.params.id));
  }

  useEffect(() => {
    loadCurrentComment();
  }, []);

  return (
    <section
      style={{
        width: "80vw",
      }}
    >
      <h1 className="title">Edit story</h1>

      <Formik
        initialValues={{
          body: "",
        }}
        validationSchema={Yup.object().shape({
          body: Yup.string().required("body required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);

            setSubmitting(false);
          }, 300);
        }}
      >
        {({
          isSubmitting,
          isValid,
          setFieldValue,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => {
          return (
            <FormikForm>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <Field
                  name="body"
                  type="text"
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
              <div
                style={{
                  paddingBottom: 24,
                  marginTop: 16,
                }}
              >
                <div className="level">
                  <div className="level-item level-center">
                    <button
                      className="button is-info is-medium"
                      htmlType="submit"
                      type="submit"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </FormikForm>
          );
        }}
      </Formik>
    </section>
  );
}

export default EditCommentDashboard;
