import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { fileActions } from "../../_actions";

import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

function FileUpload() {
  const dispatch = useDispatch();

  return (
    <div className="column">
      <Formik
        className="hero-body"
        initialValues={{ file: null }}
        onSubmit={(values) => {
          const { file } = values;
          var formData = new FormData();
          formData.append("file", file);

          dispatch(fileActions.uploadAvatar(formData));
        }}
        validationSchema={Yup.object().shape({
          file: Yup.mixed().required("File is required"),
        })}
        render={({ values, handleSubmit, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <h1 class="title">Change Avatar</h1>
              <div className="form-group">
                <div class="file hero-body">
                  <label for="file" class="file-label">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                      className="file-input"
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                    {values.file ? (
                      <span
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                        }}
                        className="file-name"
                      >
                        {values.file.name}
                      </span>
                    ) : null}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="button is-info is-medium is-full-width"
                style={{
                  margin: "2rem 0 2rem 0",
                }}
              >
                Upload Avatar
              </button>
            </form>
          );
        }}
      />
    </div>
  );
}

export default FileUpload;

FileUpload.propTypes = {
  fileActions: PropTypes.object,
};
