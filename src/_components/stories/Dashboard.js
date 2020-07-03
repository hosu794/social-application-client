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

function Dashboard() {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topics.content);
  const loading = useSelector((state) => state.topics.loading);
  useEffect(() => {
    dispatch(topicActions.getAllTopics());
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> And here is a RichTextEditor</p>
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
          console.log("what I am submitting is: ", values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            alert(values.richtext);
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
                    {form.errors.richtext && form.touched.richtext ? (
                      <div className="explain">{form.errors.richtext}</div>
                    ) : null}
                  </div>
                )}
              </Field>
              <label htmlFor="email" style={{ display: "block" }}>
                Color
              </label>
              <select
                name="color"
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
              >
                <option value="" label="Select a color" />:
                {loading
                  ? null
                  : topics.map((topic) => (
                      <option value={topic.id}>{topic.title}</option>
                    ))}
              </select>
              {errors.color && touched.color && (
                <div className="input-feedback">{errors.color}</div>
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
                <Button htmlType="submit" disabled={!isValid || isSubmitting}>
                  Submit
                </Button>
              </div>
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
}

export default Dashboard;
