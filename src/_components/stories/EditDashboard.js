import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import RichTextEditor from "./TextEditor/RichTextEditor";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { ConfigProvider, Radio, Button, Typography } from "antd";

import * as Yup from "yup";

import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";

import { topicActions, storyActions } from "../../_actions";
import { ITopic } from "../../_types";

import PropTypes from "prop-types";

function EditDashboard(props) {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.content);
  const loading = useSelector((state) => state.topics.loading);

  useEffect(() => {
    dispatch(topicActions.getAllTopics());
  }, []);

  return (
    <section
      style={{
        width: "80vw",
      }}
    >
      <h1 className="title">Create story</h1>
      <h2 className="subtitle">Start editing to see some magic happen!</h2>

      <Formik
        initialValues={{
          richtext: props.story.body,
          title: props.story.title,
          description: props.story.description,
        }}
        validationSchema={Yup.object().shape({
          richtext: Yup.string().required("Text is required"),
          title: Yup.string().required("Title required"),
          description: Yup.string().required("Description required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Submit");
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
              <Field name="richtext">
                {({ field, form }) => (
                  <div className="text-editor" style={{ margin: "auto 0px" }}>
                    <RichTextEditor name="richtext" field={field} />

                    <ErrorMessage
                      name="richtext"
                      component="div"
                      className="help is-danger"
                    />
                  </div>
                )}
              </Field>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field
                  name="title"
                  type="text"
                  className={
                    "input" +
                    (errors.title && touched.title ? " is-danger" : "")
                  }
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="help is-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  type="text"
                  className={
                    "input" +
                    (errors.description && touched.description
                      ? " is-danger"
                      : "")
                  }
                />
                <ErrorMessage
                  name="description"
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
                      className="button is-primary is-medium"
                      htmlType="submit"
                      type="submit"
                    >
                      Submit
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

export default EditDashboard;
