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

function Dashboard() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.content);
  const loading = useSelector((state) => state.topics.loading);
  useEffect(() => {
    dispatch(topicActions.getAllTopics());
  }, [alert.type]);

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
          richtext: "",
          color: "",
          title: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          richtext: Yup.string().required("Text is required"),
          color: Yup.string().required("Select color"),
          title: Yup.string().required("Title required"),
          description: Yup.string().required("Description required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(
              storyActions.create({
                title: values.title,
                description: values.description,
                body: values.richtext,
                topic: values.color,
              })
            );
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
              <label htmlFor="email" style={{ display: "block" }}>
                Color
              </label>
              <div class="control">
                <div className="select">
                  <select
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Select a topic" />:
                    {loading
                      ? null
                      : topics.map((topic) => (
                          <option value={topic.id}>{topic.title}</option>
                        ))}
                  </select>
                </div>
              </div>
              {errors.color && touched.color && (
                <ErrorMessage
                  name="color"
                  component="div"
                  className="help is-danger"
                />
              )}

              <div className="form-group">
                <label htmlFor="title">Username</label>
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

Dashboard.propTypes = {
  topics: PropTypes.arrayOf(ITopic),
  loading: PropTypes.bool,
  topicActions: PropTypes.object,
};

export default Dashboard;
