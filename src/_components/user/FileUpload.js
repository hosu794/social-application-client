import React, { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { fileActions } from "../../_actions";

import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";

import Progress from "./Progres";

import Message from "./Message";

function FileUpload() {
  const dispatch = useDispatch();

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    console.log(file);

    dispatch(fileActions.uploadAvatar(formData));
  };

  return (
    <div className="column">
      {" "}
      <React.Fragment>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>

          <Progress percentage={uploadPercentage} />

          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
        {uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto"></div>
            <h3 classNAme="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        ) : null}
      </React.Fragment>
    </div>
  );
}

export default FileUpload;

FileUpload.propTypes = {
  fileActions: PropTypes.object,
};
